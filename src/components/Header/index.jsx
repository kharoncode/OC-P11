import { Link } from 'react-router-dom';

function Header() {
   return (
      <div>
         <Link to="/">Acceuil</Link>
         <Link to="/about">A Propos</Link>
      </div>
   );
}

export default Header;
