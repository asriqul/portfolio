import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from '@emailjs/browser';
import {useState} from "react";


export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then((result) => {
            alert("Message sent successfully.");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Oops! Something went wrong"));
    }
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="w-150 px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required placeholder="Name " value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required placeholder="example@gmail.com" value={formData.email}  onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"/>
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" required rows={7} placeholder="Your Message ..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white rounded py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
            </RevealOnScroll>
        </section>
    )
}