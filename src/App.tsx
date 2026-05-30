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
      className="min-h-screen w-full overflow-x-hidden font-sans m-0 p-0 bg-transparent"
    >
      <header className="mx-auto max-w-[720px] px-8 pt-8 pb-4 flex justify-between items-center relative z-20">
        <span className="font-serif-zh text-[18px] text-[#c8974a] font-normal">饶</span>
        <nav className="flex items-center gap-1.5 sm:gap-4 font-mono text-[11px] sm:text-[12px] text-[#8a8578] font-[300]">
          <a href="#about" className="hover:text-[#f2ede8] transition-colors duration-300">About</a>
          <span>·</span>
          <a href="#experience" className="hover:text-[#f2ede8] transition-colors duration-300">Experience</a>
          <span>·</span>
          <a href="#research" className="hover:text-[#f2ede8] transition-colors duration-300">Research</a>
          <span>·</span>
          <a href="#side-quests" className="hover:text-[#f2ede8] transition-colors duration-300">Side Quests</a>
        </nav>
      </header>

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
      className="!pt-[280px] pb-[4rem] relative border-none overflow-hidden bg-transparent"
    >
      <div className="relative z-10 bg-transparent">
        <motion.h1 
          initial={{ filter: 'blur(8px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="font-serif text-[48px] sm:text-[64px] md:text-[96px] font-[300] leading-[1.1] tracking-[0.05em] bg-transparent"
        >
          <span className="text-[#f2ede8]">Yau</span> <span className="text-[#c8974a]">Le Qi</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
          className="font-serif-zh font-[300] text-[13px] text-[#7a6840] tracking-[0.2em] mt-[0.4rem] leading-[1.8]"
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
        <span className="text-[#c8974a] mr-2 font-normal">§ {number}</span>
        {children}
      </h2>
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
            <div className="hidden md:block" style={{ width: '1px', background: 'rgba(184,149,106,0.3)', alignSelf: 'stretch', margin: '0 1.5rem' }}></div>
            <div className="flex-1 mt-1 md:mt-0">
              <h3 className="font-serif text-[24px] font-[300] text-[#f2ede8] mb-3 leading-none mt-[-2px]">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="font-[300] outbound-link">
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
            className="mb-[4rem] last:mb-0"
          >
            <span className="font-mono text-[12px] text-[#6a6058] block mb-2 leading-[1.8]">
              {paper.venue}
            </span>
            <h3 className="font-serif text-[32px] font-[300] mb-3 leading-[1.2] text-[#f2ede8]">
              {paper.title}
            </h3>
            <p className="font-sans text-[14px] text-[#c8c2ba] font-[300] mb-4 leading-[1.8]">
              {paper.description}
            </p>
            {paper.links && (
              <div className="flex flex-wrap gap-2 text-[#6a6058] font-mono text-[12px] leading-[1.8]">
                {paper.links.map((link, i) => (
                  <React.Fragment key={link.text}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300] outbound-link">
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
      {...SCROLL_ANIMATION}
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="05">Interests</SectionTitle>
      <div className="font-mono text-[13px] text-[#c8c2ba] font-[300] leading-[1.8]">
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
    <footer className="mx-auto max-w-[720px] px-8 pt-[4rem] pb-12 text-center">
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 font-mono text-[12px] text-[#6a6058] leading-[1.8]">
        <FooterLink href="https://github.com/teraSurfer40141">GitHub</FooterLink>
        <span>·</span>
        <FooterLink href="https://www.linkedin.com/in/lqyau/">LinkedIn</FooterLink>
        <span>·</span>
        <FooterLink href="mailto:hello@leqi.dev">Email</FooterLink>
        <span className="mx-2 text-[#3a3530]">|</span>
        <span>© 2026 Yau Le Qi</span>
        <span className="mx-2 text-[#3a3530]">|</span>
        <span className="font-serif-zh text-[#7a6840] tracking-[0.2em]">饶乐祺 · 自强不息</span>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#6a6058] hover:text-[#f2ede8] transition-colors duration-300 ease-in-out font-[300] leading-[1.8] outbound-link"
    >
      {children}
    </a>
  );
}
