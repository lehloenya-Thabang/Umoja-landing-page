import { apiRequest } from "@/lib/queryClient";

export interface CoverageCheckResult {
  inCoverage: boolean;
  signalStrength: string;
  latitude: number;
  longitude: number;
  checkId: string;
}

export interface GeocodeResult {
  latitude: number;
  longitude: number;
  formattedAddress: string;
  components: {
    streetNumber?: string;
    streetName?: string;
    suburb?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    country?: string;
  };
}

export class CoverageService {
  static async checkCoverage(data: { 
    address?: string; 
    latitude?: number; 
    longitude?: number 
  }): Promise<CoverageCheckResult> {
    const response = await apiRequest("POST", "/api/check-coverage", data);
    return response.json();
  }

  static async geocodeAddress(address: string): Promise<GeocodeResult> {
    const response = await apiRequest("POST", "/api/geocode", { address });
    return response.json();
  }

  static async getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          let message = "Unable to retrieve location";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              message = "Location access denied by user";
              break;
            case error.POSITION_UNAVAILABLE:
              message = "Location information unavailable";
              break;
            case error.TIMEOUT:
              message = "Location request timed out";
              break;
          }
          reject(new Error(message));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  }
}
