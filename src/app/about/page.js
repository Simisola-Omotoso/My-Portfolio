export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white-800">
          About Me
        </h1>
        <p className="text-xl text-center text-white-600 mt-4">
          Software developer student seeking full stack developer internships
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap 12">
        <div>
          <div className="space-y-4 text-white-600">
            <p>
              I'm a computer science student who discovered a passion for web 
              development through my time at 100 Girls of Code when I was in 
              middle school. What started as curiosity grew into enthusiasm for 
              creating digital solutions to improve user experiences.
            </p>
            <p>
              Currently, I'm focused on mastering React and Next.js while building 
              projects that demonstrate my skills. I love the problem-solving aspect 
              of coding and the satisfaction of turning ideas into functional and beautiful 
              websites.
            </p>
            <p>
              I'm actively seeking opportunities to contribute to a team where I can 
              continue learning while adding value through my perspective and dedication 
              to quality work.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white-800 mb-6">Skills & Technology</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">HTML/CSS</span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">VS Code</span>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-white-800 mb-6">Beyond Coding</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-medium text-white-700 mb-3">Personal</h3>
            <p className="text-white-600 text-sm">
              Hobbies - video games, calligraphy, journaling, writing
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white-700 mb-3">Motivations</h3>
            <p className="text-white-600 text-sm">
              What drives me - storytelling, education, creativity
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white-700 mb-3">Fun Fact</h3>
            <p className="text-white-600 text-sm">
              I self-published three books at 13 years old.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}