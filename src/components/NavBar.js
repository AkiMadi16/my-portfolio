import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

function NavBar() {
  return (
    <div className='container'>
      <nav className='titles'>
        <NavLink className="navlink" to="/" end>Home</NavLink>
        <NavLink className="navlink" to="/aboutme"><FontAwesomeIcon icon={ faUser } /></NavLink>
        <NavLink className="navlink" to="/projects"> <FontAwesomeIcon icon={ faRocket } /></NavLink>
        <NavLink className="navlink" to="/social"><FontAwesomeIcon icon={ faGlobe } /></NavLink>
        <NavLink className="navlink" to="/resume"><FontAwesomeIcon icon={ faFile } /></NavLink>
        <NavLink className="navlink" to="/contact"><FontAwesomeIcon icon={ faAddressBook } /></NavLink>
      </nav>
    </div>
  )
}

export default NavBar;