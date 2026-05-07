/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React from 'react';

const SCROLL_ANIMATION = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
};

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="min-h-screen w-full overflow-x-hidden font-sans m-0 p-0 bg-transparent"
    >
      <main className="w-full max-w-[720px] px-8" style={{ margin: '0 auto', paddingTop: 0 }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <SideQuestsSection />
        <InterestsSection />
      </main>

      <Footer />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section 
      className="!pt-[25vh] pb-[20vh] relative border-none overflow-hidden bg-transparent"
    >
      <div className="relative z-10 bg-transparent flex flex-col items-start">
        <motion.h1 
          initial={{ filter: 'blur(12px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[56px] sm:text-[80px] md:text-[104px] font-[300] leading-[1] tracking-[0.02em] bg-transparent ml-[-4px]"
        >
          <span className="text-[#ebe1d5]">Yau</span> <span className="text-[#c8974a] opacity-90 drop-shadow-sm">Le Qi</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8, duration: 1.5, ease: 'easeInOut' }}
          className="font-serif-zh font-[300] text-[12px] text-[#c8974a] tracking-[0.3em] mt-8 pl-1"
        >
          饶乐祺 · 自强不息
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-baseline mb-12">
      <h2 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7a6f64] font-[300]">
        {children}
      </h2>
      <span className="font-mono text-[10px] text-[#4a433c] font-[300]">
        {number}
      </span>
    </div>
  );
}

function AboutSection() {
  return (
    <motion.section 
      id="about"
      {...SCROLL_ANIMATION}
      className="pb-32 relative border-none"
    >
      <SectionTitle number="01">About</SectionTitle>
      <p className="font-sans text-[15px] sm:text-[16px] font-[300] text-[#b8ae9f] leading-[1.8] !max-w-[46ch]">
        I just finished National Service as a section commander and I'm heading to Hughes Hall, 
        Cambridge in October to read Computer Science. 
        Before NS I did some research in AI safety and malware detection, ran a student 
        computing event, and interned at a couple of places. Still figuring things out.
      </p>
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
    <motion.section id="experience" {...SCROLL_ANIMATION} className="pb-28 relative border-none">
      <SectionTitle number="02">Experience</SectionTitle>
      <div className="relative">
        {experiences.map((exp) => (
          <div 
            key={exp.company}
            className="group flex flex-col md:flex-row md:items-baseline mb-14 last:mb-0 relative z-10"
          >
            <div className="md:w-[120px] shrink-0 mb-1 md:mb-0 md:pr-8 md:text-right">
              <div className="font-mono text-[11px] text-[#6a6058] transition-colors group-hover:text-[#8a7f72]">
                {exp.year}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-[20px] font-[300] text-[#ebe1d5] mb-1">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8974a] transition-colors outline-none focus-visible:text-[#c8974a] inline-flex items-center gap-1.5 opacity-90 hover:opacity-100">
                    {exp.company}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </a>
                ) : (
                  <span className="opacity-90">{exp.company}</span>
                )}
              </h3>
              <div className="font-sans text-[14px] font-[300] text-[#9a8a7a] mb-2 tracking-wide">
                {exp.role}
              </div>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#8a7f72] font-[300] leading-[1.7] max-w-[50ch]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
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
        { text: 'Publication', url: '#' },
        { text: 'PDF', url: '#' },
        { text: 'Repo', url: '#' }
      ]
    },
    {
      venue: 'IEEE DASC 2023',
      title: 'A Novel Feature Vector for AI-assisted Windows Malware Detection',
      description: 'Behavioural approach to detecting malware at runtime.',
      links: [
        { text: 'Publication', url: '#' },
        { text: 'PDF', url: '#' }
      ]
    },
  ];

  return (
    <motion.section id="research" {...SCROLL_ANIMATION} className="pb-36 relative border-none">
      <SectionTitle number="03">Research</SectionTitle>
      <div className="">
        {papers.map((paper) => (
          <div 
            key={paper.title}
            className="group flex flex-col md:flex-row md:items-baseline mb-16 last:mb-0"
          >
            <div className="md:w-[120px] shrink-0 mb-1 md:mb-0 md:pr-8 md:text-right">
              <span className="font-mono text-[11px] text-[#6a6058] transition-colors group-hover:text-[#8a7f72]">
                {paper.venue}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-[19px] font-[300] mb-2 leading-[1.4] text-[#ebe1d5] opacity-90 group-hover:opacity-100 transition-opacity">
                {paper.title}
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#8a7f72] font-[300] leading-[1.7] mb-3 max-w-[50ch]">
                {paper.description}
              </p>
              {paper.links && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#6a6058] font-mono text-[10px] uppercase tracking-widest">
                  {paper.links.map((link) => (
                    <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8974a] transition-colors outline-none focus-visible:text-[#c8974a]">
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
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
      className="pb-28 relative border-none"
    >
      <SectionTitle number="04">Side Quests</SectionTitle>
      <ul className="">
        {quests.map((quest) => (
          <li key={quest.text} className="group flex flex-col md:flex-row md:items-baseline mb-6 last:mb-0">
            <div className="md:w-[120px] shrink-0 mb-1 md:mb-0 md:pr-8 md:text-right hidden md:block">
              <span className="font-mono text-[11px] text-[#6a6058] transition-colors group-hover:text-[#8a7f72]">
                {quest.year}
              </span>
            </div>
            <div className="flex-1 flex gap-3 md:gap-0 items-start md:items-baseline">
              <span className="font-mono text-[11px] text-[#6a6058] md:hidden shrink-0 mt-[4px]">
                {quest.year}
              </span>
              <span className="text-[#4a433c] shrink-0 md:mr-4 hidden md:inline opacity-40 text-[10px]">—</span>
              <span className="font-sans text-[14px] sm:text-[15px] font-[300] text-[#9a8a7a] leading-[1.6]">
                {quest.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

function InterestsSection() {
  const interests = [
    'LLM', 'Agentic AI', 'Cybersecurity', 'Startups', 'Photography', 'Hiking', 'Running', 'Gym'
  ];

  return (
    <motion.section 
      {...SCROLL_ANIMATION}
      className="pb-36 relative border-none"
    >
      <SectionTitle number="05">Interests</SectionTitle>
      <div className="flex flex-wrap gap-y-3 gap-x-2 font-mono text-[11px] text-[#6a6058] font-[300] leading-relaxed uppercase tracking-widest max-w-[60ch]">
        {interests.map((interest, idx) => (
          <React.Fragment key={interest}>
            <span className="text-[#c8974a] opacity-50 hover:opacity-100 transition-opacity cursor-default">{interest}</span>
            {idx < interests.length - 1 && <span className="text-[#3a3530]"> / </span>}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[720px] px-8 pt-8 pb-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 border-t border-[#1a1714] pt-8">
        <span className="font-mono text-[10px] text-[#5c544a] uppercase tracking-widest">
          © 2026 Yau Le Qi
        </span>
        
        <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest">
          <FooterLink href="https://github.com/teraSurfer40141">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/lqyau/">LinkedIn</FooterLink>
          <FooterLink href="mailto:hello@leqi.dev">Email</FooterLink>
        </div>
      </div>
      <div className="text-left font-serif-zh font-[300] text-[11px] text-[#4a433c] tracking-[0.4em] mt-12 opacity-60 hover:opacity-100 transition-opacity">
        饶乐祺 · 自强不息
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-[#7a6f64] hover:text-[#c8974a] transition-colors outline-none focus-visible:text-[#c8974a]">
      {children}
    </a>
  );
}
