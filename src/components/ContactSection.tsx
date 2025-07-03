
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MessageSquare, Send, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! I\'ll get back to you faster than a quick cut transition.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'keshav.anakala@gmail.com',
      description: 'For detailed project discussions'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+91 98765 43210',
      description: 'Quick questions & updates'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'KeshavEdits#1234',
      description: 'Real-time collaboration'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      platform: 'Instagram',
      handle: '@keshav.edits',
      url: '#'
    },
    {
      icon: Youtube,
      platform: 'YouTube',
      handle: 'Keshav Creates',
      url: '#'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gotham-black">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-gotham-white mb-4">
            Call the <span className="text-gotham-red">Editor</span>
          </h2>
          <p className="text-xl text-gotham-white/80 max-w-3xl mx-auto">
            Ready to turn your vision into reality? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gotham-darkgray/80 p-8 rounded-xl border border-gotham-gray/20">
              <h3 className="font-cinematic text-2xl font-bold text-gotham-white mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gotham-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gotham-black border border-gotham-gray/30 rounded-lg text-gotham-white placeholder-gotham-white/50 focus:border-gotham-red focus:outline-none focus:ring-2 focus:ring-gotham-red/20 transition-all duration-300"
                    placeholder="What should I call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gotham-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gotham-black border border-gotham-gray/30 rounded-lg text-gotham-white placeholder-gotham-white/50 focus:border-gotham-red focus:outline-none focus:ring-2 focus:ring-gotham-red/20 transition-all duration-300"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gotham-white font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gotham-black border border-gotham-gray/30 rounded-lg text-gotham-white placeholder-gotham-white/50 focus:border-gotham-red focus:outline-none focus:ring-2 focus:ring-gotham-red/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project. What's your vision? What story do you want to tell?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Contact Methods */}
            <div className="mb-8">
              <h3 className="font-cinematic text-2xl font-bold text-gotham-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={method.title}
                    className={`bg-gotham-darkgray/60 p-6 rounded-lg border border-gotham-gray/10 card-hover transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gotham-red/10 p-3 rounded-lg">
                        <method.icon className="text-gotham-red" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gotham-white mb-1">{method.title}</h4>
                        <p className="text-gotham-red font-medium mb-1">{method.value}</p>
                        <p className="text-gotham-white/70 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gotham-darkgray/60 p-6 rounded-lg border border-gotham-gray/10">
              <h4 className="font-cinematic text-xl font-bold text-gotham-white mb-4">
                Follow My Work
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className={`bg-gotham-black p-4 rounded-lg hover:bg-gotham-red hover:scale-110 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                  >
                    <social.icon className="text-gotham-white group-hover:text-white" size={24} />
                  </a>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {socialLinks.map((social) => (
                  <p key={social.platform} className="text-gotham-white/80 text-sm">
                    <span className="text-gotham-red">{social.platform}:</span> {social.handle}
                  </p>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 bg-gotham-red/10 border border-gotham-red/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-gotham-red rounded-full animate-pulse-red"></div>
                <span className="text-gotham-red font-semibold">Currently Available</span>
              </div>
              <p className="text-gotham-white/80 text-sm">
                Taking on new projects with 1-2 week lead time. Night owl hours preferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
