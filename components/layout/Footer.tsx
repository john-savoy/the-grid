import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan/20 bg-void/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Identity */}
          <div className="space-y-4">
            <div className="font-display text-cyan text-xl tracking-wider">
              JOHN SAVOY
            </div>
            <div className="font-body text-ice-light text-sm leading-relaxed">
              Full-stack developer finding creative solutions where others see roadblocks.
            </div>
            <div className="font-code text-ice-dark text-xs">
              &gt; Building from every angle_
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="font-display text-ice text-sm tracking-wider">
              NAVIGATION
            </div>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; Home
              </Link>
              <Link
                href="/projects"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; Projects
              </Link>
              <Link
                href="/about"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; About
              </Link>
              <Link
                href="/contact"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <div className="font-display text-ice text-sm tracking-wider">
              CONNECT
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="font-code text-ice-light text-sm hover:text-cyan transition-colors duration-300"
              >
                &gt; Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-code text-ice-dark text-xs">
            &copy; {currentYear} John Savoy. Built with Next.js, React Three Fiber, and creative energy.
          </div>
          <div className="font-code text-ice-dark text-xs">
            &gt; END OF LINE
          </div>
        </div>
      </div>
    </footer>
  );
}