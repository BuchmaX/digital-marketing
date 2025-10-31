import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl text-blue-600">
            DigitalBoost
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a href="#services" className="block text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">
              Testimonials
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
