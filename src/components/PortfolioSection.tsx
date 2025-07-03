
import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink, Filter } from 'lucide-react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'client', label: 'Client Work' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Epic Travel Reel',
      category: 'reels',
      description: 'Cinematic travel story that went viral',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      videoId: 'sample1',
      client: 'Personal Project'
    },
    {
      id: 2,
      title: 'Brand Commercial',
      category: 'client',
      description: 'High-impact commercial for tech startup',
      thumbnail: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop',
      videoId: 'sample2',
      client: 'TechCorp'
    },
    {
      id: 3,
      title: 'YouTube Documentary',
      category: 'youtube',
      description: 'Long-form storytelling at its finest',
      thumbnail: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=400&fit=crop',
      videoId: 'sample3',
      client: 'Documentary Series'
    },
    {
      id: 4,
      title: 'Product Launch Reel',
      category: 'reels',
      description: 'Dynamic product showcase',
      thumbnail: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop',
      videoId: 'sample4',
      client: 'StartupXY'
    },
    {
      id: 5,
      title: 'Music Video Edit',
      category: 'youtube',
      description: 'Rhythm-based editing masterpiece',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      videoId: 'sample5',
      client: 'Independent Artist'
    },
    {
      id: 6,
      title: 'Corporate Event',
      category: 'client',
      description: 'Professional event coverage',
      thumbnail: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop',
      videoId: 'sample6',
      client: 'Enterprise Co.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gotham-black">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-gotham-white mb-4">
            My Work Speaks in <span className="text-gotham-red">Cuts & Frames</span>
          </h2>
          <p className="text-xl text-gotham-white/80 max-w-3xl mx-auto">
            Every project is a new challenge, every edit tells a story. Here's the proof.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gotham-red text-white'
                  : 'bg-gotham-darkgray text-gotham-white hover:bg-gotham-gray hover:text-gotham-red'
              }`}
            >
              <Filter size={16} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gotham-darkgray rounded-xl overflow-hidden card-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gotham-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-gotham-red hover:bg-gotham-redglow text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
                    <Play size={24} />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gotham-red/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cinematic text-xl font-bold text-gotham-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gotham-white/80 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gotham-red text-sm font-medium">
                    {project.client}
                  </span>
                  <button className="text-gotham-white hover:text-gotham-red transition-colors duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gotham-white/80 mb-6">
            Want to see more? Check out my complete portfolio on YouTube.
          </p>
          <button className="btn-primary">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
