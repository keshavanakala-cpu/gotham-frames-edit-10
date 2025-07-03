
import { Heart, Code } from 'lucide-react';
import BatmanLogo from './BatmanLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gotham-darkgray border-t border-gotham-gray/20 py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Logo/Name */}
          <div 
            className="flex items-center justify-center gap-3 mb-4 cursor-pointer group"
            onClick={scrollToTop}
          >
            <BatmanLogo size="md" className="text-gotham-red group-hover:animate-pulse" />
            <div className="font-cinematic text-3xl font-bold text-gotham-white group-hover:text-gotham-red transition-colors duration-300">
              KESHAV ANAKALA
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gotham-white/70 max-w-md mx-auto mb-6">
            Turning chaos into stories, one frame at a time.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.getElementById(link.toLowerCase());
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gotham-white/80 hover:text-gotham-red transition-colors duration-300 text-sm font-medium"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gotham-red mx-auto mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gotham-white/60 text-sm">
            <span>© {currentYear} Keshav Anakala. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="text-gotham-red" size={14} fill="currentColor" />
              <span>and</span>
              <Code className="text-gotham-red" size={14} />
              <span>by a night owl</span>
            </div>
          </div>

          {/* Sarcastic Note */}
          <p className="text-gotham-white/40 text-xs mt-4 italic">
            "If you made it this far, you definitely need good video editing." 😏
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
