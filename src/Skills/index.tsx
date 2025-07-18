import type {Category } from "../types"

export default function Skills({ name, category }: { name: string, category: Category }) {
  const categoryClasses = {
    frontend: 'bg-blue-500',
    backend: 'bg-green-600',
    database: 'bg-red-500',
    language: 'bg-[#2d9da7]',
    testing: 'bg-[#7a2246]',
    other: 'bg-[#6d6858]'
  }

  return (
    <div className={`${categoryClasses[category]} py-1 px-1.5 grow rounded-md max-w-fit`}>
      <span className="text-white">{name}</span>
    </div>
  )
}