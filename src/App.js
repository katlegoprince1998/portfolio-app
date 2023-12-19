
import './App.css';
import Index from "./components/home/Index";
import Contact from "./components/contactMe/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import SideBar from "./components/sideBar/SideBar";
import Skills from "./components/skills/Skills";
import AboutMe from "./components/aboutMe/About";


function App() {
  return (
   <>
     <SideBar />
     <div className='main'>
      <Index />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
     </div>
   </>

  );
}

export default App;
