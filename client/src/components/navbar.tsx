import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#benefits", label: "Benefits" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" data-testid="nav-logo">
            <img 
              src="/assets/logo.avif" 
              alt="Umoja Logo" 
              className="h-10 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-item px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
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
                <User className="w-4 h-4 mr-2" />
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
                  data-testid="mobile-menu-button"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-accent"
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
                      <User className="w-4 h-4 mr-2" />
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
