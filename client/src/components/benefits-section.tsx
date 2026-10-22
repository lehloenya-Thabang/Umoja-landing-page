import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Wallet, Wifi, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const communityPhotos = [
  {
    src: "/assets/family-using-umoja-internet.webp",
    alt: "Mother and daughter using a laptop together at home"
  },
  {
    src: "/assets/siblings-using-internet.webp",
    alt: "Two siblings enjoying online content together"
  },
  {
    src: "/assets/family-video-call.webp",
    alt: "A family connecting with a relative through a video call"
  }
];

export default function BenefitsSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || isGalleryPaused) return;

    const rotation = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % communityPhotos.length);
    }, 5500);

    return () => window.clearInterval(rotation);
  }, [isGalleryPaused]);

  const benefits = [
    {
      icon: Play,
      signal: "HD",
      signalLabel: "Smooth streaming",
      title: "Fast, reliable streaming",
      description: "Enjoy buffer-free movies, live sports and HD content whenever you want."
    },
    {
      icon: Users,
      signal: "ALL",
      signalLabel: "Your devices",
      title: "Keep the family connected",
      description: "Connect phones, tablets, TVs and laptops together without the usual slowdowns."
    },
    {
      icon: Wallet,
      signal: "R0",
      signalLabel: "Surprise usage fees",
      title: "Simple monthly billing",
      description: "Transparent monthly pricing, no surprise usage fees and no complicated long-term contract."
    },
    {
      icon: Zap,
      signal: "5G",
      signalLabel: "Plug and play",
      title: "Plug-and-play setup",
      description: "No digging or fibre installation. Plug the router in and get connected in minutes."
    }
  ];

  return (
    <section id="benefits" className="benefits-section scroll-mt-20">
      <div className="site-container">
        <div className="section-heading mx-auto text-center">
          <h2 data-testid="benefits-title">Everything you need. Nothing you don&apos;t.</h2>
          <p data-testid="benefits-subtitle">
            Experience the freedom of unlimited 5G internet designed for South African families
          </p>
        </div>

        <div className="community-infographic">
          <figure
            className="community-photo"
            aria-roledescription="carousel"
            aria-label="Families enjoying internet access"
            onMouseEnter={() => setIsGalleryPaused(true)}
            onMouseLeave={() => setIsGalleryPaused(false)}
            onFocus={() => setIsGalleryPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsGalleryPaused(false);
            }}
          >
            {communityPhotos.map((photo, index) => (
              <img
                key={photo.src}
                className={`community-slide${index === activePhoto ? " is-active" : ""}`}
                src={photo.src}
                alt={index === activePhoto ? photo.alt : ""}
                aria-hidden={index !== activePhoto}
                loading="lazy"
                decoding="async"
                width="1280"
                height="854"
              />
            ))}
            <div className="community-connection-overlay" aria-label="Connected through Umoja 5G HomeSpot">
              <span className="community-live-signal" aria-hidden="true">
                <Wifi />
              </span>
              <div>
                <span>Connected through</span>
                <strong>
                  <img src="/assets/logo.avif" alt="Umoja" width="240" height="64" loading="lazy" decoding="async" />
                  <span>5G HomeSpot</span>
                </strong>
              </div>
            </div>
          </figure>
          <div className="community-copy">
            <div className="eyebrow">Community in action</div>
            <h3>Connection grows from home to home.</h3>
            <p>
              Umoja links homes, local hubs and CommunitySpots to help internet
              access reach further through the neighbourhood.
            </p>
            <div className="community-points" aria-label="Community benefits">
              <span>Local support</span>
              <span>Setup guidance</span>
              <span>Community-first service</span>
            </div>
          </div>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="feature-card"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-7">
                <div className="benefit-topline">
                  <div className="benefit-icon">
                    <benefit.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="benefit-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="benefit-signal" aria-hidden="true">
                  <strong>{benefit.signal}</strong>
                  <span>{benefit.signalLabel}</span>
                </div>
                <h3 data-testid={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
