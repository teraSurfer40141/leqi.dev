/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React from 'react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#b8956a]/20 m-0 p-0">
      <main className="w-full max-w-[720px] px-6" style={{ margin: '0 auto', paddingTop: 0 }}>
        <div style={{ height: '180px' }}></div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <SideQuestsSection />
        <InterestsSection />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: { transition: { staggerChildren: 0.15 } }
      }}
      className="pb-[4vh] border-b-[0.5px] border-[rgba(184,149,106,0.15)] relative overflow-hidden"
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-10">
        <h1 className="font-serif text-[72px] font-[300] leading-[1.1] tracking-[0.05em]">
          <span className="text-[#f2ede8]">Yau</span> <span className="text-[#b8956a]">Le Qi</span>
        </h1>
        <div className="font-serif-zh text-[13px] text-[#8a7450] tracking-[0.2em] mt-[0.4rem]">
          饶乐祺 · 自强不息
        </div>
      </motion.div>
      <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-10 font-sans text-[16px] font-[300] text-[#f2ede8] leading-[1.85] max-w-[480px] mt-7">
        CS student from Singapore. Interested in AI, security, and building systems. Occasional photographer.
      </motion.p>
    </motion.section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#4a4540] mb-8">
      {children}
    </h2>
  );
}

function AboutSection() {
  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="py-12 border-b-[0.5px] border-[rgba(184,149,106,0.15)]"
    >
      <SectionTitle>About</SectionTitle>
      <p className="font-sans text-[15px] font-[300] text-[#d4cfc8] leading-[1.8] !max-w-[55ch]">
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
      description: 'Education technology, building tools for students.',
    },
    {
      year: '2022',
      role: 'Intern',
      company: 'DSTA',
      description: 'Defence technology internship during junior college.',
    },
  ];

  return (
    <section id="experience" className="py-12 border-b-[0.5px] border-[rgba(184,149,106,0.15)]">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative">
        <div className="absolute left-[140px] top-0 h-full border-l-[1px] border-[rgba(184,149,106,0.35)]"></div>
        {experiences.map((exp, idx) => (
          <motion.div 
            key={exp.company}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
            }}
            className="flex flex-row mb-[2.5rem] last:mb-0 relative z-10"
          >
            <div className="min-w-[140px] shrink-0 pr-5">
              <div className="font-mono text-[11px] text-[#4a4540] mb-1 whitespace-nowrap">
                {exp.year}
              </div>
              <div className="font-mono text-[11px] text-[#6a5a3a] whitespace-nowrap">
                {exp.role}
              </div>
            </div>
            <div className="flex-1 pl-6">
              <h3 className="font-serif text-[24px] font-[300] text-[#f2ede8] mb-2 leading-none mt-[-2px]">
                {exp.company}
              </h3>
              <p className="font-sans text-[14px] text-[#8a7a6a] font-[300] leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
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
    <section id="research" className="py-12 border-b-[0.5px] border-[rgba(184,149,106,0.15)]">
      <SectionTitle>Research</SectionTitle>
      <div className="">
        {papers.map((paper, idx) => (
          <motion.div 
            key={paper.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -10 },
              show: { opacity: 1, x: 0, transition: { delay: idx * 0.1 } }
            }}
            className="mb-[2.5rem] last:mb-0"
          >
            <span className="font-mono text-[11px] text-[#6a5a3a] block mb-1">
              {paper.venue}
            </span>
            <h3 className="font-serif text-[18px] font-[300] mb-2 leading-snug text-[#f2ede8]">
              {paper.title}
            </h3>
            <p className="font-sans text-[13px] text-[#6a6058] font-[300] mb-2">
              {paper.description}
            </p>
            {paper.links && (
              <div className="flex flex-wrap gap-2 text-[#6a5a3a] font-mono text-[11px]">
                {paper.links.map((link, i) => (
                  <React.Fragment key={link.text}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#f2ede8] transition-colors">
                      {link.text}
                    </a>
                    {i < paper.links.length - 1 && <span>·</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="py-12 border-b-[0.5px] border-[rgba(184,149,106,0.15)]"
    >
      <SectionTitle>Side Quests</SectionTitle>
      <ul className="">
        {quests.map((quest) => (
          <li key={quest.text} className="flex gap-4 items-baseline mb-[1.25rem] last:mb-0">
            <span className="text-[#b8956a] shrink-0">—</span>
            <span className="font-mono text-[11px] text-[#4a4540] w-[4.5rem] whitespace-nowrap shrink-0">
              {quest.year}
            </span>
            <span className="font-sans text-[14px] font-[300] text-[#c8c2ba]">
              {quest.text}
            </span>
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="py-12 border-b-[0.5px] border-[rgba(184,149,106,0.15)]"
    >
      <SectionTitle>Interests</SectionTitle>
      <div className="font-mono text-[13px] text-[#7a7060] leading-relaxed">
        {interests.map((interest, idx) => (
          <React.Fragment key={interest}>
            {interest}
            {idx < interests.length - 1 && <span className="text-[#6a5a3a]"> · </span>}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[720px] px-6 pt-10 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
        <span className="font-mono text-[12px] text-[#6a6058]">
          © 2026 Yau Le Qi
        </span>
        
        <div className="flex flex-wrap gap-4 font-mono text-[12px] text-[#6a6058]">
          <FooterLink href="https://github.com/teraSurfer40141">GitHub</FooterLink>
          <span className="text-[#4a4540]">·</span>
          <FooterLink href="https://www.linkedin.com/in/lqyau/">LinkedIn</FooterLink>
          <span className="text-[#4a4540]">·</span>
          <FooterLink href="mailto:hello@leqi.dev">Email</FooterLink>
        </div>
      </div>
      <div className="text-center font-serif-zh text-[13px] text-[#4a3f2a] tracking-[0.2em] mt-6">
        饶乐祺 · 自强不息
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-[#8a7450]">
      {children}
    </a>
  );
}
