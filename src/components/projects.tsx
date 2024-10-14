import { Card } from "./card"

export function Projects() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl text-red-500">Projects</h1>
            <Card />
      </div>
    </div>
  )
}