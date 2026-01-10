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
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mb-7">
            <img
              src={IMAGES.SWAN_LAKE_MASCOT_512}
              alt="Swan Lake Digital Mascot"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_50px_#00f0f0] flex-shrink-0"
            />
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl m-0 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-[length:200%] bg-clip-text text-transparent animate-gradientFlow drop-shadow-cyan-strong whitespace-normal leading-[1.3] lg:leading-[1.5] pb-2 lg:pb-6">
              Swan Lake Digital
            </h1>
          </div>
          <div className="mt-4 bg-glass px-6 py-4 rounded-lg border border-cyan-800/30 max-w-4xl">
            <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl text-cyan-300 drop-shadow-cyan-heading mb-2">
              AI-Powered Innovation for Your Business
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 text-shadow-cyan-medium">
              At Swan Lake Digital, we harness AI to rapidly prototype and launch custom apps and websites that tackle your business bottlenecks. Our intuitive designs make tools fun and efficient, streamlining operations without unnecessary hassle or stress—delivering real-world solutions faster than ever.
            </p>
          </div>
        </header>

        <HorizontalWaveSeparator />

        <section id="portfolio" className="py-8 md:py-10">
          <SectionTitle>Showcase of Innovation: Live Projects</SectionTitle>
          
          <GlassCard className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-10 md:p-16 max-w-5xl mx-auto mb-12">
            <img
              src={IMAGES.SLANGBOT_MASCOT_PLACEHOLDER}
              alt="SlangBot Mascot"
              className="w-48 md:w-72 rounded-full object-cover border-4 border-orange-dark shadow-[0_0_50px_#d97706] drop-shadow-orange-strong flex-shrink-0"
            />
            <div className="text-left pointer-events-auto max-w-lg">
              <h3 className="font-orbitron text-xl md:text-3xl text-orange-dark mb-2.5 text-shadow-orange-subheading">
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
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-orange-dark/10 border-2 border-orange-dark rounded-full text-orange-dark font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:bg-orange-dark hover:text-black hover:shadow-[0_0_40px_#d97706] text-sm sm:text-base"
                >
                  View Live Demo →
                </a>
                <a
                  href="https://github.com/mikedsayre/slangbot-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-cyan-400/10 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_#00f0f0] text-sm sm:text-base"
                >
                  View GitHub Repo →
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20 p-10 md:p-16 max-w-5xl mx-auto mb-12">
            <img
              src={IMAGES.RESUME_STUDIO_LOGO}
              alt="Resume Studio Logo"
              className="w-48 md:w-72 rounded-lg object-cover border-4 border-orange-dark shadow-[0_0_50px_#d97706] drop-shadow-orange-strong flex-shrink-0"
            />
            <div className="text-left pointer-events-auto max-w-lg">
              <h3 className="font-orbitron text-xl md:text-3xl text-orange-dark mb-2.5 text-shadow-orange-subheading">
                Resume Studio: Dynamic Markdown Resume Builder
              </h3>
              <p className="text-base md:text-lg mb-5 text-shadow">
                Resume Studio is a professional and futuristic markdown resume editor that empowers modern job seekers to craft stunning resumes with ease. It supports Markdown input with raw HTML embedding, real-time previews, dynamic futuristic themes, integrated CSS editing, and one-click exports to PDF, MD, or HTML. With responsive design, light/dark modes, and HTML sanitization for security, it solves the challenge of creating visually appealing, customized resumes quickly without needing advanced design or coding skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://resume-studio-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-orange-dark/10 border-2 border-orange-dark rounded-full text-orange-dark font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(255,111,0,0.3)] hover:bg-orange-dark hover:text-black hover:shadow-[0_0_40px_#d97706] text-sm sm:text-base"
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

          <GlassCard className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-10 md:p-16 max-w-5xl mx-auto">
            <img
              src={IMAGES.JOB_PROFILE_LAB_LOGO}
              alt="Job Profile Lab Logo"
              className="w-48 md:w-72 rounded-lg object-cover border-4 border-orange-dark shadow-[0_0_50px_#d97706] drop-shadow-orange-strong flex-shrink-0"
            />
            <div className="text-left pointer-events-auto max-w-lg">
              <h3 className="font-orbitron text-xl md:text-3xl text-orange-dark mb-2.5 text-shadow-orange-subheading">
                Job Profile Lab: The Science of Getting Hired
              </h3>
              <p className="text-base md:text-lg mb-5 text-shadow">
                Job Profile Lab transforms your resume into an SEO-optimized LinkedIn profile using AI. It parses your resume, identifies roles, and rewrites content with industry keywords and high-value terms to boost visibility. Features include headline options, About section with specialties, enhanced experience descriptions, curated skills, staging interface for easy updates, one-click copy, and downloadable Markdown plan. Built with React, TypeScript, Tailwind, and Google Gemini API, it acts as a career coach, solving poor recruiter visibility and time-consuming profile updates.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://job-profile-lab.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-orange-dark/10 border-2 border-orange-dark rounded-full text-orange-dark font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(255,111,0,0.3)] hover:bg-orange-dark hover:text-black hover:shadow-[0_0_40px_#d97706] text-sm sm:text-base"
                >
                  View Live Demo →
                </a>
                <a
                  href="https://github.com/mikedsayre/job-profile-lab"
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
              <h3 className="font-orbitron text-xl md:text-2xl text-orange-dark mb-2.5 text-shadow-orange-subheading text-center">
                AI Strategy & Rapid Prototyping
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Architected and deployed custom AI-powered applications on Google Cloud Platform (Vertex AI, Google AI Studio, Gemini) and OpenAI API.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Built functional prototypes in Python/Visual Studio, rapidly demonstrating advanced API capabilities and market viability to stakeholders.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Spearheaded generative media production, orchestrating advanced workflows across Leonardo.ai, Ideogram, Veo, and Midjourney for high-fidelity commercial assets.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Leveraged prompt engineering (Chain-of-Thought, Few-Shot) to maximize LLM performance (Gemini Pro/Ultra, Grok, ChatGPT) in diverse applications.</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-orange-dark mb-2.5 text-shadow-orange-subheading text-center">
                Digital Transformation & Workflow Automation
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Solved complex workflow bottlenecks by developing Python scripts that automate data retrieval, content generation, and system integrations, bridging manual operations with automated scale.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Centralized fragmented digital infrastructures, consolidating multiple disparate systems (CRM, Inventory, Website) into unified tech stacks, reducing vendor waste and enabling robust, group-wide data analysis.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Mastered API management and Firebase Hosting for scalable and secure application deployment.</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-orange-dark mb-2.5 text-shadow-orange-subheading text-center">
                E-Commerce & Revenue Acceleration
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Led e-commerce platform migrations and optimizations, resulting in significant revenue increases through improved user experiences and data-driven strategies.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Directed Shopify Plus implementations with custom apps, headless commerce, and ERP/CRM integrations for multi-million dollar operations.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Optimized omnichannel retail strategies, blending online and physical store experiences to boost customer loyalty and sales.</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="font-orbitron text-xl md:text-2xl text-orange-dark mb-2.5 text-shadow-orange-subheading text-center">
                Technical Leadership & Sales Enablement
              </h3>
              <ul className="mt-5 list-none">
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Acted as technical liaison in high-stakes sales processes, translating complex AI/ML capabilities into compelling business value propositions.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Identified and implemented cost-saving opportunities, such as migrating from legacy systems to cloud-native solutions, yielding 30-50% efficiency gains.</span>
                </li>
                <li className="flex items-start mb-4 leading-relaxed text-shadow text-left">
                  <i className="fa-solid fa-circle text-orange-dark text-xs mt-1 mr-3 flex-shrink-0"></i>
                  <span>Advised on technology stack selections, ensuring alignment with long-term business objectives and scalability requirements.</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </section>

        <HorizontalWaveSeparator />

        <section id="toolkit" className="py-8 md:py-10">
          <SectionTitle>My Technical & Strategic Toolkit</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-center">
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-orbitron text-xl md:text-2xl text-cyan-300 mb-4 text-shadow-cyan-subheading text-center">
                Core Technologies
              </h3>
              <ul className="list-none space-y-3">
                <SkillListItem icon="fa-brands fa-python">Python (Advanced Scripting & Automation)</SkillListItem>
                <SkillListItem icon="fa-brands fa-react">React/TypeScript (Frontend Development)</SkillListItem>
                <SkillListItem icon="fa-brands fa-node-js">Node.js/Express (Backend Services)</SkillListItem>
                <SkillListItem icon="fa-solid fa-database">SQL/NoSQL Databases (PostgreSQL, MongoDB)</SkillListItem>
              </ul>
            </GlassCard>
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-orbitron text-xl md:text-2xl text-cyan-300 mb-4 text-shadow-cyan-subheading text-center">
                AI & Machine Learning
              </h3>
              <ul className="list-none space-y-3">
                <SkillListItem icon="fa-solid fa-brain">Google Vertex AI / Gemini API</SkillListItem>
                <SkillListItem icon="fa-brands fa-openai">OpenAI GPT Models</SkillListItem>
                <SkillListItem icon="fa-solid fa-robot">Prompt Engineering & Chain-of-Thought</SkillListItem>
                <SkillListItem icon="fa-solid fa-image">Generative AI (Midjourney, Leonardo.ai)</SkillListItem>
              </ul>
            </GlassCard>
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-orbitron text-xl md:text-2xl text-cyan-300 mb-4 text-shadow-cyan-subheading text-center">
                Cloud & DevOps
              </h3>
              <ul className="list-none space-y-3">
                <SkillListItem icon="fa-brands fa-google">Google Cloud Platform (GCP)</SkillListItem>
                <SkillListItem icon="fa-brands fa-aws">AWS (EC2, S3, Lambda)</SkillListItem>
                <SkillListItem icon="fa-solid fa-fire">Firebase (Hosting & Authentication)</SkillListItem>
                <SkillListItem icon="fa-brands fa-docker">Docker & Containerization</SkillListItem>
              </ul>
            </GlassCard>
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-orbitron text-xl md:text-2xl text-cyan-300 mb-4 text-shadow-cyan-subheading text-center">
                MarTech & E-Commerce
              </h3>
              <ul className="list-none space-y-3">
                <SkillListItem icon="fa-brands fa-shopify">Shopify Plus (Custom Apps & Themes)</SkillListItem>
                <SkillListItem icon="fa-solid fa-chart-line">Google Analytics / Tag Manager</SkillListItem>
                <SkillListItem icon="fa-solid fa-envelope">Klaviyo / Email Marketing Automation</SkillListItem>
                <SkillListItem icon="fa-solid fa-shopping-cart">ERP/CRM Integrations (NetSuite, HubSpot)</SkillListItem>
              </ul>
            </GlassCard>
          </div>
        </section>

        <HorizontalWaveSeparator />

        {/* Moved Mike Sayre profile section */}
        <section id="profile" className="py-8 md:py-10">
          <SectionTitle>Mike Sayre: Senior MarTech & AI Strategist</SectionTitle>
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-12 mb-7 flex-wrap">
              <img
                src={IMAGES.PROFILE_HEADSHOT}
                alt="Mike Sayre Headshot"
                className="w-32 h-32 md:w-52 md:h-52 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_50px_#00f0f0] flex-shrink-0 order-1 md:order-2 min-w-32 min-h-32 mb-5 md:mb-0"
              />
              <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl m-0 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-[length:200%] bg-clip-text text-transparent animate-gradientFlow drop-shadow-cyan-strong order-2 md:order-1 whitespace-normal mb-5 md:mb-0 leading-[1.3] lg:leading-[1.5] pb-2 lg:pb-6">
                Mike Sayre
              </h1>
            </div>
            <div className="mt-4 bg-glass px-6 py-4 rounded-lg border border-cyan-800/30 self-start max-w-4xl w-full">
              <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl text-cyan-300 drop-shadow-cyan-heading mb-2">
                Senior MarTech & AI Strategist
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-90 text-shadow-cyan-medium">
                <strong>Bridging Vision with Velocity:</strong> Dynamic MarTech leader and AI strategist with over 20 years of experience bridging traditional digital marketing/eCommerce with emerging AI technologies. Proven in translating business goals into scalable AI-driven solutions—automating workflows, optimizing operations, and driving revenue growth. Expert in rapid prototyping, generative AI for content/media, and MarTech stack integration. Acts as a "technical bridge" for stakeholders, delivering cost-effective, high-impact transformations in remote/hybrid environments.
              </p>
            </div>
          </div>
        </section>

        <HorizontalWaveSeparator />

        {/* Moved About section */}
        <section id="about" className="py-8 md:py-10">
          <SectionTitle>The 'Tech Bridge' Philosophy: Connecting Vision to Reality</SectionTitle>
          <GlassCard className="flex flex-col items-center justify-center gap-10 md:gap-16 p-10 md:p-16">
            <img src={IMAGES.SWAN_LAKE_MASCOT_512} alt="Swan Lake Digital Logo" className="w-40 md:w-52 drop-shadow-cyan-strong" />
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

        <section id="contact" className="py-8 md:py-10">
          <SectionTitle>Connect for Strategic Impact</SectionTitle>
          <GlassCard className="p-10 md:p-16 text-center">
            <p className="text-base md:text-lg mb-6 text-shadow">
              Ready to bridge your business vision with cutting-edge technical execution? Let's discuss how my expertise in AI strategy, rapid prototyping, and digital transformation can drive your next success.
            </p>
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <a
                href="tel:+15136466767"
                className="text-cyan-300 hover:text-cyan-100 transition-colors text-base md:text-lg"
              >
                Phone: 513-646-6767
              </a>
              <a
                href="https://www.linkedin.com/in/mikedsayre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors text-base md:text-lg"
              >
                LinkedIn: linkedin.com/in/mikedsayre
              </a>
              <a
                href="https://github.com/mikedsayre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors text-base md:text-lg"
              >
                GitHub: github.com/mikedsayre
              </a>
              <a
                href="https://calendar.app.google/wZxkgTkq6UmM99eB8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-6 sm:py-3 sm:px-8 bg-cyan-400/10 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold no-underline transition-all duration-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_#00f0f0] text-sm sm:text-base mt-4"
              >
                Schedule a consultation: Book here →
              </a>
            </div>
          </GlassCard>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default App;
