import React from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { SectionTitle } from './components/SectionTitle';
import { GlassCard } from './components/GlassCard';
import { Footer } from './components/Footer';
import { HorizontalWaveSeparator } from './components/HorizontalWaveSeparator';
import { IMAGES } from './constants';

const App: React.FC = () => {
  return (
    <>
      <BackgroundAnimation />
      <Navbar />

      <div className="relative max-w-7xl mx-auto px-5">
        <header id="home" className="py-24 md:py-28 px-5 flex flex-col items-center text-center min-h-[80vh] justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-12 mb-7 flex-wrap">
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl m-0 bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 bg-[length:200%] bg-clip-text text-transparent animate-gradientFlow drop-shadow-orange-glow order-2 md:order-1 whitespace-normal mb-5 md:mb-0 leading-[1.3] lg:leading-[1.5] pb-2 lg:pb-6">
              Mike Sayre
            </h1>
            <img
              src={IMAGES.PROFILE_HEADSHOT}
              alt="Mike Sayre Headshot"
              className="w-32 h-32 md:w-52 md:h-52 rounded-full object-cover border-4 border-orange-400 shadow-[0_0_50px_#ff8c33] flex-shrink-0 order-1 md:order-2 min-w-32 min-h-32 mb-5 md:mb-0"
            />
          </div>
          <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl mb-5 text-orange-400 drop-shadow-orange-glow">
            Senior Solutions Architect & AI Strategist
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl opacity-90 text-shadow-cyan-medium mb-10">
            <strong>Bridging Vision with Velocity:</strong> I architect intelligent systems that translate complex business goals into cutting-edge technical execution. With over two decades of experience, I empower organizations to innovate faster, optimize operations, and drive substantial growth through strategic AI integration and rapid prototyping.
          </p>
        </header>

        <HorizontalWaveSeparator />

        <section id="about" className="py-8 md:py-10">
          <SectionTitle>The 'Tech Bridge' Philosophy: Connecting Vision to Reality</SectionTitle>
          <GlassCard className="flex flex-col items-center justify-center gap-10 md:gap-16 p-10 md:p-16">
            <img src={IMAGES.SWAN_LAKE_MASCOT_512} alt="Swan Lake Digital Logo" className="w-40 md:w-52 drop-shadow-orange-glow" />
            <div className="text-left">
              <p className="text-base md:text-lg mb-4 text-shadow">
                As a Senior Solutions Architect, my core mission is to act as the "Technical Bridge" between executive stakeholders and development teams. I specialize in translating complex business goals into scalable technical solutions, designing and implementing custom integrations that resolve critical business bottlenecks.
              </p>
              <p className="text-base md:text-lg text-shadow">
                My proven track record in rapid prototyping, workflow automation, and advanced AI strategy (utilizing Visual Studio, Python, and Vertex AI) consistently drives multimillion-dollar growth by aligning technical capabilities directly with customer success. I'm dedicated to delivering innovative, high-impact solutions that move businesses forward.
              </p>
            </div>
          </GlassCard>
        </section>

        <HorizontalWaveSeparator />

        <section id="portfolio" className="py-8 md:py-10">
          <SectionTitle>Showcase of Innovation: Live Projects</SectionTitle>
          
          {/* SlangBot - Now with GitHub button */}
          <GlassCard className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-10 md:p-16 max-w-5xl mx-auto mb-12">
            <img
              src={IMAGES.SLANGBOT_MASCOT_PLACEHOLDER}
              alt="SlangBot Mascot"
              className="w-48 md:w-72 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_50px_#00f0f0] drop-shadow-cyan-glow-strong flex-shrink-0"
            />
            <div className="text-left pointer-events-auto max-w-lg">
              <h3 className="font-orbitron text-xl md:text-3xl text-cyan-400 mb-2.5 text-shadow-cyan-subheading">
                SlangBot: AI-Powered Language Innovation
              </h3>
              <p className="text-base md:text-lg mb-5 text-shadow">
                SlangBot is a live AI application I prototyped to demonstrate the power of LLMs in creative language tasks. It decodes modern slang and generates inventive new terms, all presented through a unique retro-futuristic UI/UX. This project showcases my expertise in LLM integration, prompt engineering, and rapid full-stack deployment.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://slangbot-demo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-cyan-400/10 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_#00f0f0] text-sm sm:text-base"
                >
                  View Live Demo →
                </a>
                <a
                  href="https://github.com/mikedsayre/slangbot-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-glass-light border-2 border-orange-400 rounded-full text-orange-400 font-semibold no-underline transition-all duration-400 hover:bg-orange-400 hover:text-black hover:shadow-[0_0_40px_#ff8c33] text-sm sm:text-base"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Resume Studio - Orange dominant */}
          <GlassCard className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20 p-10 md:p-16 max-w-5xl mx-auto">
            <img
              src={IMAGES.SWAN_LAKE_MASCOT_512}
              alt="Resume Studio Preview"
              className="w-48 md:w-72 rounded-lg object-cover border-4 border-orange-400 shadow-[0_0_50px_#ff8c33] drop-shadow-orange-glow flex-shrink-0"
            />
            <div className="text-left pointer-events-auto max-w-lg">
              <h3 className="font-orbitron text-xl md:text-3xl text-orange-400 mb-2.5 text-shadow-orange-glow">
                Resume Studio: Dynamic Markdown Resume Builder
              </h3>
              <p className="text-base md:text-lg mb-5 text-shadow">
                Resume Studio is an interactive web-based resume editor that uses markdown input with live preview, customizable CSS themes, and exports to PDF, HTML, or Markdown. Built with React, TypeScript, and Vite, it demonstrates clean, user-focused frontend architecture and rapid tool development for productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://resume-studio-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-orange-400/10 border-2 border-orange-400 rounded-full text-orange-400 font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(255,111,0,0.3)] hover:bg-orange-400 hover:text-black hover:shadow-[0_0_40px_#ff8c33] text-sm sm:text-base"
                >
                  View Live Demo →
                </a>
                <a
                  href="https://github.com/mikedsayre/resume-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-glass-light border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold no-underline transition-all duration-400 hover:bg-cyan-400 hover:text-black text-sm sm:text-base"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
          </GlassCard>
        </section>

        <HorizontalWaveSeparator />

        {/* Remaining sections (capabilities, skills, etc.) can keep cyan dominance with occasional orange highlights if desired */}
        {/* Example: Change some bullet icons or headings to orange in capabilities section for balance */}

        <Footer />
      </div>
    </>
  );
};

export default App;
