import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJava } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMysql, SiSupabase, SiFigma } from 'react-icons/si';

const TechStackCarousel = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const techStack = [
    // Front-end
    { name: 'HTML5',      icon: SiHtml5,      color: '#E34F26' },
    { name: 'CSS3',       icon: SiCss3,       color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Bootstrap',  icon: SiBootstrap,  color: '#7952B3' },
    { name: 'React',      icon: FaReact,      color: '#61DAFB' },
    // Back-end
    { name: 'PHP',        icon: FaPhp,        color: '#777BB4' },
    { name: 'Python',     icon: FaPython,     color: '#3776AB' },
    { name: 'Java',       icon: FaJava,       color: '#007396' },
    { name: 'Node.js',    icon: FaNodeJs,     color: '#339933' },
    // Database
    { name: 'MySQL',      icon: SiMysql,      color: '#4479A1' },
    { name: 'Supabase',   icon: SiSupabase,   color: '#3ECF8E' },
    // UI/UX
    { name: 'Figma',      icon: SiFigma,      color: '#F24E1E' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [techStack.length]);

  const getVisibleTechs = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(techStack[(currentIndex + i) % techStack.length]);
    }
    return visible;
  };

  return (
    <div className={`relative p-4 md:p-5 overflow-hidden transition-all duration-300 ${
      isDark ? 'neu-card-dark' : 'neu-card'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-bold text-stone-800">
          Tech Stack
        </h3>
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="hidden sm:inline">Auto-rotating</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
        {getVisibleTechs().map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${currentIndex}-${index}`}
              className={`group relative flex flex-col items-center justify-center p-3 md:p-4 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Colored top accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                style={{ background: tech.color, opacity: 0.85 }}
              />
              <div className="relative">
                <Icon
                  className="text-3xl md:text-4xl mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>
              <span className="relative text-xs md:text-sm font-bold text-stone-700 whitespace-nowrap group-hover:text-amber-700 transition-colors duration-200">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 items-center">
        {techStack.map((tech, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="rounded-full transition-all duration-300 hover:scale-125"
            style={{
              width: index === currentIndex ? '28px' : '7px',
              height: '7px',
              background: index === currentIndex ? '#0284c7' : '#d6d3d1',
              boxShadow: index === currentIndex ? '1px 1px 0px #075985' : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;
