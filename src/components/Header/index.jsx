import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png';
import './header.css';

function Header() {
   return (
      <header>
         <Link to="/" className="link">
            <img src={logo} alt="Kasa Logo" className="logo" />
         </Link>
         <nav>
            <NavLink to="/" className="link">
               Acceuil
            </NavLink>
            <NavLink to="/about" className="link">
               A Propos
            </NavLink>
         </nav>
      </header>
   );
}

export default Header;
