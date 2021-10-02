import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/navbar.js"
import AboutMe from "./Components/aboutme.js"
import Projects from "./Components/projects.js"
import Skills from "./Components/skills.js"





function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>

    </div>
  );
}

export default App;
