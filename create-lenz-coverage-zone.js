import { db } from './server/db.js';
import { coverageZones } from './shared/schema.js';

// Lenz coordinates
const LENZ_LAT = -26.3335179;
const LENZ_LON = 27.8663075;
const RADIUS_KM = 45;

// Function to create a circular polygon
function createCirclePolygon(centerLat, centerLon, radiusKm, numPoints = 64) {
  const coordinates = [];
  const radiusInDegrees = radiusKm / 111; // 1 degree ≈ 111km
  
  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    const lat = centerLat + radiusInDegrees * Math.cos(angle);
    const lon = centerLon + radiusInDegrees * Math.sin(angle);
    coordinates.push([lon, lat]); // GeoJSON uses [longitude, latitude]
  }
  
  return coordinates;
}

async function createCoverageZone() {
  try {
    // Create 45km circle polygon around Lenz
    const polygon = createCirclePolygon(LENZ_LAT, LENZ_LON, RADIUS_KM);
    
    const geoJson = {
      type: "Polygon",
      coordinates: [polygon]
    };
    
    // Delete existing Lenz coverage zone if it exists
    await db.delete(coverageZones);
    console.log('Cleared existing coverage zones');
    
    // Insert new coverage zone
    await db.insert(coverageZones).values({
      name: "Lenz 45km Coverage Area",
      coordinates: JSON.stringify(geoJson),
      signalStrength: "strong",
      active: true
    });
    
    console.log('✅ Successfully created 45km coverage zone around Lenz!');
    console.log(`Coverage area: ~${Math.PI * RADIUS_KM * RADIUS_KM} square kilometers`);
    process.exit(0);
  } catch (error) {
    console.error('Error creating coverage zone:', error);
    process.exit(1);
  }
}

createCoverageZone();
