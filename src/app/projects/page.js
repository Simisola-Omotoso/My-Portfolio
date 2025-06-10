import Image from 'next/image'

export default function Potes() {
  return (
    <main className="min-h-screen bg-black font-serif text-purple-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white-800">
          Potes - Purple Notes
        </h1>
        <p className="text-xl text-center mt-4">
          Purple-Themed Notetaking Browser Application
        </p>
        <p className="text-center text-xl">Duration: One Month (March 2025)</p>
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Overview</h2>
        <h3 className="text-2xl">Technologies</h3>
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Superflex</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center">Visuals</h2>
        <div className="flex justify-center">
          <img
            src="/potes-screenshot.png"
            alt="Potes Screenshot"
            width={500}
            height={300}
        />
        </div>
      </div>
    </main>
  )
}