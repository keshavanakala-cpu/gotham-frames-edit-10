
import { useState, useEffect, useRef } from 'react';
import { Film, Scissors, Camera, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: Scissors,
      title: 'Reels & Shorts Editing',
      description: 'Fast-paced, attention-grabbing content that stops the scroll. Perfect for social media domination.',
      features: [
        'Dynamic transitions',
        'Trending audio sync',
        'Color grading',
        'Motion graphics',
        'Thumbnail design'
      ],
      price: 'Starting at ₹500',
      turnaround: '24-48 hours'
    },
    {
      icon: Film,
      title: 'YouTube Long-form Editing',
      description: 'Comprehensive editing for YouTube videos that keep viewers engaged from start to finish.',
      features: [
        'Story structure',
        'Pacing optimization',
        'Audio enhancement',
        'Graphics & titles',
        'End screen setup'
      ],
      price: 'Starting at ₹1,500',
      turnaround: '3-5 days'
    },
    {
      icon: Camera,
      title: 'Cinematic Travel Promos',
      description: 'Transform your travel footage into epic cinematic experiences that inspire wanderlust.',
      features: [
        'Cinematic color grading',
        'Drone footage editing',
        'Music synchronization',
        'Slow-motion effects',
        'Story-driven narrative'
      ],
      price: 'Starting at ₹2,500',
      turnaround: '5-7 days'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gotham-darkgray/30">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-gotham-white mb-4">
            What I Can Do <span className="text-gotham-red">For You</span>
          </h2>
          <p className="text-xl text-gotham-white/80 max-w-3xl mx-auto">
            Every service is crafted with precision, passion, and a touch of that signature sarcasm.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-gotham-black/80 rounded-xl p-8 border border-gotham-gray/20 card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="bg-gotham-red/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-gotham-red/20 transition-colors duration-300">
                <service.icon className="text-gotham-red" size={32} />
              </div>

              {/* Title & Description */}
              <h3 className="font-cinematic text-2xl font-bold text-gotham-white mb-4">
                {service.title}
              </h3>
              <p className="text-gotham-white/80 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-gotham-red font-semibold mb-3 text-sm uppercase tracking-wider">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gotham-white/90 text-sm">
                      <ArrowRight className="text-gotham-red mr-2 flex-shrink-0" size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Turnaround */}
              <div className="border-t border-gotham-gray/20 pt-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gotham-white/70 text-sm">Pricing:</span>
                  <span className="text-gotham-red font-bold">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gotham-white/70 text-sm">Turnaround:</span>
                  <span className="text-gotham-white font-medium text-sm">{service.turnaround}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full btn-primary group-hover:shadow-lg">
                Let's Work Together
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center bg-gotham-black/60 rounded-xl p-8 border border-gotham-gray/20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-cinematic text-2xl font-bold text-gotham-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-gotham-white/80 mb-6 max-w-2xl mx-auto">
            Every project is unique, just like every client. Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Custom Quote
            </button>
            <button className="btn-secondary">
              View Pricing Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
