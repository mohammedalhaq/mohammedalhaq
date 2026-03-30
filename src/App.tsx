import "./App.css";
import Skills from "./Skills";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import type { Category } from "./types";

const LinkedInIcon = () => (
  <svg height="14px" width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 382" fill="currentColor">
    <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
  </svg>
);

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Featured Work", href: "#featured-work" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

const skillGroups: { label: string; category: Category; skills: string[] }[] = [
  { label: "Frontend", category: "frontend", skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Node.JS", "CSS", "SASS"] },
  { label: "Language", category: "language", skills: ["TypeScript", "JavaScript", "Ruby", "Python", "C#"] },
  { label: "Backend", category: "backend", skills: ["Ruby on Rails", "GraphQL", "Node.js", "Express.js", "REST API"] },
  { label: "Database", category: "database", skills: ["PostgreSQL", "AWS S3", "Oracle"] },
  { label: "Testing", category: "testing", skills: ["Playwright", "RSpec", "Jest", "Mirage.js"] },
  { label: "Other", category: "other", skills: ["OpenAI API", "Anthropic API", "Accessibility"] },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-5 h-px bg-blue-400/50 shrink-0" />
      <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-blue-400/70">
        {children}
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="lg:flex max-w-[1160px] mx-auto">
      {/* ── Sidebar ── */}
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[290px] shrink-0 flex flex-col px-6 pt-14 lg:pt-16 pb-10 lg:pb-14 lg:overflow-y-auto">
        <div className="flex flex-col gap-7 flex-1">
          {/* Identity */}
          <div>
            <h1 className="text-[23px] font-bold text-white leading-tight tracking-tight">
              Mohammed Alhaq
            </h1>
            <p className="text-blue-400 text-[15px] font-medium mt-1">Software Engineer</p>
            <p className="text-white/35 text-[15px]">Toronto, ON</p>
          </div>

          {/* Bio */}
          <p className="text-white/70 text-[15px] leading-relaxed">
            I'm a Toronto based software engineer with 4.5+ years of building responsive
            applications using React, TypeScript, and Ruby on Rails. Solving interesting
            problems from building AI tooling to help automate workflows, to optimizing
            high-traffic APIs for financial platforms.
          </p>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-col mt-1">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 py-2 !text-white/35 hover:!text-white !no-underline transition-colors duration-150"
              >
                <span className="h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social links */}
        <div className="flex gap-2 mt-8 lg:mt-0 flex-wrap">
          <a href="https://www.linkedin.com/in/mohammedalhaq/" className="!text-white/60 hover:!text-white/90 !no-underline">
            <button className="flex items-center gap-1.5">
              <LinkedInIcon />
              LinkedIn
            </button>
          </a>
          <a href="https://github.com/mohammedalhaq" className="!text-white/60 hover:!text-white/90 !no-underline">
            <button className="flex items-center gap-1.5">
              <GitHubIcon />
              GitHub
            </button>
          </a>
          <button>Contact</button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 min-w-0 px-6 pt-14 lg:pt-16 pb-24 flex flex-col gap-16">

        {/* Experience */}
        <section id="experience">
          <SectionHeading>Experience</SectionHeading>
          <Experience
            company="Isle of Code"
            link="https://isleofcode.com/"
            position="Software Engineer"
            startDate={new Date(2022, 5, 13)}
            endDate={new Date(2025, 3, 1)}
            location="Toronto, Ontario · Remote"
            logo="https://aisle.sh/img/new-logo.png"
          >
            <ul className="text-left flex flex-col gap-2 text-white/75">
              <li>
                Created <a href="https://aisle.sh/">aisle.sh</a>, an AI powered B2B SaaS
                using React, Phoenix, and PostgreSQL to democratize ML pipeline creation,
                featuring visual node-based builders, and contextual LLM chat with OpenAI/Anthropic integration
              </li>
              <li>
                Constructed sophisticated data tables for{" "}
                <a href="https://addepar.com/wealth-management">
                  Addepar's portfolio management platform
                </a>{" "}
                with advanced pagination and filtering, allowing 100+ financial
                advisors to efficiently align multimillion-dollar portfolios to targets
              </li>
              <li>
                Leveraged Next.js server-side rendering and TypeScript to create a
                high-performance portfolio rebalancing tool with advanced visualization
                capabilities, reducing analysis time and improving decision-making for
                financial advisors
              </li>
              <li>
                Engineered an advanced search functionality for{" "}
                <a href="https://data.nasdaq.com/">Nasdaq's DataLink platform</a>,
                implementing predictive text, filters, and relevance scoring to reduce
                average search time from minutes to seconds for data analysts
              </li>
              <li>
                Optimized Ruby on Rails API through Redis response caching for
                high-traffic endpoints cutting database load by 25%
              </li>
              <li>
                Engineered the frontend of a comprehensive{" "}
                <a href="https://www.datajoint.com/">
                  scientific workflow platform (DataJoint)
                </a>{" "}
                using React Flow with custom edges/nodes, layered visualization, and
                interactive data tables, cutting data processing time by 80–90% for
                research teams
              </li>
              <li>
                Built an automated testing pipeline with Playwright, Jest, RSpec in
                GitHub Actions, preventing 40+ production bugs
              </li>
              <li>
                Reduced front-end load times by 25% through API caching and React
                memoization, improving user retention by 15%
              </li>
              <li>
                Boosted development efficiency by over 50% through strategically
                leveraging LLM tools such as Cursor and Copilot for comprehensive code
                generation, intelligent debugging, and reducing boilerplate tasks
              </li>
            </ul>
          </Experience>

          <Experience
            company="Scotiabank"
            link="https://www.scotiabank.com/global/en/global-site.html"
            position="Frontend Developer"
            startDate={new Date(2021, 5, 1)}
            endDate={new Date(2022, 6, 1)}
            logo="https://cdn.brandfetch.io/idpIpGPfn2/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668074697674"
            location="Toronto, Ontario · Remote"
          >
            <ul className="text-left flex flex-col gap-2 text-white/75">
              <li>
                Rebuilt the user interface of a high-traffic customer onboarding and
                servicing platform using TypeScript React, and SASS improving system
                reliability and reducing response times by over 30%
              </li>
              <li>
                Implemented comprehensive WCAG 2.2 accessibility compliance including
                keyboard navigation, screen reader optimization, and inclusive design
                patterns serving customers with disabilities
              </li>
              <li>
                Prioritized a unified, responsive, bilingual interface supporting both
                English and French banking workflows with consistent cross-device styling
                and user experience
              </li>
              <li>
                Led technical demonstrations to external QA teams and drove agile process
                improvements, accelerating testing cycles and boosting team delivery
                efficiency by 25%
              </li>
            </ul>
          </Experience>

          <Experience
            company="BGIS"
            link="https://www.bgis.com/"
            position="Fullstack Developer Intern"
            startDate={new Date(2019, 4, 1)}
            logo="https://cdn.brandfetch.io/idkLZ4PKzz/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751942826058"
            endDate={new Date(2019, 11, 1)}
            location="Markham, Ontario · On-Site"
          >
            <ul className="text-left flex flex-col gap-2 text-white/75">
              <li>
                Worked with cross-functional teams in an Agile environment to create a
                facility management platform in .NET
              </li>
              <li>
                Migrated a legacy ASP Classic project to Angular 8, modernizing the
                application and improving maintainability
              </li>
            </ul>
          </Experience>
        </section>

        {/* Featured Work */}
        <section id="featured-work">
          <SectionHeading>Featured Work</SectionHeading>
          <Portfolio />
        </section>

        {/* Education */}
        <section id="education">
          <SectionHeading>Education</SectionHeading>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shrink-0">
              <img
                src="https://cdn.brandfetch.io/idO4kMl-Ux/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1749652021642"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="flex flex-col text-left gap-0.5">
              <a
                href="https://ontariotechu.ca/"
                className="!text-white/90 font-semibold text-[17px]"
              >
                University of Ontario Institute of Technology
              </a>
              <span className="text-white/50 text-[15px]">
                Honours: Bachelors of Science (BSc) in{" "}
                <span className="text-white/80">Computer Science Co-op</span>
              </span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-col gap-4">
            {skillGroups.map(({ label, category, skills }) => (
              <div key={category} className="flex gap-4 items-baseline">
                <span className="text-xs text-white/30 uppercase tracking-wide w-16 shrink-0 pt-0.5 leading-5">
                  {label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <Skills key={skill} name={skill} category={category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="border-t border-white/[0.07] pt-10">
          <SectionHeading>Let's Connect</SectionHeading>
          <div className="flex gap-2.5 flex-wrap">
            <a
              href="https://www.linkedin.com/in/mohammedalhaq/"
              className="!text-white/60 hover:!text-white/90 !no-underline"
            >
              <button className="flex items-center gap-1.5">
                <LinkedInIcon />
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/mohammedalhaq"
              className="!text-white/60 hover:!text-white/90 !no-underline"
            >
              <button className="flex items-center gap-1.5">
                <GitHubIcon />
                GitHub
              </button>
            </a>
            <button>Contact</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
