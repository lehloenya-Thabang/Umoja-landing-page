import { useEffect, useState } from "react";

const RESELLER_STORAGE_KEY = "umoja_reseller_id";
const REFERRAL_STORAGE_KEY = "umoja_referral_id";

export function useResellerTracking() {
  const [resellerId, setResellerId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlResellerId = urlParams.get("reseller");

    if (urlResellerId) {
      const sanitized = sanitizeResellerId(urlResellerId);
      if (sanitized) {
        // Use sessionStorage so reseller mode only lasts for current browser session
        sessionStorage.setItem(RESELLER_STORAGE_KEY, sanitized);
        setResellerId(sanitized);
        // Clear any existing referral ID when using a reseller link
        localStorage.removeItem(REFERRAL_STORAGE_KEY);
      }
    } else {
      const storedResellerId = sessionStorage.getItem(RESELLER_STORAGE_KEY);
      if (storedResellerId) {
        setResellerId(storedResellerId);
      }
    }
  }, []);

  return resellerId;
}

export function getResellerId(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  const urlResellerId = urlParams.get("reseller");

  if (urlResellerId) {
    const sanitized = sanitizeResellerId(urlResellerId);
    if (sanitized) {
      sessionStorage.setItem(RESELLER_STORAGE_KEY, sanitized);
      return sanitized;
    }
  }

  return null;
}

export function setResellerId(resellerId: string): void {
  const sanitized = sanitizeResellerId(resellerId);
  if (sanitized) {
    sessionStorage.setItem(RESELLER_STORAGE_KEY, sanitized);
  }
}

export function clearResellerId(): void {
  sessionStorage.removeItem(RESELLER_STORAGE_KEY);
}

export function hasReseller(): boolean {
  return !!getResellerId();
}

export function getStoredResellerId(): string | null {
  return sessionStorage.getItem(RESELLER_STORAGE_KEY);
}

function sanitizeResellerId(resellerId: string): string | null {
  const trimmed = resellerId.trim();
  if (!trimmed) return null;
  
  if (/^[a-zA-Z0-9_-]+$/.test(trimmed)) {
    return trimmed;
  }
  
  return null;
}
