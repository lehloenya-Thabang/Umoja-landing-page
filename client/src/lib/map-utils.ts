import L from "leaflet";

export interface CoverageZone {
  id: string;
  name: string;
  coordinates: string;
  signalStrength: string;
  active: boolean;
}

export interface Tower {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  coverageRadius: string;
  signalStrength: string;
  active: boolean;
}

export class MapUtils {
  static createCoverageZoneLayer(zone: CoverageZone): L.Polygon | null {
    try {
      const coordinates = JSON.parse(zone.coordinates);
      if (coordinates.type === "Polygon" && coordinates.coordinates?.[0]) {
        const latlngs = coordinates.coordinates[0].map((coord: number[]) => [coord[1], coord[0]]);
        
        return L.polygon(latlngs, {
          color: this.getSignalColor(zone.signalStrength),
          fillColor: this.getSignalColor(zone.signalStrength),
          fillOpacity: 0.3,
          weight: 2,
          className: `coverage-zone-${zone.signalStrength}`,
        });
      }
    } catch (error) {
      console.error("Error parsing zone coordinates:", error);
    }
    return null;
  }

  static createTowerMarker(tower: Tower): L.Marker {
    const towerIcon = L.divIcon({
      className: "tower-marker",
      html: "📡",
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    return L.marker([parseFloat(tower.latitude), parseFloat(tower.longitude)], { 
      icon: towerIcon 
    });
  }

  static createLocationMarker(latitude: number, longitude: number, isInCoverage: boolean): L.Marker {
    const markerIcon = L.divIcon({
      className: "location-marker",
      html: isInCoverage ? "📍" : "❌",
      iconSize: [25, 25],
      iconAnchor: [12, 12],
    });

    return L.marker([latitude, longitude], { icon: markerIcon });
  }

  static getSignalColor(signalStrength: string): string {
    switch (signalStrength) {
      case "strong":
        return "#22c55e"; // green
      case "medium":
        return "#f59e0b"; // yellow
      case "weak":
        return "#ef4444"; // red
      default:
        return "#6b7280"; // gray
    }
  }

  static calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  static isPointInPolygon(lat: number, lon: number, polygon: any): boolean {
    if (polygon.type !== "Polygon" || !polygon.coordinates?.[0]) {
      return false;
    }
    
    const coords = polygon.coordinates[0];
    let inside = false;
    
    for (let i = 0, j = coords.length - 1; i < coords.length; j = i++) {
      const xi = coords[i][1], yi = coords[i][0]; // Note: GeoJSON uses [lon, lat]
      const xj = coords[j][1], yj = coords[j][0];
      
      if (((yi > lon) !== (yj > lon)) &&
          (lat < (xj - xi) * (lon - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    
    return inside;
  }

  static fitMapToBounds(map: L.Map, zones: CoverageZone[], towers: Tower[]): void {
    const bounds = L.latLngBounds([]);
    
    // Add zone bounds
    zones.forEach(zone => {
      try {
        const coordinates = JSON.parse(zone.coordinates);
        if (coordinates.type === "Polygon" && coordinates.coordinates?.[0]) {
          coordinates.coordinates[0].forEach((coord: number[]) => {
            bounds.extend([coord[1], coord[0]]);
          });
        }
      } catch (error) {
        console.error("Error parsing zone coordinates:", error);
      }
    });
    
    // Add tower positions
    towers.forEach(tower => {
      bounds.extend([parseFloat(tower.latitude), parseFloat(tower.longitude)]);
    });
    
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [20, 20] });
    } else {
      // Default to Johannesburg if no bounds
      map.setView([-26.2041, 28.0473], 10);
    }
  }
}
