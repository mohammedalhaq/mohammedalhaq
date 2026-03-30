import { useRef, useState } from "react";
import {
  useFloating,
  useInteractions,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
} from "@floating-ui/react";

export default function Experience({
  company,
  position,
  children,
  startDate,
  endDate,
  location,
  link,
  logo,
}: {
  company: string;
  position: string;
  children: any;
  startDate: Date;
  endDate: Date;
  location: string;
  link: string;
  logo?: string;
}) {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const contentHeight = useRef<HTMLDivElement>(null);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isTooltipOpen,
    onOpenChange: setIsTooltipOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });
  const hover = useHover(context, { move: false });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const handleToggle = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`mb-2.5 cursor-pointer select-none rounded-xl group border transition-all duration-200 ${isOpen
          ? "bg-[#111116] border-[#2a2a35]"
          : "bg-[#0f0f12] border-[#1c1c22] hover:border-[#28282f] hover:bg-[#111116]"
        }`}
      onClick={handleToggle}
      aria-expanded={isOpen}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleToggle(e as any);
      }}
    >
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            {logo ? (
              <img src={logo} className="h-8 w-8 object-contain" />
            ) : (
              <svg className="w-7 h-7" fill="#10923F" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" />
              </svg>
            )}
          </div>

          {/* Header content */}
          <div className="flex items-start justify-between w-full min-w-0">
            <div className="flex flex-col text-left">
              <h3 className="font-semibold text-white/90 text-[15px]">{position}</h3>
              <h4 className="text-white/55 text-[15px] mt-0.5">
                <a
                  href={link}
                  className="!text-white/55 hover:!text-white/80 transition-colors flex"
                >
                  {company}
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
                </a>
              </h4>
              <span className="text-white/35 text-[13px] mt-0.5">{location}</span>
            </div>
            <div className="flex items-center gap-2.5 shrink-0 ml-4">
              <span
                className="text-[13px] text-white/35 hidden sm:block"
                ref={refs.setReference}
                {...getReferenceProps()}
              >
                {monthNames[startDate.getMonth()]} {startDate.getFullYear()} —{" "}
                {monthNames[endDate.getMonth()]} {endDate.getFullYear()}
              </span>
              {isTooltipOpen && (
                <div
                  ref={refs.setFloating}
                  style={floatingStyles}
                  {...getFloatingProps()}
                />
              )}
              <svg
                className={`transition-transform duration-300 w-4 h-4 text-white/30 shrink-0 ${isOpen ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Accordion body */}
        <div
          ref={contentHeight}
          className="overflow-hidden transition-all duration-300"
          style={{
            height:
              isOpen && contentHeight.current
                ? `${contentHeight.current.scrollHeight}px`
                : "0px",
          }}
        >
          <div className="pt-4 pl-[60px] test-[15rem]">{children}</div>
        </div>
      </div>
    </div>
  );
}
