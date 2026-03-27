import type {Category } from "../types"

export default function Skills({ name, category }: { name: string, category: Category }) {
  const categoryText: Record<string, string> = {
    frontend: '#7eb8d4',
    backend:  '#7ec8a0',
    language: '#b39ddb',
    database: '#e8a0a0',
    testing:  '#d4b896',
    other:    '#999999',
  }

  return (
    <div
      className="bg-[#1a1a1a] border border-[#2a2a2a] py-0.5 px-2.5 rounded max-w-fit text-sm"
      style={{ color: categoryText[category] }}
    >
      {name}
    </div>
  )
}