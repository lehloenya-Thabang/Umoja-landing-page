import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const consentKey = "umoja-analytics-consent";
const analyticsScriptId = "umoja-pagesense";
const analyticsSource = "https://cdn.pagesense.io/js/umojaportal/a389899604ad416298af9fc08458bcd0.js";

function loadAnalytics() {
  if (document.getElementById(analyticsScriptId)) return;

  const script = document.createElement("script");
  script.id = analyticsScriptId;
  script.src = analyticsSource;
  script.defer = true;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const choice = window.localStorage.getItem(consentKey);
    if (choice === "granted") loadAnalytics();
    if (!choice) setIsVisible(true);

    const reopenSettings = () => setIsVisible(true);
    window.addEventListener("umoja:cookie-settings", reopenSettings);
    return () => window.removeEventListener("umoja:cookie-settings", reopenSettings);
  }, []);

  const saveChoice = (choice: "granted" | "denied") => {
    window.localStorage.setItem(consentKey, choice);
    if (choice === "granted") loadAnalytics();
    if (choice === "denied" && document.getElementById(analyticsScriptId)) {
      window.location.reload();
      return;
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="cookie-consent" aria-label="Analytics preferences" aria-live="polite">
      <div>
        <h2>Help us improve Umoja</h2>
        <p>
          We use optional analytics to understand how this website is used. You can
          accept or decline without affecting the website. Read our{" "}
          <a href="/privacy-policy.html">Privacy Policy</a>.
        </p>
      </div>
      <div className="cookie-actions">
        <Button variant="outline" onClick={() => saveChoice("denied")}>Decline</Button>
        <Button className="cookie-accept" onClick={() => saveChoice("granted")}>Accept analytics</Button>
      </div>
    </aside>
  );
}
