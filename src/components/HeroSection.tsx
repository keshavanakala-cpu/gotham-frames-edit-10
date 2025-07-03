
import { useEffect, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import BatmanLogo from './BatmanLogo';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gotham-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gotham-black via-gotham-darkgray/80 to-gotham-black"></div>
      
      {/* Batman City Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gotham-black via-gotham-darkgray/90 to-transparent">
        <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full fill-gotham-darkgray/80">
          <path d="M0,120 L0,80 L50,60 L100,80 L150,50 L200,70 L250,40 L300,60 L350,30 L400,50 L450,20 L500,40 L550,10 L600,30 L650,20 L700,40 L750,30 L800,50 L850,40 L900,60 L950,50 L1000,70 L1050,60 L1100,80 L1150,70 L1200,90 L1200,120 Z"/>
        </svg>
      </div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gotham-red/5 rounded-full blur-3xl animate-pulse-red"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gotham-red/5 rounded-full blur-3xl animate-pulse-red" style={{ animationDelay: '1s' }}></div>

      {/* Batman Logo Background */}
      <div className="absolute top-20 right-20 opacity-5">
        <BatmanLogo size="lg" className="w-32 h-32 text-gotham-red animate-pulse-red" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Batman Logo */}
          <div className="flex justify-center mb-6">
            <BatmanLogo size="lg" className="text-gotham-red animate-glow" />
          </div>

          {/* Main Heading */}
          <h1 className="font-cinematic text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gotham-white">KESHAV</span>
            <br />
            <span className="gradient-text">ANAKALA</span>
          </h1>

          {/* Subtitle */}
          <div className="font-cinematic text-lg md:text-xl text-gotham-red mb-4 tracking-wider">
            VIDEO EDITOR • CONTENT CREATOR • STUDENT
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gotham-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-modern">
            "I turn <span className="text-gotham-red font-bold">chaos</span> into stories — through <span className="text-gotham-red font-bold">frames</span>, 
            <span className="text-gotham-red font-bold"> edits</span>, and a bit of <span className="text-gotham-red font-bold">sarcasm</span>."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary group flex items-center gap-2 red-glow">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Watch My Showreel
            </button>
            <button 
              className="btn-secondary"
              onClick={scrollToAbout}
            >
              Discover My Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-gotham-white/60 hover:text-gotham-red transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
