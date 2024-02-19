import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-links">
      <li className="links">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="links">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li className="links">
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
