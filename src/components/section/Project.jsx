import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Project = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-center">
                    Relevant Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">ERC-20 Automation Batch Transfer (Personal Project)</h3>
                        <p className="text-gray-400 mb-4">
                            batch-transfer is a nodejs application used to perform batch transfers of ethereum based erc20 tokens.
                        </p>
                        <div>
                            {["NodeJS"].map((tech, key) =>(
                                <span
                                   key={key}
                                   className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="https://github.com/asriqul/Tea-batch-transfer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr; </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">RecipeFlow (Personal Project)</h3>
                        <p className="text-gray-400 mb-4">
                            RecipeFlow is an AI-powered web application for searching, exploring, and recommending recipes with cooking tips.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React","TypeScript","mySQL","Tailwindcss"].map((tech, key) =>(
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 gap-3 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="https://github.com/asriqul/RecipeFlow" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr; </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                        <p className="text-gray-400 mb-4">
                            Coming Soon
                        </p>
                        <div>
                            {[""].map((tech, key) =>(
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr; </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                        <p className="text-gray-400 mb-4">
                            Coming Soon
                        </p>
                        <div>
                            {[""].map((tech, key) =>(
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project &rarr; </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}