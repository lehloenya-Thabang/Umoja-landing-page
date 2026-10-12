/// <reference types="@types/google.maps" />
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelected?: (place: google.maps.places.PlaceResult | null) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
}

export function AddressAutocomplete({
  value,
  onChange,
  onPlaceSelected,
  placeholder = "Enter address...",
  className,
  id,
  disabled,
  onKeyPress,
  "data-testid": testId,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Google Maps Places API
  useEffect(() => {
    const loadGoogleMapsScript = async () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        setScriptLoaded(true);
        return;
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        setScriptLoaded(true);
        return;
      }

      // Get API key from backend for security
      try {
        const response = await fetch("/api/google-maps-config");
        const { apiKey } = await response.json();
        
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => {
          console.error("Failed to load Google Maps script");
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error("Failed to get Google Maps API key:", error);
      }
    };

    loadGoogleMapsScript();
  }, []);

  // Initialize autocomplete
  useEffect(() => {
    if (!scriptLoaded || !inputRef.current) return;

    try {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "za" }, // Restrict to South Africa
          fields: ["address_components", "formatted_address", "geometry", "name"],
          types: ["address"],
        }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          onChange(place.formatted_address);
          if (onPlaceSelected) {
            onPlaceSelected(place);
          }
        }
      });
    } catch (error) {
      console.error("Error initializing Google Places Autocomplete:", error);
    }

    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [scriptLoaded, onChange, onPlaceSelected]);

  return (
    <Input
      ref={inputRef}
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      className={className}
      disabled={disabled}
      data-testid={testId}
    />
  );
}
