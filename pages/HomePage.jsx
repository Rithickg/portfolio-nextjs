import NavBar from "../components/NavBar"
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function HomePage() {
    return (
        <div>
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )     
  }