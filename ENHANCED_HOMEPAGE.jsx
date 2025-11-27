const HomePage = ({ navigate }) => (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
        {/* Animated mesh gradient background */}
        <div className="fixed inset-0 mesh-gradient opacity-80 dark:opacity-40 pointer-events-none" />

        {/* Floating geometric shapes - Parallax effect */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        {/* Hero Section - Asymmetric Layout */}
        <Section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
            <FadeIn>
                <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Left: Main Content - 7 columns */}
                    <div className="md:col-span-7 space-y-8">
                        {/* Brutalist Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider border-3 border-blue-500 dark:border-blue-400 shadow-[4px_4px_0_0] shadow-blue-500 dark:shadow-blue-400">
                            <Zap className="w-3 h-3" />
                            Since 2013
                        </div>

                        {/* Massive Headline */}
                        <h1 className="text-6xl md:text-8xl font-bold leading-none">
                            <span className="block text-gray-900 dark:text-white">Blue</span>
                            <span className="block gradient-text">Panda</span>
                            <span className="block text-gray-900 dark:text-white mt-2">Hosting</span>
                        </h1>

                        {/* Tagline with colored keywords */}
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl font-medium">
                            Infrastructure that <span className="text-blue-600 dark:text-blue-400 font-bold">thinks</span>,
                            <span className="text-purple-600 dark:text-purple-400 font-bold"> adapts</span>, and
                            <span className="text-pink-600 dark:text-pink-400 font-bold"> anticipates</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => navigate('architect')}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-glow-purple"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    Try Q Panda AI
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>

                            <button
                                onClick={() => navigate('projects')}
                                className="px-8 py-4 bg-transparent border-3 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                            >
                                View Projects →
                            </button>
                        </div>
                    </div>

                    {/* Right: Glassmorphic Stats Card - 5 columns */}
                    <div className="md:col-span-5">
                        <div className="glass-dark p-8 rounded-3xl border-2 border-blue-500/30 backdrop-blur-xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                    <span className="text-white/60 font-mono text-sm uppercase tracking-wider">System Status</span>
                                    <span className="flex items-center gap-2 text-green-400 font-bold">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </span>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                                        <span className="text-white/80 font-medium">Years Active</span>
                                    </div>
                                    <span className="text-2xl font-bold text-white font-mono">12+</span>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                                        <span className="text-white/80 font-medium">Uptime</span>
                                    </div>
                                    <span className="text-2xl font-bold text-white font-mono">99.9%</span>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                                        <span className="text-white/80 font-medium">AI-Powered</span>
                                    </div>
                                    <span className="text-2xl font-bold text-white font-mono">Yes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>

        {/* Decorative Divider */}
        <div className="relative h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="relative flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
        </div>

        {/* Services - Bento Grid */}
        <Section className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-20">
            <FadeIn delay={200}>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white text-center">
                    What We <span className="gradient-text">Build</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Q Panda Cloud - Blue */}
                    <div className="group relative p-8 bg-white dark:from-blue-950/30 dark:to-blue-900/20 rounded-3xl border-2 border-blue-300 dark:border-blue-800 overflow-hidden transition-all duration-500 hover:scale-105 hover:-rotate-1 shadow-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Q Panda Cloud</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Next-gen hosting with AI-powered operations. Intelligent onboarding, predictive optimization, automated security.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                                <Sparkles className="w-4 h-4" />
                                Coming Soon
                            </div>
                        </div>
                    </div>

                    {/* AI Infrastructure - Featured Dark Card with Neon */}
                    <div className="group relative p-8 bg-gradient-to-br from-gray-900 to-purple-900 dark:from-black dark:to-purple-950 rounded-3xl border-2 border-purple-500 overflow-hidden transition-all duration-500 hover:scale-105 neon-glow-purple shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">AI Infrastructure</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Privacy-first AI systems for enterprise. Document intelligence, multi-agent orchestration, local-first deployment.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-purple-300">
                                <Bot className="w-4 h-4" />
                                qpanda.in
                            </div>
                        </div>
                    </div>

                    {/* Traditional Web - Teal */}
                    <div className="group relative p-8 bg-white dark:from-teal-950/30 dark:to-teal-900/20 rounded-3xl border-2 border-teal-300 dark:border-teal-800 overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-lg">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 dark:bg-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                                <Server className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Traditional Web</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Reliable hosting and development since 2013. Server management, technical consulting, long-term partnerships.
                            </p>
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400">
                                <CheckCircle2 className="w-4 h-4" />
                                12+ Years
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Section>

        {/* Trust Indicators with gradient background */}
        <Section className="py-16 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-slate-900/50 dark:via-slate-800/50 dark:to-slate-900/50">
            <FadeIn delay={400}>
                <div className="flex flex-wrap justify-center items-center gap-12 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-3 group">
                        <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg">GST Registered</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg">Since 2013</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <Globe className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg">Global Clients</span>
                    </div>
                </div>
            </FadeIn>
        </Section>
    </div>
);
