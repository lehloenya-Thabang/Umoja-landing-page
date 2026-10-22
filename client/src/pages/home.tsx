import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import PackagesSection from "@/components/packages-section";
import FAQSection from "@/components/faq-section";
import OfficesSection from "@/components/offices-section";
import { useReferralTracking } from "@/hooks/use-referral";
import { useResellerTracking } from "@/hooks/use-reseller";

export default function Home() {
  // Capture referral and reseller IDs from URL parameters on page load
  useReferralTracking();
  useResellerTracking();
  
  return (
    <div id="home" className="pt-16">
      <Helmet>
        <title>Umoja 5G Home Internet | Uncapped Plans from R399</title>
        <meta name="description" content="Get uncapped 5G home internet from R399/month. Choose 20Mbps, 30Mbps or 50Mbps for your South African home — no surprise usage fees." />
        <link rel="canonical" href="https://promo.umoja.network/" />
        <meta property="og:title" content="Umoja 5G Home Internet | Uncapped Plans from R399" />
        <meta property="og:description" content="Choose uncapped 20Mbps, 30Mbps or 50Mbps 5G home internet with simple monthly pricing and no surprise usage fees." />
        <meta property="og:url" content="https://promo.umoja.network/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://promo.umoja.network/assets/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Umoja 5G Home Internet | Uncapped Plans from R399" />
        <meta name="twitter:description" content="Choose uncapped 20Mbps, 30Mbps or 50Mbps 5G home internet with simple monthly pricing and no surprise usage fees." />
        <meta name="twitter:image" content="https://promo.umoja.network/assets/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Umoja",
          "url": "https://promo.umoja.network/",
          "logo": "https://promo.umoja.network/assets/logo.avif",
          "telephone": "+27108805324",
          "email": "info@umoja.network",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd floor, Northcliff Junction, 159 Beyers Naude Drive",
            "addressLocality": "Johannesburg",
            "addressRegion": "Gauteng",
            "postalCode": "2115",
            "addressCountry": "ZA"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "13:00"
            }
          ],
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          },
          "description": "Umoja provides affordable, uncapped 5G home internet to South African communities from R399/month with no hidden fees and load-shedding backup."
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Umoja Homespot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Umoja Homespot is a 5G-enabled router that provides high-speed, Uncapped home internet. It uses advanced wireless technology to deliver a reliable and fast connection without the need for traditional fibre or ADSL lines."
              }
            },
            {
              "@type": "Question",
              "name": "How does the payment work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plans start at R399 per month for uncapped internet, with no usage charges or pay-as-you-go fees. The router is free to use, the once-off activation fee is R300, and your first month is included. After payment, delivery takes 3-5 working days."
              }
            },
            {
              "@type": "Question",
              "name": "Which Umoja 5G speed should I choose?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Choose 20Mbps for everyday browsing, HD streaming and working from home; 30Mbps for busy households, 4K video and gaming; or 50Mbps for bandwidth-heavy homes, multiple 4K streams and home offices."
              }
            },
            {
              "@type": "Question",
              "name": "Is there really no data limit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All Umoja plans are uncapped, so your connection is not disconnected when you reach a usage threshold. Our Fair Use Policy may reduce your speed to 5Mbps for the remainder of the billing period after you use 300GB on the R399 plan, 500GB on the R499 plan, or 800GB on the R549 plan."
              }
            },
            {
              "@type": "Question",
              "name": "How does the Fair Use Policy work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The R399 plan has a 300GB fair-use threshold, the R499 plan has a 500GB threshold, and the R549 plan has an 800GB threshold. If you reach your plan's threshold during a billing period, your connection speed is reduced to 5Mbps for the remainder of that billing period. Your service remains uncapped and is not disconnected."
              }
            },
            {
              "@type": "Question",
              "name": "Does the router work during load shedding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Your Umoja router has a built-in battery backup, so it stays on automatically when the power goes out. There's nothing to set up or switch — the moment electricity cuts, the router switches to battery power seamlessly. This means you can continue working, streaming, and browsing through load shedding without any interruption."
              }
            },
            {
              "@type": "Question",
              "name": "Do I own the router?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The router remains Umoja's property, but it's completely free for you to use as long as you're subscribed to our service. No rental fees, no purchase required - just enjoy your unlimited internet!"
              }
            }
          ]
        })}</script>
      </Helmet>
      <HeroSection />
      <BenefitsSection />
      <PackagesSection />
      <FAQSection />
      <OfficesSection />
    </div>
  );
}
