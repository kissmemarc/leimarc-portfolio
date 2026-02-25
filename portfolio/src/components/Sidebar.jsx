import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGoogle, FaTwitter, FaDownload } from 'react-icons/fa';

const Sidebar = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Web Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'Information Technology',
    'Future Millionaire'
  ];

  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <div className="w-full lg:w-80 sticky top-8 mx-auto">
      {/* Company ID Card */}
      <aside
        className="w-full overflow-hidden relative"
        style={{
          maxWidth: '320px',
          margin: '0 auto',
          background: '#fffdf5',
          border: '2px solid #2d1b00',
          borderRadius: '12px 14px 13px 15px / 14px 12px 15px 13px',
          boxShadow: '6px 6px 0px #2d1b00'
        }}
      >
        {/* ── TOP BLOB WAVE ── */}
        <div className="relative" style={{ height: '160px' }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A0522D" />
                <stop offset="50%" stopColor="#8B3A10" />
                <stop offset="100%" stopColor="#6B2000" />
              </linearGradient>
              <linearGradient id="topGradShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.12)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            {/* Main filled blob */}
            <path
              d="M0,0 L320,0 L320,110 C300,130 270,105 240,125 C210,145 185,115 160,130 C135,145 110,120 80,135 C50,150 25,125 0,140 Z"
              fill="url(#topGrad)"
            />
            {/* Shimmer overlay */}
            <path
              d="M0,0 L320,0 L320,110 C300,130 270,105 240,125 C210,145 185,115 160,130 C135,145 110,120 80,135 C50,150 25,125 0,140 Z"
              fill="url(#topGradShine)"
              className="animate-wave-shimmer"
            />
            {/* Lighter overlay wave for depth — medium brown */}
            <path
              d="M0,0 L320,0 L320,85 C295,105 265,82 235,100 C205,118 178,90 155,108 C132,126 105,98 75,115 C45,132 22,108 0,120 Z"
              fill="rgba(180,90,40,0.45)"
            />
            {/* Extra depth wave — lightest brown */}
            <path
              d="M0,0 L320,0 L320,60 C290,78 258,55 228,72 C198,89 170,64 145,80 C120,96 90,70 60,86 C30,102 12,80 0,90 Z"
              fill="rgba(200,120,60,0.30)"
            />
          </svg>

          {/* Company badge top-left */}
          <div className="absolute top-4 left-5 flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-white/30 flex items-center justify-center" style={{ border: '1.5px solid rgba(255,255,255,0.5)' }}>
              <div className="w-2.5 h-2.5 rounded-sm bg-white/80"></div>
            </div>
            <span className="text-[10px] font-bold text-white/90 tracking-widest uppercase drop-shadow-sm">Leimarc ID</span>
          </div>

          {/* ID number top-right */}
          <div className="absolute top-4 right-5">
            <span className="text-[9px] font-mono text-white/60 tracking-wider">#2025-001</span>
          </div>

          {/* Decorative sparkle dots */}
          <div className="absolute top-8 right-14 w-1.5 h-1.5 rounded-full bg-white/40"></div>
          <div className="absolute top-12 right-20 w-1 h-1 rounded-full bg-white/30"></div>
          <div className="absolute top-6 left-24 w-1 h-1 rounded-full bg-white/25"></div>
        </div>

        {/* Profile Photo — overlapping the blob */}
        <div
          className="relative flex justify-center animate-smooth-fade-in"
          style={{ marginTop: '-72px', animationDelay: '200ms' }}
        >
          {/* Orange glow ring */}
          <div
            className="rounded-full p-1"
            style={{
              background: 'linear-gradient(135deg, #FB923C, #EA580C)',
              boxShadow: '0 0 0 3px #fffdf5, 3px 3px 0px #2d1b00'
            }}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden" style={{ border: '2px solid #fffdf5' }}>
              <img
                src="/profile2-light.png"
                alt="Profile Photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/128/1c2128/ffffff?text=Photo";
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-5 pt-3">
          {/* Name & Role */}
          <div className="text-center mb-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-base font-extrabold text-stone-800 tracking-wider uppercase mb-1">
              LEI MARC L. KADUSALE
            </h2>
            {/* Gradient accent line */}
            <div className="flex justify-center mb-2">
              <div
                className="h-0.5 w-16"
                style={{ background: '#d97706', borderRadius: '2px' }}
              ></div>
            </div>
            {/* Typing title */}
            <div className="h-6 flex items-center justify-center">
              <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
                {displayedText}
                <span className="animate-pulse ml-0.5 text-amber-600">|</span>
              </span>
            </div>

            {/* Download CV button */}
            <div className="flex justify-center mt-2">
              <a
                href="/LEIMARC CV 2026.pdf"
                download="LEIMARC CV 2026.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 text-amber-800 hover:text-white hover:bg-amber-700 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: '#fef3dc',
                  border: '2px solid #2d1b00',
                  borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
                  boxShadow: '2px 2px 0px #2d1b00'
                }}
              >
                <FaDownload className="text-[10px]" />
                <span className="text-[9px] font-bold tracking-widest uppercase">Download CV</span>
              </a>
            </div>
          </div>

          {/* Gradient thin rule */}
          <div
            className="mb-4"
            style={{ height: '2px', background: 'repeating-linear-gradient(90deg, #2d1b00 0px, #2d1b00 6px, transparent 6px, transparent 10px)' }}
          ></div>

          {/* Contact rows */}
          <div className="space-y-2.5 mb-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#fef3dc',
                  border: '2px solid #2d1b00',
                  borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
                  boxShadow: '2px 2px 0px #2d1b00'
                }}
              >
                <FaEnvelope className="text-[10px] text-amber-800" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-stone-400 uppercase tracking-widest mb-0.5">Email</p>
                <a
                  href="mailto:leimarckadusale781@gmail.com"
                  className="text-[11px] text-stone-700 hover:text-amber-700 transition-colors break-all leading-tight"
                >
                  leimarckadusale781@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#fef3dc',
                  border: '2px solid #2d1b00',
                  borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
                  boxShadow: '2px 2px 0px #2d1b00'
                }}
              >
                <FaPhone className="text-[10px] text-amber-800" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-stone-400 uppercase tracking-widest mb-0.5">Phone</p>
                <a
                  href="tel:09298495615"
                  className="text-[11px] text-stone-700 hover:text-amber-700 transition-colors"
                >
                  09298495615
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#fef3dc',
                  border: '2px solid #2d1b00',
                  borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
                  boxShadow: '2px 2px 0px #2d1b00'
                }}
              >
                <FaMapMarkerAlt className="text-[10px] text-amber-800" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-stone-400 uppercase tracking-widest mb-0.5">Location</p>
                <p className="text-[11px] text-stone-700">Cavite, Philippines</p>
              </div>
            </div>
          </div>

          {/* Dashed divider */}
          <div
            className="mb-4"
            style={{ height: '2px', background: 'repeating-linear-gradient(90deg, #2d1b00 0px, #2d1b00 6px, transparent 6px, transparent 10px)' }}
          ></div>

          {/* Social Links */}
          <div className="flex gap-2.5 justify-center">
            {[
              { href: 'https://linkedin.com', icon: <FaLinkedin /> },
              { href: 'https://github.com',   icon: <FaGithub /> },
              { href: 'https://facebook.com', icon: <FaGoogle /> },
              { href: 'https://twitter.com',  icon: <FaTwitter /> },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-stone-700 hover:text-amber-800 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: '#fef9f0',
                  border: '2px solid #2d1b00',
                  borderRadius: '6px 8px 7px 5px / 8px 6px 5px 7px',
                  boxShadow: '2px 2px 0px #2d1b00'
                }}
              >
                <span className="text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BLOB WAVE ── */}
        <div className="relative" style={{ height: '80px' }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6B2000" />
                <stop offset="50%" stopColor="#8B3A10" />
                <stop offset="100%" stopColor="#A0522D" />
              </linearGradient>
            </defs>
            {/* Main bottom blob */}
            <path
              d="M0,38 C25,18 55,44 85,26 C115,8 145,36 175,20 C205,4 235,34 265,16 C295,-2 315,22 320,20 L320,80 L0,80 Z"
              fill="url(#botGrad)"
            />
            {/* Mid depth wave — medium brown */}
            <path
              d="M0,52 C30,36 60,56 95,42 C130,28 155,50 190,38 C225,26 255,48 290,34 C305,28 315,40 320,36 L320,80 L0,80 Z"
              fill="rgba(180,90,40,0.45)"
            />
            {/* Lighter overlay for depth — lightest brown */}
            <path
              d="M0,62 C30,48 60,64 95,54 C130,44 155,60 190,50 C225,40 255,56 290,46 C305,42 315,50 320,48 L320,80 L0,80 Z"
              fill="rgba(200,120,60,0.30)"
            />
          </svg>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
