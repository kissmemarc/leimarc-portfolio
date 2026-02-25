import { FaGraduationCap, FaBriefcase, FaBook } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const Resume = () => {
  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);
  const timelineRefs = useRef([]);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Resume';

  const skills = [
    { name: 'Web Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Backend Development', level: 60 },
    { name: 'Mobile Development', level: 50 },
  
    
  ];

  const education = [
    {
      institution: 'Cavite State University - Imus Campus',
      degree: 'Bachelor of Science in Information Technology',
      period: '2022 — 2026',
    },
    {
      institution: 'Asian Caregiving Technology Education Center',
      degree: 'Senior High School Diploma',
      period: '2021 — 2022',
    },
  ];

  const experience = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Developer',
      period: 'Feb 2023 — Present',
      location: 'Remote',
      responsibilities: [
        'Lead cross-platform mobile development with React Native',
        'Architect scalable backend services and mentor development team',
      ],
    },
    
  ];

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
            if (entry.target === skillsRef.current) {
              setSkillsInView(true);
            } else {
              entry.target.classList.add('revealed');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Header with typing animation */}
      <div className="animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {displayedText}
          <span className="animate-pulse text-primary">|</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full mb-10"></div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-5 animate-fade-in-up stagger-1">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-xl">
            <FaGraduationCap className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
        </div>

        <div className="space-y-3">
          {education.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className="reveal-on-scroll group relative pl-7 pb-4 border-l-2 border-gray-300 dark:border-dark-border last:pb-0 hover:border-primary dark:hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {edu.institution}
              </h4>
              <p className="text-primary font-medium mb-1 text-xs">{edu.degree}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-5 animate-fade-in-up stagger-2">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-xl">
            <FaBriefcase className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h3>
        </div>

        <div className="space-y-3">
          {experience.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[education.length + index] = el)}
              className="reveal-on-scroll group relative pl-7 pb-4 border-l-2 border-gray-300 dark:border-dark-border last:pb-0 hover:border-primary dark:hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {exp.position}
              </h4>
              <p className="text-primary font-medium mb-1 text-xs">{exp.company}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {exp.period} • {exp.location}
              </p>
              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span className="flex-1">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8" ref={skillsRef}>
        <div className="flex items-center gap-3 mb-5 animate-fade-in-up stagger-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-xl">
            <FaBook className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skills</h3>
        </div>

        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-xs font-bold text-primary">
                  {skillsInView ? skill.level : 0}%
                </span>
              </div>
              <div className="relative w-full h-2 bg-gray-200 dark:bg-dark-bg rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-primary to-yellow-400 rounded-full transition-all duration-1000 ease-out ${
                    skillsInView ? 'animate-skill-fill' : ''
                  }`}
                  style={{ 
                    width: skillsInView ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Resume;
