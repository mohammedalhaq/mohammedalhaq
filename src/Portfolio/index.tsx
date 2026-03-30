const projects = [
  {
    title: "AI Workflow Automation",
    description:
      "Visual node-based ML pipeline builder with a conversational AI interface. Features OpenAI/Anthropic integration and a real-time collaborative canvas.",
    tech: ["React", "Phoenix", "Ruby on Rails", "OpenAI", "Anthropic"],
    link: "https://aisle.sh/",
  },
  {
    title: "Scientific Workflow Platform",
    description:
      "React Flow-based platform with custom nodes, layered visualization, and interactive data tables — cutting processing time by 80–90% for research teams.",
    tech: ["React", "React Flow", "TypeScript", "PostgreSQL"],
    link: "https://www.datajoint.com/",
  },
  {
    title: "Nasdaq DataLink Search",
    description:
      "Advanced search with predictive text, smart filters, and relevance scoring — reducing average search time from minutes to seconds for analysts.",
    tech: ["React", "TypeScript", "Ruby on Rails"],
    link: "https://data.nasdaq.com/",
  },
  {
    title: "Portfolio Rebalancing Tool",
    description:
      "High-performance Next.js tool with advanced data tables and visualization, helping 100+ financial advisors align multimillion-dollar portfolios.",
    tech: ["Next.js", "TypeScript", "GraphQL"],
    link: "https://addepar.com/wealth-management",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl bg-[#0f0f12] border border-[#1c1c22] p-5 flex flex-col gap-3 hover:border-[#2a2a35] hover:bg-[#111116] transition-all duration-200 !text-white no-underline"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-white/90 text-[15px] text-left leading-snug">
                {project.title}
              </h3>
              <svg
                className="shrink-0 w-3.5 h-3.5 opacity-25 group-hover:opacity-60 transition-opacity mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
            <p className="text-[13px] text-white/65 text-left flex-1 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/[0.06] text-white/50 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/mohammedalhaq"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 py-3 rounded-xl border border-[#1c1c22] text-white/40 text-[13px] hover:text-white/70 hover:border-[#2a2a35] transition-all duration-200 no-underline"
      >
        View more work
        <svg
          className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
