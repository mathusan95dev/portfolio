import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/navbar.js"
import AboutMe from "./Components/aboutme.js"
import Projects from "./Components/projects.js"
import Skills from "./Components/skills.js"
import Footer from "./Components/footer.js"





function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Footer/>

    </div>
  );
}

export default App;
