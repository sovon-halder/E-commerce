export default function Home() {
  return (

<div>

    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-gray-300">
        <h1 className="text-4xl font-bold leading-snug">
          Creative designer with experience in the <span className="text-blue-500">digital</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          I’m a multidisciplinary product designer with 6+ years of experience.
          I focus on creating user-centered digital solutions that combine aesthetics and functionality.
        </p>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded">See My Work</button>
      </section>

      {/* Work Experience */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-xl font-semibold mb-10">Work Experience.</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Insurance Company, Lead UX Designer</h3>
            <p className="text-sm text-gray-600">2019 - Present • Jakarta, Indonesia</p>
            <p className="text-gray-700 mt-2">Redesigned mobile and web applications for user onboarding and claims.</p>
          </div>
          <div>
            <h3 className="font-bold">Blackberry Messenger, Lead UX Designer</h3>
            <p className="text-sm text-gray-600">2017 - 2019 • Jakarta, Indonesia</p>
            <p className="text-gray-700 mt-2">Led UX improvements and redesigned user flows for better retention.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-gray-300">
        <h2 className="text-xl font-semibold mb-10">
          What I've <span className="text-blue-500">been working</span> on so far.
        </h2>

        {/* Project 1 */}
        <div className="mb-16 bg-gray-200">
          <h3 className="font-bold text-lg">Pranata Design System.</h3>
          <p className="text-gray-700 mt-2">A scalable UI system for design consistency across platforms.</p>
        </div>

        {/* Project 2 */}
        <div className="mb-16 bg-gray-200">
          <h3 className="font-bold text-lg">Dahu AI Android Auto.</h3>
          <p className="text-gray-700 mt-2">Voice-enabled car assistant experience for smart navigation and control.</p>
        </div>

        {/* Project 3 */}
        <div className="mb-16 bg-gray-200">
          <h3 className="font-bold text-lg">Insurance Mobile App.</h3>
          <p className="text-gray-700 mt-2">Mobile platform for claim submissions and tracking with a simple UI.</p>
        </div>

        {/* Project 4 */}
        <div className="mb-16 bg-gray-200">
          <h3 className="font-bold text-lg">Dunia Travel Website.</h3>
          <p className="text-gray-700 mt-2">Comprehensive online booking website with modern travel UX.</p>
        </div>

        {/* Project 5 */}
        <div>
          <h3 className="font-bold text-lg bg-gray-200">SweetEscape Mobile App.</h3>
          <p className="text-gray-700 mt-2">Photography booking app that allows users to book and manage sessions easily.</p>
        </div>
      </section>

      {/* Logos */}
      <section className="px-6 py-10 border-t bg-gray-50">
        <h3 className="text-center font-semibold text-lg mb-4">Previously Worked With.</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <span>Heineken</span>
          <span>Samsung</span>
          <span>Mandiri</span>
          <span>Dunia Travel</span>
          <span>SweetEscape</span>
          <span>Riponism</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center border-t bg-gray-200">
        <h4 className="text-xl font-semibold mb-2">Let's work <span className="text-blue-500">together</span>.</h4>
        <p className="text-xs text-gray-500 mt-6">© 2025 Andaru • Jakarta, Indonesia</p>
      </footer>
    </div>


</div>

  );
}
