import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#packages", label: "Packages" },
    { href: "#benefits", label: "Benefits" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <a href="#home" aria-label="Umoja home" className="inline-flex min-h-11 items-center" data-testid="nav-logo">
            <img 
              src="/assets/logo.avif" 
              alt="Umoja"
              width="240"
              height="64"
              className="h-10 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-item px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary${activeSection === item.href.slice(1) ? " active" : ""}`}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a href="https://portal.umoja.network/portal/login" target="_blank" rel="noopener noreferrer">
              <Button 
                className="gradient-primary text-primary-foreground hover:shadow-lg transition-shadow duration-200"
                data-testid="nav-signin-button"
              >
                <User className="w-4 h-4 mr-2" aria-hidden="true" />
                Sign In
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Open navigation menu"
                  data-testid="mobile-menu-button"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block min-h-11 px-3 py-3 text-base font-medium rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-accent"
                      aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a href="https://portal.umoja.network/portal/login" target="_blank" rel="noopener noreferrer">
                    <Button 
                      className="gradient-primary text-primary-foreground mt-4"
                      data-testid="mobile-signin-button"
                    >
                      <User className="w-4 h-4 mr-2" aria-hidden="true" />
                      Sign In
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
