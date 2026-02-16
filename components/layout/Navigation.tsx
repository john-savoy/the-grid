"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/projects" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-xl border-b border-cyan/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="group">
            <div className="font-display text-cyan text-xl tracking-wider">
              JOHN SAVOY
              <div className="text-ice-dark text-xs tracking-widest">
                ▸ DEVELOPER
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    group inline-block
                    font-display text-sm tracking-wider
                    relative transition-all duration-300
                    ${isActive 
                      ? "text-cyan" 
                      : "text-ice-light hover:text-cyan"
                    }
                  `}
                >
                  {link.name}
                  
                  {/* Animated underline */}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px] bg-cyan
                      transition-all duration-300 shadow-glow-cyan-sm
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      group-hover:w-full
                    `}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}