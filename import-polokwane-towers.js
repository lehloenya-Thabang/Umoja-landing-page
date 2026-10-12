import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Database connection
const sql = neon(process.env.DATABASE_URL);

// Polokwane service center coordinates
const POLOKWANE_CENTER = {
  lat: -23.9045,
  lon: 29.4689
};

// Coverage radius in kilometers
const COVERAGE_RADIUS_KM = 45;

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

async function importPolokwaneTowers() {
  try {
    // Read towers from JSON file
    const towersPath = join(__dirname, 'client', 'public', 'assets', 'towers.json');
    const towersData = JSON.parse(fs.readFileSync(towersPath, 'utf8'));

    console.log(`Total towers in file: ${towersData.length}`);

    // Filter Limpopo towers within 45km of Polokwane center
    const polokwaneTowers = towersData.filter(tower => {
      const hasLimSuffix = tower['TOWER Name'].includes('_LIM');
      if (!hasLimSuffix) return false;

      const lat = parseFloat(tower.LAT);
      const lon = parseFloat(tower.LONG);
      const distance = calculateDistance(POLOKWANE_CENTER.lat, POLOKWANE_CENTER.lon, lat, lon);

      return distance <= COVERAGE_RADIUS_KM;
    });

    console.log(`Limpopo towers within ${COVERAGE_RADIUS_KM}km of Polokwane: ${polokwaneTowers.length}`);

    // Import towers to database
    let importedCount = 0;
    for (const tower of polokwaneTowers) {
      const name = tower['TOWER Name'].replace(/_/g, ' ');
      const latitude = tower.LAT;
      const longitude = tower.LONG;

      try {
        // Check if tower already exists
        const existing = await sql`
          SELECT id FROM towers WHERE name = ${name} LIMIT 1
        `;
        
        if (existing.length === 0) {
          await sql`
            INSERT INTO towers (id, name, latitude, longitude, coverage_radius, signal_strength, active)
            VALUES (gen_random_uuid(), ${name}, ${latitude}, ${longitude}, 3, 'strong', true)
          `;
          importedCount++;
        } else {
          console.log(`Tower already exists: ${name}`);
        }
      } catch (error) {
        console.error(`Failed to import tower ${name}:`, error.message);
      }
    }

    console.log(`Successfully imported ${importedCount} Polokwane towers`);

    // Create Polokwane 45km coverage zone (circular polygon)
    const numPoints = 64;
    const coordinates = [];
    
    for (let i = 0; i <= numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const radiusInDegrees = COVERAGE_RADIUS_KM / 111; // Rough conversion
      const lat = POLOKWANE_CENTER.lat + radiusInDegrees * Math.cos(angle);
      const lon = POLOKWANE_CENTER.lon + radiusInDegrees * Math.sin(angle);
      coordinates.push([lon, lat]);
    }

    const geoJson = {
      type: "Polygon",
      coordinates: [coordinates]
    };

    // Insert coverage zone (check if exists first)
    const existingZone = await sql`
      SELECT id FROM coverage_zones WHERE name = 'Polokwane 45km Coverage Area' LIMIT 1
    `;
    
    if (existingZone.length === 0) {
      await sql`
        INSERT INTO coverage_zones (id, name, coordinates, signal_strength, active)
        VALUES (
          gen_random_uuid(),
          'Polokwane 45km Coverage Area',
          ${JSON.stringify(geoJson)},
          'strong',
          true
        )
      `;
    } else {
      await sql`
        UPDATE coverage_zones 
        SET coordinates = ${JSON.stringify(geoJson)},
            signal_strength = 'strong',
            active = true
        WHERE name = 'Polokwane 45km Coverage Area'
      `;
    }

    console.log('Successfully created Polokwane 45km coverage zone');
    console.log(`Coverage area: ~${Math.PI * COVERAGE_RADIUS_KM * COVERAGE_RADIUS_KM} sq km`);

  } catch (error) {
    console.error('Error importing Polokwane towers:', error);
    process.exit(1);
  }
}

importPolokwaneTowers();
