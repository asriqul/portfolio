import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const About = () => {

    const frontendSkills = ["React", "Vue","Vite","Svelte","Tailwindcss","TS"]
    const backendSkills = ["NodeJS","PostgreSQL","ExpressJS","PHP"]
    const otherSkills = ["Github","Git","NPM"]

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border transition-all">
                    <p className="text-gray-300 mb-6">
                        A Junior Web Developer with 2+ years of experience in JavaScript, React, and Node.js, passionate about building efficient and scalable applications while continuously learning and adapting to new technologies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Other Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border  transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S in Computer Science </strong> - Pamulang University (2018-2023)
                            </li>
                            <li>
                                <strong>B.S in Computer Science </strong> - Pamulang University (2018-2023)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border  transition-all">
                        <h3 className="text-xl font-bold mb-4">Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="font-semibold">
                                <h4>Software Engineer at PT HAHA HIHI (2012-present)</h4>
                                <p>
                                    Developed all building in literally lorem
                                </p>
                            </div>
                            <div className="font-semibold">
                                <h4>Software Engineer at PT HAHA HIHI (2012-present)</h4>
                                <p>
                                    Developed all building in literally lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    )
}