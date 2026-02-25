import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav
      className="px-8 py-4 mb-6 transition-all duration-300"
      style={{
        background: '#fffdf5',
        border: '2px solid #2d1b00',
        borderRadius: '10px 12px 11px 13px / 12px 10px 13px 11px',
        boxShadow: '4px 4px 0px #2d1b00'
      }}
    >
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`text-sm font-bold tracking-wide transition-all duration-200 relative animate-fade-in-up group px-3 py-1.5 ${
                activeSection === item
                  ? 'text-amber-700'
                  : 'text-stone-500 hover:text-amber-700'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                ...(activeSection === item ? {
                  background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                  border: '1.5px solid #d97706',
                  borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
                  boxShadow: '2px 2px 0px #92400e'
                } : {})
              }}
            >
              {item}
              {/* Hand-drawn underline for non-active hover */}
              {activeSection !== item && (
                <span
                  className="absolute -bottom-0.5 left-2 right-2 h-0.5 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-200"
                  style={{ background: '#d97706', borderRadius: '2px' }}
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-xl transition-all duration-200 w-10 h-10 flex items-center justify-center text-stone-700 hover:text-amber-700"
          style={{
            background: '#fef9f0',
            border: '2px solid #2d1b00',
            borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
            boxShadow: '2px 2px 0px #2d1b00'
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden mt-4 animate-fade-in-up overflow-hidden"
          style={{
            background: '#fef9f0',
            border: '2px solid #2d1b00',
            borderRadius: '6px 8px 7px 9px / 8px 6px 9px 7px',
            boxShadow: '3px 3px 0px #2d1b00'
          }}
        >
          <div className="flex flex-col p-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-bold tracking-wide transition-all duration-200 px-4 py-3 rounded-lg animate-slide-in-left ${
                  activeSection === item
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-stone-600 hover:text-amber-700 hover:bg-amber-50/60'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
