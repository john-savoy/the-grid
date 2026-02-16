export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Test Display Font */}
        <h1 className="font-display text-6xl text-cyan">
          JOHN SAVOY
        </h1>

        {/* Test Body Font */}
        <p className="font-body text-2xl text-ice">
          Full-Stack Developer
        </p>

        {/*Test Glow Effect*/}
        <div className="inline-block px-8 py-4 border-2 border-cyan shadow-glow-cyan-md">
          <span className="font-display text-cyan">CREATIVE PROBLEM SOLVER</span>
        </div>

        {/* Test Energy Color*/}
        <p className="font-body text-energy text-xl">
          Finding solutions where others see roadblocks
        </p>

        {/*Test Animation*/}
        <div className="inline-block px-6 py-3 border border-cyan animate-pulse-glow">
          <span className="font-code text-ice-light text-sm">&gt; SYSTEM READY_</span>
        </div>
      </div>
    </main>
  );
}
