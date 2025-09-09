import {RevealOnScroll} from "../RevealOnScroll.jsx";
import {useState} from "react";

export const Contact = () => {

    const [result, setResult] = useState("");

    const accessKey = "a81b53f1-7fa6-4206-9544-d8ab375a476b";

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", `${accessKey}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully. Please check spam ");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="w-95 px-2 md:w-150 md:px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required placeholder="Name "  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <input type="hidden" name="access_key" value={accessKey} />
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required placeholder="example@gmail.com" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" required rows={7} placeholder="Your Message ..."  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white rounded py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>
                <span className={"flex items-center justify-center mt-4"}>{result}</span>
            </div>
            </RevealOnScroll>
        </section>
    )
}