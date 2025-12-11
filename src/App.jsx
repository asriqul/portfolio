import "./index.css"
import {LoadingScreen} from "./components/LoadingScreen.jsx";
import {MobileMenu} from "./components/MobileMenu.jsx";
import {Home} from "./components/section/Home.jsx";
import {About} from "./components/section/About.jsx";
import {Project} from "./components/section/Project.jsx";
import {Contact} from "./components/section/Contact.jsx";
import {useState} from "react";
import {Navbar} from "./components/Navbar.jsx";
import { Footer } from './components/Footer.jsx';

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
    <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        </div>
    </>
    )
}

export default App
