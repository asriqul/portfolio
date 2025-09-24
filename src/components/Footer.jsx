import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
      <section className="text-slate-800">
                  <RevealOnScroll>
                  <div className="max-w-7xl mx-auto px-4 ">
                      {/*Bagian atas*/}
                      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                          {/*Branding*/}
                          {/* <div className="text-center md:text-left">
                              <h3 className="text-2xl font-bold text-slate-800 italic"></h3>
                              <p className="text-sm mt-1">Solusi Cepat & Tepat Tugas Codingmu</p>
                          </div> */}
      
                          {/*ikon sosial media*/}
                          <div className="flex space-x-6">
                              <a href="https://github.com/asriqul" className="text-gray-300 hover:text-slate-500 transition-colors duration-300">
                                  <FaGithub size={24}/>
                                  <span className="sr-only">Github</span>
                              </a>
                              <a href="#"
                                 className="text-gray-300 hover:text-slate-500 transition-colors duration-300">
                                  <FaWhatsapp size={24}/>
                                  <span className="sr-only">WhatsApp</span>
                              </a>
                              <a href="https://instagram.com/asr_hardi/" className="text-gray-300 hover:text-slate-500 transition-colors duration-300">
                                  <FaInstagram size={24}/>
                                  <span className="sr-only">Instagram</span>
                              </a>
      
                          </div>
                      </div>
                      {/*pemisah*/}
                      <hr className="my-5 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" />
                      {/*copyright section*/}
                      <div className="text-center text-md font-semibold text-gray-300 ">
                          <p>&copy; {currentYear} Asriqul Hardi</p>
                      </div>
                  </div>
                  </RevealOnScroll>
              </section>
  )
}
