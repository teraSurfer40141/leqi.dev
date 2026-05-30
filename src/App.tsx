/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React from 'react';

const SCROLL_ANIMATION = {
  initial: { opacity: 0, y: -8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.65 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#4a4540]"
    />
  );
}

export default function App() {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const sections = ['about', 'experience', 'research', 'side-quests', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="min-h-screen w-full overflow-x-hidden font-sans m-0 p-0 bg-transparent pt-[70px]"
    >
      {/* Dynamic Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0d0a]/0 backdrop-blur-[3px] pointer-events-none">
        <div className="w-full max-w-[720px] mx-auto px-8 py-5 flex flex-col sm:flex-row justify-between items-baseline gap-2 pointer-events-auto">
          <span 
            className="font-serif text-[15px] tracking-wide text-[#e8e4db] cursor-pointer hover:text-[#c4a747] transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Yau Le Qi
          </span>
          <div className="flex flex-wrap gap-x-2.5 gap-y-1 font-mono text-[12px] uppercase tracking-wider text-[#8e8a83] items-center">
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')} 
              className={`${activeSection === 'about' ? 'text-[#c4a747]' : 'text-[#8e8a83] hover:text-[#f2ede8]'} transition-colors duration-300 ease-in-out font-[300]`}
            >
              About
            </a>
            <span className="text-[#3a3530] select-none">·</span>
            <a 
              href="#experience" 
              onClick={(e) => handleScrollTo(e, 'experience')} 
              className={`${activeSection === 'experience' ? 'text-[#c4a747]' : 'text-[#8e8a83] hover:text-[#f2ede8]'} transition-colors duration-300 ease-in-out font-[300]`}
            >
              Experience
            </a>
            <span className="text-[#3a3530] select-none">·</span>
            <a 
              href="#research" 
              onClick={(e) => handleScrollTo(e, 'research')} 
              className={`${activeSection === 'research' ? 'text-[#c4a747]' : 'text-[#8e8a83] hover:text-[#f2ede8]'} transition-colors duration-300 ease-in-out font-[300]`}
            >
              Research
            </a>
            <span className="text-[#3a3530] select-none">·</span>
            <a 
              href="#side-quests" 
              onClick={(e) => handleScrollTo(e, 'side-quests')} 
              className={`${activeSection === 'side-quests' ? 'text-[#c4a747]' : 'text-[#8e8a83] hover:text-[#f2ede8]'} transition-colors duration-300 ease-in-out font-[300]`}
            >
              Side Quests
            </a>
            <span className="text-[#3a3530] select-none">·</span>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')} 
              className={`${activeSection === 'contact' ? 'text-[#c4a747]' : 'text-[#8e8a83] hover:text-[#f2ede8]'} transition-colors duration-300 ease-in-out font-[300]`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-[720px] px-8" style={{ margin: '0 auto', paddingTop: 0 }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <SideQuestsSection />
        <InterestsSection />
        <ContactSection />
      </main>

      <Footer />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section 
      className="h-[100vh] min-h-[600px] flex flex-col justify-center pb-[4rem] relative border-none overflow-hidden bg-transparent"
    >
      <div className="relative z-10 bg-transparent">
        <motion.h1 
          initial={{ filter: 'blur(8px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="font-serif text-[48px] sm:text-[64px] md:text-[96px] font-[300] leading-[1.1] tracking-[0.05em] bg-transparent"
        >
          <span className="text-[#e8e4db]">Yau</span> <span className="text-[#c4a747]">Le Qi</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          className="font-serif-zh font-[300] text-[13px] text-[#c4a747] tracking-[0.2em] mt-[0.4rem] leading-[1.8]"
        >
          饶乐祺 · 自强不息
        </motion.div>
      </div>
      <Divider />
    </section>
  );
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-baseline mb-8">
      <h2 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#6a6058] font-[300] leading-[1.8]">
        {children}
      </h2>
      <span className="font-mono text-[12px] text-[#c4a747] font-[300] leading-[1.8]">
        § {number}
      </span>
    </div>
  );
}

function AboutSection() {
  return (
    <motion.section 
      id="about"
      {...SCROLL_ANIMATION}
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="01">About</SectionTitle>
      <p className="font-sans text-[15px] font-[300] text-[#c8c2ba] leading-[1.8] !max-w-[48ch]" style={{ maxWidth: '48ch' }}>
        I just finished National Service as a section commander and I'm heading to Hughes Hall, 
        Cambridge in October to read Computer Science. 
        Before NS I did some research in AI safety and malware detection, ran a student 
        computing event, and interned at a couple of places. Still at it.
      </p>
      <Divider />
    </motion.section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      year: '2026',
      role: 'AI Engineer Intern',
      company: 'Quest Ventures',
      url: 'https://questventures.com',
      description: 'Building AI tools at a Southeast Asian VC.',
    },
    {
      year: '2024–2026',
      role: 'Section Commander',
      company: 'Singapore Army',
      description: 'Took 2 batches in Dragon Company, BMTC School 1.',
    },
    {
      year: '2024',
      role: 'Educational Technology Intern',
      company: 'Tinkertanker',
      url: 'https://tinkertanker.com',
      description: 'Education technology, building tools for students.',
    },
    {
      year: '2022',
      role: 'Cybersecurity Intern',
      company: 'DSTA',
      url: 'https://www.dsta.gov.sg',
      description: 'Defence technology internship during junior college.',
    },
  ];

  return (
    <motion.section id="experience" {...SCROLL_ANIMATION} className="py-[4rem] relative border-none">
      <SectionTitle number="02">Experience</SectionTitle>
      <div className="relative">
        {experiences.map((exp, idx) => (
          <div 
            key={exp.company}
            className="flex flex-col md:flex-row md:items-start mb-[2.5rem] last:mb-0 relative z-10"
          >
            <div className="md:w-[140px] shrink-0 mb-3 md:mb-0 pr-4">
              <div className="font-mono text-[12px] text-[#6a6058] md:mb-1 leading-[1.8]">
                {exp.year}
              </div>
              <div className="font-mono text-[12px] text-[#c8c2ba] leading-[1.8]">
                {exp.role}
              </div>
            </div>
            <div className="hidden md:block" style={{ width: '1px', background: 'rgba(184,149,106,0.2)', alignSelf: 'stretch', margin: '0 1.5rem' }}></div>
            <div className="flex-1 mt-1 md:mt-0">
              <h3 className="font-serif text-[24px] font-[300] text-[#e8e4db] mb-3 leading-none mt-[-2px]">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="font-[300]">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="font-sans text-[13px] text-[#c8c2ba] font-[300] leading-[1.8]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Divider />
    </motion.section>
  );
}

function ResearchSection() {
  const papers = [
    {
      venue: 'EMNLP Demo 2024',
      title: 'WalledEval: A Comprehensive Safety Evaluation Toolkit for Large Language Models',
      description: 'Safety evaluation toolkit for LLMs.',
      links: [
        { text: 'Publication', url: 'https://aclanthology.org/2024.emnlp-demo.42/' },
        { text: 'PDF', url: 'https://arxiv.org/pdf/2408.03837' },
        { text: 'Repo', url: 'https://github.com/walledai/walledeval' }
      ]
    },
    {
      venue: 'IEEE DASC 2023',
      title: 'A Novel Feature Vector for AI-assisted Windows Malware Detection',
      description: 'Behavioural approach to detecting malware at runtime.',
      links: [
        { text: 'Publication', url: 'https://ieeexplore.ieee.org/document/10361451' },
        { text: 'PDF', url: 'https://www.researchgate.net/profile/Tram-Truong-Huu/publication/374030409_A_Novel_Feature_Vector_for_AI-assisted_Windows_Malware_Detection/links/650aafc7d5293c106cc8ce59/A-Novel-Feature-Vector-for-AI-Assisted-Windows-Malware-Detection.pdf#page=1.00&gsr=0' }
      ]
    },
  ];

  return (
    <motion.section id="research" {...SCROLL_ANIMATION} className="py-[4rem] relative border-none">
      <SectionTitle number="03">Research</SectionTitle>
      <div className="">
        {papers.map((paper, idx) => (
          <div 
            key={paper.title}
            className="mb-[2.5rem] last:mb-0"
          >
            <span className="font-mono text-[12px] text-[#6a6058] block mb-2 leading-[1.8]">
              {paper.venue}
            </span>
            <h3 className="font-serif text-[32px] font-[300] mb-3 leading-[1.2] text-[#e8e4db]">
              {paper.title}
            </h3>
            <p className="font-sans text-[14px] text-[#c8c2ba] font-[300] mb-4 leading-[1.8]">
              {paper.description}
            </p>
            {paper.links && (
              <div className="flex flex-wrap gap-2 text-[#6a6058] font-mono text-[12px] leading-[1.8]">
                {paper.links.map((link, i) => (
                  <React.Fragment key={link.text}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#8e8a83] hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300]">
                      {link.text} ↗️
                    </a>
                    {i < paper.links.length - 1 && <span className="select-none text-[#3a3530]">·</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Divider />
    </motion.section>
  );
}

function SideQuestsSection() {
  const quests = [
    { year: '2023', text: 'Organised BuildingBloCS, a student-run computing event' },
    { year: '2023', text: 'Started Hack Club @ TJC' },
    { year: '2023', text: 'Represented Singapore at the Global Cybersecurity Camp' },
    { year: '2022–2023', text: 'Vice crew leader, TJC JC Infocomm Club' },
  ];

  return (
    <motion.section 
      id="side-quests" 
      {...SCROLL_ANIMATION}
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="04">Side Quests</SectionTitle>
      <ul className="">
        {quests.map((quest) => (
          <li key={quest.text} className="flex gap-4 items-baseline mb-[2.5rem] last:mb-0">
            <span className="text-[#6a6058] shrink-0 leading-[1.8]">—</span>
            <span className="font-mono text-[12px] text-[#6a6058] w-[4.5rem] whitespace-nowrap shrink-0 leading-[1.8]">
              {quest.year}
            </span>
            <span className="font-sans text-[14px] font-[300] text-[#c8c2ba] leading-[1.8]">
              {quest.text}
            </span>
          </li>
        ))}
      </ul>
      <Divider />
    </motion.section>
  );
}

function InterestsSection() {
  const interests = [
    'LLM', 'Agentic AI', 'Cybersecurity', 'Startups', 'Photography', 'Hiking', 'Running', 'Gym'
  ];

  return (
    <motion.section 
      id="interests"
      {...SCROLL_ANIMATION}
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="05">Interests</SectionTitle>
      <div className="font-mono text-[13px] text-[#c8c2ba] font-[300] leading-[1.8]">
        {interests.map((interest, idx) => (
          <React.Fragment key={interest}>
            {interest}
            {idx < interests.length - 1 && <span className="text-[#6a6058] select-none"> · </span>}
          </React.Fragment>
        ))}
      </div>
      <Divider />
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      {...SCROLL_ANIMATION}
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="06">Contact</SectionTitle>
      <div className="font-mono text-[13px] text-[#c8c2ba] leading-[1.8] flex gap-4 flex-wrap">
        <a 
          href="https://github.com/teraSurfer40141" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#8e8a83] hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300]"
        >
          GitHub ↗️
        </a>
        <span className="text-[#6a6058] select-none">·</span>
        <a 
          href="https://www.linkedin.com/in/lqyau/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#8e8a83] hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300]"
        >
          LinkedIn ↗️
        </a>
        <span className="text-[#6a6058] select-none">·</span>
        <a 
          href="mailto:hello@leqi.dev" 
          className="text-[#8e8a83] hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300]"
        >
          Email ↗️
        </a>
      </div>
      <Divider />
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[720px] px-8 pt-[4rem] pb-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
        <span className="font-mono text-[12px] text-[#6a6058] leading-[1.8]">
          © 2026 Yau Le Qi
        </span>
        
        <div className="flex flex-wrap gap-4 font-mono text-[12px] text-[#6a6058] leading-[1.8]">
          <FooterLink href="https://github.com/teraSurfer40141">GitHub ↗️</FooterLink>
          <span className="text-[#6a6058] select-none">·</span>
          <FooterLink href="https://www.linkedin.com/in/lqyau/">LinkedIn ↗️</FooterLink>
          <span className="text-[#6a6058] select-none">·</span>
          <FooterLink href="mailto:hello@leqi.dev">Email ↗️</FooterLink>
        </div>
      </div>
      <div className="text-center font-serif-zh font-[300] text-[13px] text-[#c4a747] tracking-[0.2em] mt-6 leading-[1.8]">
        饶乐祺 · 自强不息
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#6a6058] hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300] leading-[1.8]">
      {children}
    </a>
  );
}
