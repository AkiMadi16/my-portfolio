import { useNavigate, Link } from "react-router-dom"
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from "./components/Projects";
import Social from "./components/Social";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/aboutme' element={<AboutMe name='Maddy'/>}/>
        <Route path='/projects' element={<Projects name='Maddy'/>}/>
        <Route path='/social' element={<Social name='Maddy'/>}/>
        <Route path='/resume' element={<Resume name='Maddy'/>}/>
        <Route path='/contact' element={<ContactMe name='Maddy'/>}/>
        <Route path='/' element={<Dashboard name='Maddy'/>}/>
      </Routes>
    </div>
  );
}

export default App;
