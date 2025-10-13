//import Link from "next/link";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <main className="min-h-screen text-foam px-6 py-16 font-sans">
      <section className="max-w-4xl mx-auto space-y-16">

        {/* Intro */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl text-foam font-serif font-bold text-foam drop-shadow-lg">
            Hi, I&rsquo;m Klara 🌊
          </h1>
          <p className="text-xl sm:text-2xl max-w-xl mx-auto text-foam/90">
            Welcome to my portfolio — a blend of code, curiosity, and deep-sea dreams.
          </p>
          <p className="text-lg max-w-2xl mx-auto text-foam/80 leading-relaxed">
            I bring <span className="text-biolume font-semibold">deep expertise in mathematics, physics, and environmental science</span> together with <span className="text-jellyskin font-semibold">programming and sustainability skills</span> to understand and solve complex natural systems.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="bg-white/5 border border-kelp rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-serif text-biolume text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📐</div>
              <h3 className="font-semibold text-glow mb-1">Mathematics</h3>
              <p className="text-sm text-foam/70">Topology, configuration spaces, fundamental groups</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌊</div>
              <h3 className="font-semibold text-glow mb-1">Physics</h3>
              <p className="text-sm text-foam/70">Fluid dynamics, oceanography, wave-ice interactions</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="font-semibold text-glow mb-1">Environmental Science</h3>
              <p className="text-sm text-foam/70">Arctic ecosystems, glacial melt, fjord dynamics</p>
            </div>
          </div>
        </div>

        {/* Applied Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif text-jellyskin text-center">Applied Skills</h2>
          <p className="text-center text-foam/80 max-w-2xl mx-auto">
            I apply my deep scientific knowledge through programming, data analysis, and sustainability-focused projects
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card title="🛠 Programming Projects" href="/projects" />
          <Card title="🔬 Research" href="/research" />
          <Card title="💫 Art" href="/art" />
          <Card title="👩‍💻 About Me" href="/about" />
        </div>
      </section>
    </main>
  );
}


