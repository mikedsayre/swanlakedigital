import React from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { SectionTitle } from './components/SectionTitle';
import { GlassCard } from './components/GlassCard';
import { SkillListItem } from './components/SkillListItem';
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
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl m-0 bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 bg-[length:200%] bg-clip-text text-transparent animate-gradientFlow drop-shadow-orange-strong order-2 md:order-1 whitespace-normal mb-5 md:mb-0 leading-[1.3] lg:leading-[1.5] pb-2 lg:pb-6">
              Mike Sayre
            </h1>
            <img
              src={IMAGES.PROFILE_HEADSHOT}
              alt="Mike Sayre Headshot"
              className="w-32 h-32 md:w-52 md:h-52 rounded-full object-cover border-4 border-orange-400 shadow-[0_0_50px_#ff8c33] flex-shrink-0 order-1 md:order-2 min-w-32 min-h-32 mb-5 md:mb-0"
            />
          </div>
          <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl mb-5 text-orange-400 drop-shadow-orange-glow">
            Senior MarTech & AI Strategist
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl opacity-90 text-shadow-cyan-medium mb-10">
            <strong>Bridging Vision with Velocity:</strong> Dynamic MarTech leader and AI strategist with over 20 years of experience bridging traditional digital marketing/eCommerce with emerging AI technologies. Proven in translating business goals into scalable AI-driven solutions—automating workflows, optimizing operations, and driving revenue growth. Expert in rapid prototyping, generative AI for content/media, and MarTech stack integration. Acts as a "technical bridge" for stakeholders, delivering cost-effective, high-impact transformations in remote/hybrid environments.
          </p>
        </header>

        <HorizontalWaveSeparator />

        <section id="about" className="py-8 md:py-10">
          <SectionTitle>The 'Tech Bridge' Philosophy: Connecting Vision to Reality</SectionTitle>
          <GlassCard className="flex flex-col items-center justify-center gap-10 md:gap-16 p-10 md:p-16">
            <img src={IMAGES.SWAN_LAKE_MASCOT_512} alt="Swan Lake Digital Logo" className="w-40 md:w-52 drop-shadow-orange-strong" />
            <div className="text-left">
              <p className="text-base md:text-lg mb-4 text-shadow">
                As a Senior MarTech & AI Strategist, my core mission is to act as the "Technical Bridge" between executive stakeholders and development teams. I specialize in translating complex business goals into scalable technical solutions, designing and implementing custom integrations that resolve critical business bottlenecks.
              </p>
              <p className="text-base md:text-lg text-shadow">
                My proven track record in rapid prototyping, workflow automation, and advanced AI strategy (utilizing Visual Studio, Python, and Vertex AI) consistently drives revenue growth by aligning technical capabilities directly with customer success. I'm dedicated to delivering innovative, high-impact solutions that move businesses forward.
              </p>
            </div>
          </GlassCard>
        </section>

        <HorizontalWaveSeparator />

        <section id="portfolio" className="py-8 md:py-10">
          <SectionTitle>Showcase of Innovation: Live Projects</SectionTitle>
          
          {/* SlangBot with added GitHub button */}
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
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-orange-400/10 border-2 border-orange-400 rounded-full text-orange-400 font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(255,111,0,0.3)] hover:bg-orange-400 hover:text-black hover:shadow-[0_0_40px_#ff8c33] text-sm sm:text-base"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Resume Studio */}
          <GlassCard className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20 p-10 md:p-16 max-w-5xl mx-auto">
            <img
              src={IMAGES.SWAN_LAKE_MASCOT_512} // Placeholder; replace with actual if available
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
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-cyan-400/10 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_#00f0f0] text-sm sm:text-base"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
          </GlassCard>
        </section>

        <HorizontalWaveSeparator />

        <section id="capabilities" className="py-8 md:py-10">
          <SectionTitle>Strategic Impact & Core Capabilities</SectionTitle>
          <div className="grid grid-cols-1 gap-8 md:gap-10 justify-center">
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-cyan-400 mb-2.5 text-shadow-cyan-subheading text-center">
                AI Strategy & Rapid Prototyping
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Architected AI-enhanced MarTech solutions using Google Cloud (Vertex AI) and Google AI Studio to automate content generation and workflows, enabling clients to scale campaigns efficiently.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Developed Python prototypes and scripts to bridge operational gaps, demonstrating AI capabilities and reducing manual processes.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Integrated LLMs (Gemini, Grok, ChatGPT) into existing marketing stacks, cutting operational overhead and accelerating time-to-market.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Orchestrated generative media workflows (Leonardo.ai, Ideogram, Veo, Midjourney) to create high-impact commercial assets, boosting engagement and conversions.</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-orange-400 mb-2.5 text-shadow-orange-glow text-center">
                Digital Transformation & Workflow Automation
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Solved complex workflow bottlenecks by developing Python scripts that automate data retrieval, content generation, and system integrations, bridging manual operations with automated scale.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Centralized fragmented digital infrastructures, consolidating multiple disparate systems (CRM, Inventory, Website) into unified tech stacks, reducing vendor waste and enabling robust, group-wide data analysis.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Mastered API management and Firebase Hosting for scalable and secure application deployment.</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-cyan-400 mb-2.5 text-shadow-cyan-subheading text-center">
                E-Commerce & Revenue Acceleration
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Led strategic pivots to Amazon Marketplace dominance, scaling brands to multi-million dollar annual revenues.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Expertly managed Amazon Seller Central ecosystems, including FBA logistics, inventory forecasting, brand registry, and Buy Box strategies.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Developed proprietary "Video SEO" algorithms for #1 Google rankings and launched "Print + Digital" bundles, driving consistent top 10 national online revenue.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Provided comprehensive e-commerce strategy for platforms like BigCommerce, Shopify, and Miva Merchant.</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-orange-400 mb-2.5 text-shadow-orange-glow text-center">
                Technical Leadership & Sales Enablement
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Acts as a "Technical Bridge," translating complex technical limitations and business goals into clear value propositions for executive stakeholders and development teams.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Managed the transition of significant ad spend in-house, achieving substantial annual savings and improving lead quality.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-cyan-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Provided technical advisory and training to leadership teams and sales forces, simplifying complex digital metrics into actionable operational adjustments.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-400 text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Expert in CRM Architecture, Pipeline Management, and Reseller Channel Management for optimized revenue operations.</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </section>

        <HorizontalWaveSeparator />

        <section id="skills" className="py-8 md:py-10">
          <SectionTitle>My Technical & Strategic Toolkit</SectionTitle>
          <div className="grid grid-cols-1 gap-5 md:gap-6">
            <SkillListItem
              icon="fa-solid fa-microchip text-orange-400"
              title="AI & Automation"
              description="Google Gemini (Pro/Ultra) • Google AI Studio • Vertex AI (Model Tuning & Deployment) • OpenAI API • Prompt Engineering (Chain-of-Thought, Few-Shot) • Grok • ChatGPT • Leonardo.ai • Ideogram.ai • Midjourney • Google Veo (AI Video) • Sora (AI Video) • No-Code/Low-Code Tools (Zapier)"
            />
            <SkillListItem
              icon="fa-solid fa-cloud text-cyan-400"
              title="Development & Prototyping"
              description="Python (Scripting, PoCs, Automation) • Visual Studio Code/IDE • PowerShell • Firebase Hosting • API Integration & Management • HTML5/CSS/JavaScript/PHP"
            />
            <SkillListItem
              icon="fa-solid fa-code text-orange-400"
              title="MarTech & Analytics"
              description="Google Ads/Analytics/Tag Manager/Marketing Platform • Meta Business Suite • SEO/SEM/PPC • YouTube Video Advertising • Social Media Strategy (Facebook, Instagram, TikTok, X/Twitter) • Marketing Automation • Audience Targeting • Data Visualization & Reporting • Email Marketing"
            />
            <SkillListItem
              icon="fa-solid fa-robot text-cyan-400"
              title="eCommerce & Operations"
              description="Amazon Seller Central (Expert) • BigCommerce • Shopify • Miva Merchant • Inventory Forecasting & Logistics • CRM & SaaS Expertise (Rapid Adoption & Integration)"
            />
            <SkillListItem
              icon="fa-solid fa-store text-orange-400"
              title="Professional Skills"
              description="Multichannel Campaign Strategy • ROI Optimization • Vendor/Partnership Management • Remote Collaboration • Process Improvement • Sales Enablement & Revenue Growth • Cost-Benefit Analysis • Digital Transformation Consulting • AI Ethics & Responsible AI • Agile Methodologies"
            />
          </div>
        </section>

        <HorizontalWaveSeparator />

        <section id="contact" className="py-8 md:py-10">
          <SectionTitle>Connect for Strategic Impact</SectionTitle>
          <GlassCard className="flex flex-col items-center justify-center gap-10 md:gap-20 p-10 md:p-16">
            <img src={IMAGES.SWAN_LAKE_MASCOT_512} alt="Swan Lake Digital Mascot" className="w-48 md:w-72 drop-shadow-orange-glow flex-shrink-0 max-w-full" />
            <div className="text-left pointer-events-auto">
              <p className="text-base md:text-lg mb-5 text-shadow">
                Ready to bridge your business vision with cutting-edge technical execution? Let's discuss how my expertise in AI strategy, rapid prototyping, and digital transformation can drive your next success.
              </p>
              <p className="text-base md:text-lg mb-2 text-shadow">
                Phone: <a href="tel:+15136466767" className="text-orange-400 no-underline font-semibold hover:text-shadow-[0_0_15px_#ff8c33]">513-646-6767</a>
              </p>
              <p className="text-base md:text-lg mb-2 text-shadow">
                LinkedIn: <a href="https://www.linkedin.com/in/mikedsayre" target="_blank" rel="noopener noreferrer" className="text-cyan-400 no-underline font-semibold hover:text-shadow-[0_0_15px_#00ffff]">linkedin.com/in/mikedsayre</a>
              </p>
              <p className="text-base md:text-lg mb-2 text-shadow">
                GitHub: <a href="https://github.com/mikedsayre" target="_blank" rel="noopener noreferrer" className="text-orange-400 no-underline font-semibold hover:text-shadow-[0_0_15px_#ff8c33]">github.com/mikedsayre</a>
              </p>
              <p className="text-base md:text-lg text-shadow">
                Schedule a consultation: <a href="https://calendar.app.google/wZxkgTkq6UmM99eB8" target="_blank" rel="noopener noreferrer" className="text-cyan-400 no-underline font-semibold hover:text-shadow-[0_0_15px_#00ffff]">Book here →</a>
              </p>
            </div>
          </GlassCard>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
