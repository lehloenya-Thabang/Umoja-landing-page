import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";

export default function OnlineNavbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/online", label: "Home" },
  ];

  const isActive = (href: string) => location === href || location.startsWith(href + "/");

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo — always goes back to /online */}
          <Link href="/online">
            <img src="/assets/logo.avif" alt="Umoja Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? "text-foreground active" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="https://portal.umoja.network/portal/login" target="_blank" rel="noopener noreferrer">
              <Button className="gradient-primary text-primary-foreground hover:shadow-lg transition-shadow duration-200">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.href) ? "text-primary bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a href="https://portal.umoja.network/portal/login" target="_blank" rel="noopener noreferrer">
                    <Button className="gradient-primary text-primary-foreground mt-4">
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
