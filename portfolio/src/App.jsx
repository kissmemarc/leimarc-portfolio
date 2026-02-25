import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TechStackCarousel from './components/TechStackCarousel';
import About from './sections/About';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';

function AppContent() {
  const [activeSection, setActiveSection] = useState('About');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
    <CustomCursor />
    <div className="min-h-screen relative bg-dot-grid" style={{ background: '#fef9f0' }}>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar */}
            <div
              className={`lg:sticky lg:top-8 lg:self-start transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <Sidebar />
            </div>

            {/* Main Content */}
            <div
              className={`flex-1 transition-all duration-1000 ease-out delay-150 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

              {/* Tech Stack Carousel */}
              <div className="animate-fade-in-up mb-6" style={{ animationDelay: '400ms' }}>
                <TechStackCarousel />
              </div>

              {/* Content Section — hand-drawn card */}
              <div
                className="animate-fade-in-up transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: '600ms',
                  background: '#fffdf5',
                  border: '2px solid #2d1b00',
                  borderRadius: '12px 10px 14px 11px / 10px 13px 11px 14px',
                  boxShadow: '6px 6px 0px #2d1b00'
                }}
              >
                {/* Decorative top accent stripe */}
                <div
                  className="w-full"
                  style={{
                    height: '4px',
                    background: 'linear-gradient(90deg, #075985 0%, #0284c7 35%, #38bdf8 65%, #d97706 100%)'
                  }}
                />
                <div className="p-6 sm:p-8 lg:p-12">
                  {renderSection()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
