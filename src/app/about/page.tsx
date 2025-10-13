export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-foam space-y-10">
      <h1 className="text-4xl font-serif text-biolume mb-4">About Me</h1>

      <p className="text-lg leading-relaxed">
        I&rsquo;m Klara — a researcher and developer with a T-shaped profile: deep expertise in mathematics, physics, and environmental science, combined with broad skills in programming and sustainability.
      </p>

      {/* Deep Expertise Section */}
      <div className="bg-white/5 border border-kelp rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-serif text-biolume">Deep Expertise</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-glow mb-1">📐 Mathematics & Physics</h3>
            <p className="text-sm leading-relaxed text-foam/90">
              My foundation is in rigorous mathematical and physical thinking. I completed my bachelor thesis on proving that the fundamental group of the configuration space of two identical particles is the braid group — exploring topology and abstract algebra.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-glow mb-1">🌊 Environmental Science & Oceanography</h3>
            <p className="text-sm leading-relaxed text-foam/90">
              Currently studying environmental science with focus on physical oceanography and Arctic ecosystems. My research explores glacial melt effects on fjord dynamics, wave-ice interactions, stratification, and primary production in changing polar environments.
            </p>
          </div>
        </div>
      </div>

      {/* Broad Skills Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-serif text-jellyskin">Applied & Cross-Cutting Skills</h2>
        <p className="leading-relaxed">
          I apply my scientific expertise through programming, data visualization, and systems thinking. My work bridges theory and practice — whether building monitoring dashboards, analyzing field data from Svalbard, developing language learning tools, or creating visual narratives that make complex systems accessible.
        </p>
        <p className="leading-relaxed text-foam/80">
          <strong>Technical skills:</strong> Python, Go, JavaScript/TypeScript, Next.js, data analysis, experimental design, PIV (Particle Image Velocimetry), field research methods
        </p>
      </div>

      <p className="leading-relaxed">
        What connects everything is curiosity about how things work — in nature, in people, and in code.
        I enjoy making things that help others see and understand systems more clearly, whether that&rsquo;s a QA dashboard,
        a field research report, or a line of poetry.
      </p>

      <p className="leading-relaxed text-foam/80">
        Right now, I&rsquo;m learning more about frontend frameworks, building a vocabulary app, and exploring
        Arctic fjord ecosystems through glacial meltwater and algae studies.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/projects"
          className="px-4 py-2 rounded-full bg-biolume text-abyss font-semibold hover:bg-jellyskin transition"
        >
          See my projects
        </a>
        <a
          href="/research"
          className="px-4 py-2 rounded-full border border-glow text-glow hover:bg-glow/10 transition"
        >
          Explore my research
        </a>
      </div>
    </main>
  );
}
