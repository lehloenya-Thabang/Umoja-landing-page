import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
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
        <title>Umoja 5G Home Internet | Affordable Uncapped Internet in South Africa</title>
        <meta name="description" content="Get uncapped 5G home internet from R399/month. Umoja delivers 20Mbps unlimited internet to South African families — no hidden fees, load-shedding ready. Check your coverage today." />
        <link rel="canonical" href="https://promo.umoja.network/" />
        <meta property="og:title" content="Umoja 5G Home Internet | Affordable Uncapped Internet in South Africa" />
        <meta property="og:description" content="Get uncapped 5G home internet from R399/month. Umoja delivers 20Mbps unlimited internet to South African families — no hidden fees, load-shedding ready. Check your coverage today." />
        <meta property="og:url" content="https://promo.umoja.network/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://promo.umoja.network/assets/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Umoja 5G Home Internet | Affordable Uncapped Internet in South Africa" />
        <meta name="twitter:description" content="Get uncapped 5G home internet from R399/month. Umoja delivers 20Mbps unlimited internet to South African families — no hidden fees, load-shedding ready. Check your coverage today." />
        <meta name="twitter:image" content="https://promo.umoja.network/assets/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Umoja",
          "url": "https://promo.umoja.network/",
          "logo": "https://promo.umoja.network/assets/og-image.png",
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
                "text": "It's simple! You pay R399 every month for unlimited internet - no usage charges or pay-as-you-go fees. The router is free to use (included with your subscription) and there's just a one-time R699 setup fee for installation and activation. After payment, delivery takes 3-5 working days."
              }
            },
            {
              "@type": "Question",
              "name": "How fast is \"20Mbps 5G Uncapped\"?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our 20Mbps speed is perfect for families. You can stream HD videos, video call, browse social media, and work from home simultaneously. It's fast enough for 4-6 devices to be connected at once without slowdowns."
              }
            },
            {
              "@type": "Question",
              "name": "Is there really no data limit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you get Uncapped data with generous usage allowances! While there will be a fair usage policy to ensure network quality for all users, you can stream, download, and browse freely for typical home internet usage without worrying about running out of data."
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
      <FAQSection />
      <OfficesSection />
    </div>
  );
}
