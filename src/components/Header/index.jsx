import { Link } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png';
import './header.css';

function Header() {
   return (
      <header>
         <Link to="/" id="link">
            <img src={logo} alt="Kasa Logo" />
         </Link>
         <nav>
            <Link to="/" id="link">
               Acceuil
            </Link>
            <Link to="/about" id="link">
               A Propos
            </Link>
         </nav>
      </header>
   );
}

export default Header;
