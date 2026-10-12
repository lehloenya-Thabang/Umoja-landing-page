import { useEffect, useState } from "react";

const REFERRAL_STORAGE_KEY = "umoja_referral_id";

export function useReferralTracking() {
  const [refId, setRefId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlRefId = urlParams.get("ref_id");

    if (urlRefId) {
      const sanitized = sanitizeRefId(urlRefId);
      if (sanitized) {
        localStorage.setItem(REFERRAL_STORAGE_KEY, sanitized);
        setRefId(sanitized);
      }
    } else {
      const storedRefId = localStorage.getItem(REFERRAL_STORAGE_KEY);
      if (storedRefId) {
        setRefId(storedRefId);
      }
    }
  }, []);

  return refId;
}

export function getReferralId(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  const urlRefId = urlParams.get("ref_id");

  if (urlRefId) {
    const sanitized = sanitizeRefId(urlRefId);
    if (sanitized) {
      localStorage.setItem(REFERRAL_STORAGE_KEY, sanitized);
      return sanitized;
    }
  }

  return localStorage.getItem(REFERRAL_STORAGE_KEY);
}

export function setReferralId(refId: string): void {
  const sanitized = sanitizeRefId(refId);
  if (sanitized) {
    localStorage.setItem(REFERRAL_STORAGE_KEY, sanitized);
  }
}

export function clearReferralId(): void {
  localStorage.removeItem(REFERRAL_STORAGE_KEY);
}

function sanitizeRefId(refId: string): string | null {
  const trimmed = refId.trim();
  if (!trimmed) return null;
  
  if (/^[a-zA-Z0-9_-]+$/.test(trimmed)) {
    return trimmed;
  }
  
  return null;
}
