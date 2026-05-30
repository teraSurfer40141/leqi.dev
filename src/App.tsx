/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

function Divider() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8a8578]/15" />
  );
}

export default function App() {
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const sections = ['about', 'experience', 'research', 'side-quests'];
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
    <div className="min-h-screen w-full overflow-x-hidden font-sans m-0 p-0 bg-transparent pt-[70px]">
      {/* Dynamic Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0d0a]/60 backdrop-blur-[8px] border-b border-[#8a8578]/5">
        <div className="w-full max-w-[720px] mx-auto px-8 py-5 flex justify-between items-center">
          <span 
            className="font-serif-zh text-[14px] font-[400] text-[#c4a747] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            饶
          </span>
          <div className="flex flex-wrap gap-x-2.5 gap-y-1 font-sans text-[12px] tracking-[0.04em] text-[#8a8578] items-center">
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')} 
              className={`${activeSection === 'about' ? 'text-[#e8e4db]' : 'text-[#8a8578] hover:text-[#e8e4db]'} transition-colors duration-200 ease-in-out font-sans font-[300] tracking-[0.04em] text-[12px]`}
            >
              About
            </a>
            <span className="text-[#8a8578]/30 select-none">·</span>
            <a 
              href="#experience" 
              onClick={(e) => handleScrollTo(e, 'experience')} 
              className={`${activeSection === 'experience' ? 'text-[#e8e4db]' : 'text-[#8a8578] hover:text-[#e8e4db]'} transition-colors duration-200 ease-in-out font-sans font-[300] tracking-[0.04em] text-[12px]`}
            >
              Experience
            </a>
            <span className="text-[#8a8578]/30 select-none">·</span>
            <a 
              href="#research" 
              onClick={(e) => handleScrollTo(e, 'research')} 
              className={`${activeSection === 'research' ? 'text-[#e8e4db]' : 'text-[#8a8578] hover:text-[#e8e4db]'} transition-colors duration-200 ease-in-out font-sans font-[300] tracking-[0.04em] text-[12px]`}
            >
              Research
            </a>
            <span className="text-[#8a8578]/30 select-none">·</span>
            <a 
              href="#side-quests" 
              onClick={(e) => handleScrollTo(e, 'side-quests')} 
              className={`${activeSection === 'side-quests' ? 'text-[#e8e4db]' : 'text-[#8a8578] hover:text-[#e8e4db]'} transition-colors duration-200 ease-in-out font-sans font-[300] tracking-[0.04em] text-[12px]`}
            >
              Side Quests
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-[720px] px-8 mx-auto" style={{ paddingTop: 0 }}>
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
    <section 
      className="min-h-[100vh] flex flex-col justify-center pb-[4rem] relative border-none bg-transparent"
    >
      <div className="relative z-10 bg-transparent flex flex-col justify-center flex-1">
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-[300] leading-[1.1] tracking-[0.05em] bg-transparent">
          <span className="text-[#e8e4db]">Yau Le Qi</span>
        </h1>
        <div className="font-serif-zh font-[300] text-[clamp(0.9rem,2.5vw,1rem)] tracking-[0.2em] mt-[0.6rem] leading-[1.8]">
          <span className="text-[#e8e4db]">饶乐祺</span> <span className="text-[#8a8578]">·</span> <span className="text-[#c4a747]">自强不息</span>
        </div>
        <div className="h-[2px] w-[70px] bg-[#c4a747] mt-8" />
      </div>
    </section>
  );
}

function SectionTitle({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-sans text-[12px] tracking-[0.15em] uppercase font-[300] leading-[1.8]">
        {number ? (
          <span className="text-[#c4a747] mr-[0.55em]">§ {number}</span>
        ) : null}
        <span className="text-[#8a8578]">{children}</span>
      </h2>
    </div>
  );
}

function AboutSection() {
  return (
    <section 
      id="about"
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="01">About</SectionTitle>
      <p className="font-sans text-[17px] font-[300] text-[#e8e4db] leading-[1.6]" style={{ maxWidth: '48ch' }}>
        I just finished National Service as a section commander and I'm heading to Hughes Hall, 
        Cambridge in October to read Computer Science. 
        Before NS I did some research in AI safety and malware detection, ran a student 
        computing event, and interned at a couple of places. Still at it.
      </p>
      <Divider />
    </section>
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
    <section id="experience" className="py-[4rem] relative border-none">
      <SectionTitle number="02">Experience</SectionTitle>
      <div className="relative">
        {experiences.map((exp, idx) => (
          <div 
            key={exp.company}
            className="flex flex-col md:flex-row md:items-start mb-[2.5rem] last:mb-0 relative z-10"
          >
            <div className="md:w-[140px] shrink-0 mb-3 md:mb-0 pr-4">
              <div className="font-mono text-[12px] text-[#8a8578] md:mb-1 leading-[1.8]">
                {exp.year}
              </div>
              <div className="font-mono text-[12px] text-[#e8e4db] leading-[1.8]">
                {exp.role}
              </div>
            </div>
            <div className="hidden md:block" style={{ width: '1px', background: 'rgba(138,133,120,0.2)', alignSelf: 'stretch', margin: '0 1.5rem' }}></div>
            <div className="flex-1 mt-1 md:mt-0">
              <h3 className="font-serif text-[24px] font-[300] text-[#e8e4db] mb-3 leading-none mt-[-2px]">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="no-arrow font-[300] hover:text-[#e8e4db] transition-colors">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="font-sans text-[15px] text-[#8a8578] font-[300] leading-[1.6]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Divider />
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
    <section id="research" className="py-[4rem] relative border-none">
      <SectionTitle number="03">Research</SectionTitle>
      <div className="">
        {papers.map((paper, idx) => (
          <div 
            key={paper.title}
            className="mb-[2.5rem] last:mb-0"
          >
            <span className="font-mono text-[12px] text-[#8a8578] block mb-2 leading-[1.8]">
              {paper.venue}
            </span>
            <h3 className="font-serif text-[32px] font-[300] mb-3 leading-[1.2] text-[#e8e4db]">
              {paper.title}
            </h3>
            <p className="font-sans text-[15px] text-[#e8e4db] font-[300] mb-4 leading-[1.6]">
              {paper.description}
            </p>
            {paper.links && (
              <div className="flex flex-wrap gap-2 text-[#8a8578] font-mono text-[12px] leading-[1.8]">
                {paper.links.map((link, i) => (
                  <React.Fragment key={link.text}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="outbound-link text-[#8a8578] hover:text-[#e8e4db] transition-colors duration-200 ease-in-out font-[300]"
                    >
                      {link.text}
                    </a>
                    {i < paper.links.length - 1 && <span className="select-none text-[#8a8578]/40">·</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Divider />
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
    <section 
      id="side-quests" 
      className="py-[4rem] relative border-none"
    >
      <SectionTitle number="04">Side Quests</SectionTitle>
      <ul className="">
        {quests.map((quest) => (
          <li key={quest.text} className="flex gap-4 items-baseline mb-[2.5rem] last:mb-0">
            <span className="text-[#8a8578] shrink-0 leading-[1.8]">—</span>
            <span className="font-mono text-[12px] text-[#8a8578] w-[4.5rem] whitespace-nowrap shrink-0 leading-[1.8]">
              {quest.year}
            </span>
            <span className="font-sans text-[15px] font-[300] text-[#e8e4db] leading-[1.6]">
              {quest.text}
            </span>
          </li>
        ))}
      </ul>
      <Divider />
    </section>
  );
}

function InterestsSection() {
  const interests = [
    'LLM', 'Agentic AI', 'Cybersecurity', 'Startups', 'Photography', 'Hiking', 'Running', 'Gym'
  ];

  return (
    <section 
      id="interests"
      className="py-[4rem] relative border-none"
    >
      <SectionTitle>Interests</SectionTitle>
      <div className="font-mono text-[13px] text-[#e8e4db] font-[300] leading-[1.8]">
        {interests.map((interest, idx) => (
          <React.Fragment key={interest}>
            {interest}
            {idx < interests.length - 1 && <span className="text-[#8a8578]/40 select-none"> · </span>}
          </React.Fragment>
        ))}
      </div>
      <Divider />
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[720px] px-8 pt-[4rem] pb-12 flex flex-col items-center gap-2">
      <div className="flex gap-4 font-mono text-[12px] text-[#8a8578] tracking-wide leading-[1.8] items-center">
        <a 
          href="https://github.com/teraSurfer40141" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#e8e4db] transition-colors duration-200 ease-in-out font-[300]"
        >
          GitHub
        </a>
        <span className="text-[#8a8578]/40 select-none">·</span>
        <a 
          href="https://www.linkedin.com/in/lqyau/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#e8e4db] transition-colors duration-200 ease-in-out font-[300]"
        >
          LinkedIn
        </a>
        <span className="text-[#8a8578]/40 select-none">·</span>
        <a 
          href="mailto:hello@leqi.dev" 
          className="hover:text-[#e8e4db] transition-colors duration-200 ease-in-out font-[300]"
        >
          Email
        </a>
      </div>
      <div className="font-mono text-[12px] text-[#8a8578] leading-[1.8] text-center font-[300]">
        © 2026 Yau Le Qi
      </div>
      <div className="text-center font-serif-zh font-[300] text-[13px] text-[#8a8578] tracking-[0.2em] leading-[1.8]">
        饶乐祺 <span className="text-[#8a8578] opacity-50">·</span> <span className="text-[#c4a747]">自强不息</span>
      </div>
    </footer>
  );
}
