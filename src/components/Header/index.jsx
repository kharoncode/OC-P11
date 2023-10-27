import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png';
import './header.css';

function Header() {
   return (
      <header>
         <Link to="/" id="link">
            <img src={logo} alt="Kasa Logo" className="logo" />
         </Link>
         <nav>
            <NavLink to="/" id="link">
               Acceuil
            </NavLink>
            <NavLink to="/about" id="link">
               A Propos
            </NavLink>
         </nav>
      </header>
   );
}

export default Header;
