import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import payfastLogo from "@assets/Payfast_logo_1772788891947.png";
import verifiedByVisa from "@assets/PayGate-3D-Secure-Logo-Verified-by-Visa_1772789042628.png";
import visaLogo from "@assets/Visa_1772789115829.png";
import mastercardLogo from "@assets/Master_Card_1772789214152.png";
import mastercardSecure from "@assets/PayGate-3D-Secure-Logo-MasterCard-SecureCode_1772789252362.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/assets/logo.avif" 
              alt="Umoja Logo" 
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground">
              Connecting communities through affordable, high-speed 5G internet access for every home and business.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="footer-link-home">Home</a></li>
              <li><a href="https://portal.umoja.network/sign-up/2c4c2135bf4eca29" className="text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="footer-link-application">Apply Now</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+27108805324"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200" 
                  data-testid="contact-phone"
                >
                  010 880 5324
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <SiWhatsapp className="w-4 h-4 text-primary" />
                <a 
                  href="https://wa.me/27732125406" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200" 
                  data-testid="contact-whatsapp"
                >
                  073 212 5406
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground" data-testid="contact-email">info@umoja.network</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground" data-testid="contact-address">159 Beyers Naude Drive, Johannesburg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Secure Payment Strip */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Secure &amp; encrypted payments</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <img src={payfastLogo} alt="PayFast" className="h-7 w-auto object-contain" />
              <img src={visaLogo} alt="Visa" className="h-7 w-auto object-contain" />
              <img src={mastercardLogo} alt="Mastercard" className="h-7 w-auto object-contain" />
              <img src={verifiedByVisa} alt="Verified by Visa" className="h-7 w-auto object-contain" />
              <img src={mastercardSecure} alt="Mastercard SecureCode" className="h-7 w-auto object-contain" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2026 Umoja. All rights reserved. | 
            <a href="#" className="hover:text-primary transition-colors duration-200 ml-1" data-testid="footer-privacy">Privacy Policy</a> | 
            <a href="/assets/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200 ml-1" data-testid="footer-terms">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
