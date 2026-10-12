import fs from 'fs';
import { db } from './server/db.js';
import { towers } from './shared/schema.js';

// Lenz coordinates
const LENZ_LAT = -26.3335179;
const LENZ_LON = 27.8663075;
const RADIUS_KM = 45;

// Haversine distance formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

async function importTowers() {
  try {
    // Read towers.json
    const towersData = JSON.parse(fs.readFileSync('./client/public/assets/towers.json', 'utf8'));
    
    // Filter towers within 45km of Lenz
    const nearbyTowers = towersData.filter(tower => {
      const lat = parseFloat(tower.LAT);
      const lon = parseFloat(tower.LONG);
      if (isNaN(lat) || isNaN(lon)) return false;
      
      const distance = calculateDistance(LENZ_LAT, LENZ_LON, lat, lon);
      return distance <= RADIUS_KM;
    });
    
    console.log(`Found ${nearbyTowers.length} towers within ${RADIUS_KM}km of Lenz`);
    
    // Clear existing towers
    await db.delete(towers);
    console.log('Cleared existing towers');
    
    // Insert towers in batches
    const batchSize = 100;
    let imported = 0;
    
    for (let i = 0; i < nearbyTowers.length; i += batchSize) {
      const batch = nearbyTowers.slice(i, i + batchSize).map(tower => ({
        name: tower['TOWER Name'],
        latitude: parseFloat(tower.LAT),
        longitude: parseFloat(tower.LONG),
        coverageRadius: 3, // 3km coverage radius per tower
        signalStrength: 'strong',
        active: true
      }));
      
      await db.insert(towers).values(batch);
      imported += batch.length;
      console.log(`Imported ${imported}/${nearbyTowers.length} towers...`);
    }
    
    console.log('✅ Successfully imported all towers within 45km of Lenz!');
    process.exit(0);
  } catch (error) {
    console.error('Error importing towers:', error);
    process.exit(1);
  }
}

importTowers();
