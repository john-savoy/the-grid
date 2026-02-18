import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Section Header */}
        <div className="space-y-6">
          <h2 className="font-display text-5xl text-cyan tracking-wider">
            ━ INITIATE CONTACT ━
          </h2>
          <p className="font-body text-ice text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to build something together? Whether you're looking for a 
            full-stack developer or need a creative problem solver for your project.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Freelance Card */}
          <Link href="/contact">
            <div className="group border-2 border-cyan bg-void/60 backdrop-blur-sm p-8 hover:bg-cyan/10 hover:shadow-glow-cyan-lg transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <div className="font-display text-cyan text-2xl tracking-wider">
                  FREELANCE INQUIRY
                </div>
                <div className="h-[2px] w-full bg-cyan" />
                <p className="font-body text-ice-light text-sm leading-relaxed">
                  Have a project in mind? Let's discuss how I can help bring your 
                  vision to life.
                </p>
                <div className="font-code text-cyan text-xs pt-4 group-hover:translate-x-2 transition-transform duration-300">
                  &gt; START PROJECT_
                </div>
              </div>
            </div>
          </Link>

          {/* Employment Card */}
          <Link href="/contact">
            <div className="group border-2 border-energy bg-void/60 backdrop-blur-sm p-8 hover:bg-energy/10 hover:shadow-glow-orange-lg transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <div className="font-display text-energy text-2xl tracking-wider">
                  EMPLOYMENT INQUIRY
                </div>
                <div className="h-[2px] w-full bg-energy" />
                <p className="font-body text-ice-light text-sm leading-relaxed">
                  Looking to add a creative developer to your team? Let's explore 
                  opportunities.
                </p>
                <div className="font-code text-energy text-xs pt-4 group-hover:translate-x-2 transition-transform duration-300">
                  &gt; VIEW OPPORTUNITIES_
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Contact Methods */}
        <div className="pt-8 space-y-4">
          <p className="font-display text-ice-dark text-sm tracking-wider">
            OR CONNECT VIA
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-code text-cyan text-sm hover:text-cyan-light hover:shadow-glow-cyan-sm transition-all duration-300">
              &gt; GITHUB
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-code text-cyan text-sm hover:text-cyan-light hover:shadow-glow-cyan-sm transition-all duration-300">
              &gt; LINKEDIN
            </a>
            <a
              href="mailto:your.email@example.com"
              className="font-code text-cyan text-sm hover:text-cyan-light hover:shadow-glow-cyan-sm transition-all duration-300">
              &gt; EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}