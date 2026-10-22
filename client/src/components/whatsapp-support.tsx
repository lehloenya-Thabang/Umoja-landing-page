import { SiWhatsapp } from "react-icons/si";

const supportUrl =
  "https://wa.me/27732125406?text=Hi%20Umoja%2C%20I%20need%20help%20with%20your%205G%20internet%20service.";

export default function WhatsAppSupport() {
  return (
    <a
      className="whatsapp-support"
      href={supportUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Umoja support on WhatsApp"
      data-testid="whatsapp-support-button"
    >
      <SiWhatsapp aria-hidden="true" />
      <span>WhatsApp support</span>
    </a>
  );
}
