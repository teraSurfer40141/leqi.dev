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
      whileInView={{ opacity: 0.45 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b8956a] to-transparent"
    />
  );
}

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="min-h-screen font-sans m-0 p-0 bg-transparent"
    >
      <main className="w-full max-w-[720px] pl-0 pr-6" style={{ margin: '0 auto', paddingTop: 0 }}>
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
      className="!pt-[280px] pb-[2.8vh] relative border-none overflow-hidden bg-transparent"
    >
      <div className="relative z-10 bg-transparent">
        <motion.h1 
          initial={{ filter: 'blur(8px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="font-serif text-[96px] font-[300] leading-[1.1] tracking-[0.05em] bg-transparent"
        >
          <span className="text-[#f2ede8]">Yau</span> <span className="text-[#c8974a]">Le Qi</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          className="font-serif-zh font-[300] text-[13px] text-[#7a6840] tracking-[0.2em] mt-[0.4rem]"
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
      <h2 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#6a6058] font-[300]">
        {children}
      </h2>
      <span className="font-mono text-[10px] text-[#3a3530] font-[300]">
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
      className="pt-10 pb-16 relative border-none"
    >
      <SectionTitle number="01">About</SectionTitle>
      <p className="font-sans text-[15px] font-[300] text-[#9a8a7a] leading-[1.8] !max-w-[48ch]" style={{ maxWidth: '48ch' }}>
        I just finished National Service as a section commander and I'm heading to Hughes Hall, 
        Cambridge in October to read Computer Science. 
        Before NS I did some research in AI safety and malware detection, ran a student 
        computing event, and interned at a couple of places. Still figuring things out.
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
      role: 'Intern',
      company: 'Tinkertanker',
      url: 'https://tinkertanker.com',
      description: 'Education technology, building tools for students.',
    },
    {
      year: '2022',
      role: 'Intern',
      company: 'DSTA',
      url: 'https://www.dsta.gov.sg',
      description: 'Defence technology internship during junior college.',
    },
  ];

  return (
    <motion.section id="experience" {...SCROLL_ANIMATION} className="py-16 relative border-none">
      <SectionTitle number="02">Experience</SectionTitle>
      <div className="relative">
        {experiences.map((exp, idx) => (
          <div 
            key={exp.company}
            className="flex flex-row mb-[2.5rem] last:mb-0 relative z-10"
          >
            <div className="min-w-[140px] shrink-0">
              <div className="font-mono text-[11px] text-[#6a6058] mb-1 whitespace-nowrap">
                {exp.year}
              </div>
              <div className="font-mono text-[11px] text-[#9a8a7a] whitespace-nowrap">
                {exp.role}
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(184,149,106,0.3)', alignSelf: 'stretch', margin: '0 1.5rem' }}></div>
            <div className="flex-1">
              <h3 className="font-serif text-[24px] font-[300] text-[#f2ede8] mb-2 leading-none mt-[-2px]">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#8B2500] hover:underline transition-colors font-[300]">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="font-sans text-[14px] text-[#9a8a7a] font-[300] leading-relaxed">
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
    <motion.section id="research" {...SCROLL_ANIMATION} className="py-16 relative border-none">
      <SectionTitle number="03">Research</SectionTitle>
      <div className="">
        {papers.map((paper, idx) => (
          <div 
            key={paper.title}
            className="mb-[2.5rem] last:mb-0"
          >
            <span className="font-mono text-[11px] text-[#6a6058] block mb-1">
              {paper.venue}
            </span>
            <h3 className="font-serif text-[18px] font-[300] mb-2 leading-snug text-[#f2ede8]">
              {paper.title}
            </h3>
            <p className="font-sans text-[13px] text-[#9a8a7a] font-[300] mb-2">
              {paper.description}
            </p>
            {paper.links && (
              <div className="flex flex-wrap gap-2 text-[#6a6058] font-mono text-[11px]">
                {paper.links.map((link, i) => (
                  <React.Fragment key={link.text}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#8B2500] transition-colors font-[300]">
                      {link.text}
                    </a>
                    {i < paper.links.length - 1 && <span>·</span>}
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
      className="py-16 relative border-none"
    >
      <SectionTitle number="04">Side Quests</SectionTitle>
      <ul className="">
        {quests.map((quest) => (
          <li key={quest.text} className="flex gap-4 items-baseline mb-[1.25rem] last:mb-0">
            <span className="text-[#6a6058] shrink-0">—</span>
            <span className="font-mono text-[11px] text-[#6a6058] w-[4.5rem] whitespace-nowrap shrink-0">
              {quest.year}
            </span>
            <span className="font-sans text-[14px] font-[300] text-[#f2ede8]">
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
      {...SCROLL_ANIMATION}
      className="py-16 relative border-none"
    >
      <SectionTitle number="05">Interests</SectionTitle>
      <div className="font-mono text-[13px] text-[#9a8a7a] font-[300] leading-relaxed">
        {interests.map((interest, idx) => (
          <React.Fragment key={interest}>
            {interest}
            {idx < interests.length - 1 && <span className="text-[#6a6058]"> · </span>}
          </React.Fragment>
        ))}
      </div>
      <Divider />
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[720px] pl-0 pr-6 pt-10 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
        <span className="font-mono text-[12px] text-[#6a6058]">
          © 2026 Yau Le Qi
        </span>
        
        <div className="flex flex-wrap gap-4 font-mono text-[12px] text-[#6a6058]">
          <FooterLink href="https://github.com/teraSurfer40141">GitHub</FooterLink>
          <span className="text-[#6a6058]">·</span>
          <FooterLink href="https://www.linkedin.com/in/lqyau/">LinkedIn</FooterLink>
          <span className="text-[#6a6058]">·</span>
          <FooterLink href="mailto:hello@leqi.dev">Email</FooterLink>
        </div>
      </div>
      <div className="text-center font-serif-zh font-[300] text-[13px] text-[#7a6840] tracking-[0.2em] mt-6">
        饶乐祺 · 自强不息
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-[#6a6058] hover:text-[#8B2500] transition-colors font-[300]">
      {children}
    </a>
  );
}
