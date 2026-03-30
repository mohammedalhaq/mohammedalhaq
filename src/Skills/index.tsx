import type { Category } from "../types";

const categoryColor: Record<Category, string> = {
  frontend: "#7eb8d4",
  backend:  "#7ec8a0",
  language: "#b39ddb",
  database: "#e8a0a0",
  testing:  "#d4b896",
  ai:       "#a8d5b5",
  other:    "#888888",
};

export default function Skills({ name, category }: { name: string; category: Category }) {
  return (
    <div
      className="bg-white/[0.04] border border-white/[0.07] py-0.5 px-2.5 rounded-md max-w-fit text-[13px] font-medium"
      style={{ color: categoryColor[category] }}
    >
      {name}
    </div>
  );
}
