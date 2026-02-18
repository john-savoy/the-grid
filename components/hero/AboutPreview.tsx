import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl w-full">
                {/*Section Header*/}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl text-cyan tracking-wider mb-4">
                        ━ IDENTITY PROTOCOL ━
                    </h2>
                    <p className="font-body text-ice-light text-lg">
                        Multi-dimensional problem solver
                    </p>
                </div>
                
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Avatar Placeholder */}
                    <div className="flex justify-center">
                        <div className="w-80 h-80 border-2 border-cyan shadow-glow-cyan-md bg-void/40 backdrop-blur-sm flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="font-display text-cyan text-6xl">JS</div>
                                <div className="font-code text-ice-dark text-sm">
                                    [3D Avatar Placeholder]
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Bio text */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-display text-2xl text-cyan tracking-wider">
                                Hi, I'm John Savoy
                            </h3>
                            <p className="font-body text-ice leading-relaxed">
                                A full-stack developer who finds solutions where others see roadblocks.
                            </p>
                            <p className="font-body text-ice leading-relaxed">
                                I thrive on creative approaches and believe the best solutions come from viewing problems from every angle - frontend, backend, user experience, and infrastructure.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="border border-cyan/30 bg-void//60 p-4">
                                <div className="font-display text-energy text-sm">CURRENT</div>
                                <div className="font-body text-ice-light text-xs mt-1">
                                    Student at WGU    
                                </div>                            
                            </div>
                            <div className="border border-cyan/30 big-void/60 p-4">
                                <div className="font-dispplay text-energy text-sm">FOCUS</div>
                                <div className="font-body text-ice-light text-xs mt-1">
                                    Full-Stack Development
                                </div>
                            </div>
                        </div>

                        {/*CTA Button */}
                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="inline-block px-8 py-3 border-2 border-cyan bg-transparent text-cyan font-display text-sm tracking-wider hover:bg-cyan/10 hover:shadow-glow-cyan-md transition-all duration-300">
                                    VIEW FULL PROFILE
                            </Link>
                        </div>
                    </div>

                    {/* How I Approach Problems */}
                        <div className="mt-20 pt-20 border-t border-cyan/20">
                            <div className="text-center mb-12">
                                <h3 className="font-display text-3xl text-cyan tracking-wider mb-4">
                                ━ HOW I APPROACH PROBLEMS ━
                                </h3>
                                <p className="font-body text-ice-light">
                                Multi-dimensional thinking for complete solutions
                                </p>
                            </div>

                        {/* Three-Step Process */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Step 1 */}
                            <div className="border border-cyan/30 bg-void/40 p-6 hover:border-cyan hover:shadow-glow-cyan-sm transition-all duration-300">
                                <div className="text-center space-y-4">
                                    <div className="font-display text-5xl text-cyan">01</div>
                                    <h4 className="font-display text-xl text-energy tracking-wider">
                                    UNDERSTAND THE CHALLENGE
                                    </h4>
                                    <p className="font-body text-ice-light text-sm leading-relaxed">
                                    Look from every angle—user needs, technical constraints, business goals
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="border border-cyan/30 bg-void/40 p-6 hover:border-cyan hover:shadow-glow-cyan-sm transition-all duration-300">
                                <div className="text-center space-y-4">
                                    <div className="font-display text-5xl text-cyan">02</div>
                                    <h4 className="font-display text-xl text-energy tracking-wider">
                                    ARCHITECT THE SOLUTION
                                    </h4>
                                    <p className="font-body text-ice-light text-sm leading-relaxed">
                                    Full-stack perspective: Frontend, Backend, UX, and Infrastructure
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="border border-cyan/30 bg-void/40 p-6 hover:border-cyan hover:shadow-glow-cyan-sm transition-all duration-300">
                                <div className="text-center space-y-4">
                                    <div className="font-display text-5xl text-cyan">03</div>
                                    <h4 className="font-display text-xl text-energy tracking-wider">
                                    DELIVER RESULTS
                                    </h4>
                                    <p className="font-body text-ice-light text-sm leading-relaxed">
                                    Ship quality code that works and solves real problems
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    );
}