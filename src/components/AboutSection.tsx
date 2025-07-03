
import { useEffect, useRef, useState } from 'react';
import { Code, Film, Zap, Coffee, Moon, Smile } from 'lucide-react';
import BatmanLogo from './BatmanLogo';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started as a mechanical engineering student with a secret passion for storytelling.',
      icon: Code
    },
    {
      year: '2021',
      title: 'First Cut',
      description: 'Created my first video edit. It was terrible, but the addiction began.',
      icon: Film
    },
    {
      year: '2022',
      title: 'YouTube Journey',
      description: 'Launched my YouTube channel and discovered the art of digital storytelling.',
      icon: Zap
    },
    {
      year: '2023',
      title: 'Freelance Life',
      description: 'Started taking clients and turned passion into profession.',
      icon: Coffee
    }
  ];

  const traits = [
    { icon: Smile, title: 'Sarcastic', description: 'Dry humor with every edit' },
    { icon: Zap, title: 'Focused', description: 'Laser-sharp attention to detail' },
    { icon: Moon, title: 'Night Owl', description: 'Best work happens after midnight' },
    { icon: Film, title: 'Visual Storyteller', description: 'Every frame tells a story' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gotham-darkgray/50 relative overflow-hidden">
      {/* Batman Background Elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <BatmanLogo size="lg" className="w-24 h-24 text-gotham-red" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <BatmanLogo size="lg" className="w-32 h-32 text-gotham-red" />
      </div>
      
      {/* Gotham City Skyline */}
      <div className="absolute top-0 left-0 right-0 h-20 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1200&h=200&fit=crop" 
          alt="Gotham skyline" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-gotham-white mb-4">
            Who's Behind the <span className="text-gotham-red">Mask?</span>
          </h2>
          <p className="text-xl text-gotham-white/80 max-w-3xl mx-auto">
            From mechanical gears to video reels — here's how a student became a storyteller.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gotham-black/80 p-8 rounded-xl border border-gotham-gray/20 relative">
              {/* Small Batman logo in corner */}
              <div className="absolute top-4 right-4 opacity-20">
                <BatmanLogo size="sm" className="text-gotham-red" />
              </div>
              
              <h3 className="font-cinematic text-2xl font-bold text-gotham-white mb-6">The Origin Story</h3>
              <div className="space-y-4 text-gotham-white/90">
                <p>
                  By day, I'm a mechanical engineering student grinding through equations and blueprints. 
                  By night, I transform into something more dangerous — a video editor with a vision.
                </p>
                <p>
                  What started as a hobby quickly became an obsession. Every video I create is a puzzle 
                  to solve, a story to tell, and a chance to turn ordinary moments into extraordinary narratives.
                </p>
                <p className="text-gotham-red font-semibold">
                  "The best edits happen when everyone else is asleep, and creativity strikes like lightning."
                </p>
              </div>
            </div>

            {/* Personality Traits */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {traits.map((trait, index) => (
                <div 
                  key={trait.title}
                  className={`bg-gotham-black/60 p-4 rounded-lg border border-gotham-gray/10 card-hover transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <trait.icon className="text-gotham-red mb-2" size={24} />
                  <h4 className="font-semibold text-gotham-white mb-1">{trait.title}</h4>
                  <p className="text-sm text-gotham-white/70">{trait.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-cinematic text-2xl font-bold text-gotham-white mb-8">The Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gotham-red/30"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={item.year} 
                  className={`relative flex items-start mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 w-4 h-4 bg-gotham-red rounded-full animate-glow"></div>
                  
                  {/* Content */}
                  <div className="ml-12 bg-gotham-black/40 p-6 rounded-lg border border-gotham-gray/10 card-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="text-gotham-red" size={20} />
                      <span className="font-cinematic text-gotham-red font-bold">{item.year}</span>
                    </div>
                    <h4 className="font-semibold text-gotham-white mb-2">{item.title}</h4>
                    <p className="text-gotham-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
