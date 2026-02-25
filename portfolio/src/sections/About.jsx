import { FaCertificate, FaTimes, FaAward } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const certificationsRef = useRef([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'About Me';

  const certifications = [
    {
      name: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      year: '2026',
      certificateImage: '/certificates/pythonessentials1.jpg',
    },
  ];

  const handleCertificateClick = (cert) => {
    if (cert.certificateImage) {
      setSelectedCertificate(cert);
    } else {
      alert('Certificate will be added soon!');
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  // Typing animation effect
  useEffect(() => {
    setDisplayedText(''); // Reset text
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Re-observe when theme changes or component mounts
    certificationsRef.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('revealed'); // Ensure cards are visible
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [isDark]); // Re-run when theme changes

  return (
    <div>
      {/* Header with typing animation */}
      <div className="animate-fade-in-up">
        <h2 className="text-3xl font-bold text-stone-800 mb-3">
          {displayedText}
          <span className="animate-pulse text-primary">|</span>
        </h2>
        <div className="w-12 h-1 rounded-full mb-8" style={{ background: '#d97706' }}></div>
      </div>

      {/* Condensed single paragraph with smaller font */}
      <div className="animate-fade-in-up stagger-1">
        <p className="text-sm text-stone-700 leading-relaxed">
          Hi! I'm an undergraduate student pursuing a degree in Information Technology, specializing in <span className="font-bold text-primary">Web Developement</span> with technology such as <span className="font-semibold text-stone-900">Javascript, Php, and React</span>.
           My focus areas include cross-platform applications, scalable backend architectures, and modern UI/UX design. 
           I am seeking an entry-level IT position where I can apply my knowledge of software development and system troubleshooting, 
           while continuously learning and growing in a collaborative, fast-paced environment.
          <span className="inline-block ml-2 font-semibold text-primary hover:text-amber-600 transition-colors cursor-pointer">
            Let's build something exceptional together →
          </span>
        </p>
      </div>

      {/* Certifications Section */}
      <div className="animate-fade-in-up stagger-2 mt-10">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-12 flex items-center justify-center ${
            isDark ? 'neu-pressed-dark' : 'neu-pressed'
          }`}>
            <FaAward className="text-primary text-2xl" />
          </div>
          <h3 className="text-3xl font-bold text-stone-800">Certifications & Achievements</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certificationsRef.current[index] = el)}
              onClick={() => handleCertificateClick(cert)}
              className={`reveal-on-scroll group relative transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 ${
                isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Certificate Preview */}
              <div className={`relative w-full h-48 overflow-hidden ${
                isDark ? 'neu-pressed-dark' : 'neu-pressed'
              }`}>
                {cert.certificateImage ? (
                  <>
                    <img
                      src={cert.certificateImage}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                        Click to view full certificate
                      </span>
                    </div>
                  </>
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    isDark ? 'neu-pressed-dark' : 'neu-pressed'
                  }`}>
                    <FaAward className="text-primary text-6xl opacity-20" />
                  </div>
                )}
              </div>

              {/* Certificate Info */}
              <div className="relative z-10 p-4">
                <h4 className="text-base font-bold text-stone-800 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-stone-500 mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3 py-1.5 text-primary font-semibold transition-all duration-300 ${
                    isDark ? 'neu-pressed-dark group-hover:bg-primary group-hover:text-white' : 'neu-pressed group-hover:bg-primary group-hover:text-white'
                  }`}>
                    {cert.year}
                  </span>
                  <span className="text-xs text-stone-400 group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                    <FaAward className="text-xs" />
                    View
                  </span>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal/Lightbox - Image Viewer */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          {/* Fixed Close Button - Improved positioning */}
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 md:top-8 md:right-8 w-14 h-14 flex items-center justify-center bg-gray-800/90 hover:bg-red-600 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110 shadow-2xl z-[10000] border-2 border-gray-600/50 hover:border-red-500 group"
            aria-label="Close certificate view"
          >
            <FaTimes className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {/* Certificate Image Container */}
            <div className="relative bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedCertificate.certificateImage}
                alt={selectedCertificate.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {/* Certificate Info Overlay */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {selectedCertificate.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {selectedCertificate.issuer} • {selectedCertificate.year}
                </p>
              </div>
            </div>
            {/* Instructions */}
            <p className="text-center text-white/70 text-sm mt-4">
              Press ESC or click outside to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
