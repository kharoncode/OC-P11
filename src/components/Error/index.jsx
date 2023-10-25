import './error.css';
import { Link } from 'react-router-dom';

function Error() {
   return (
      <main className="errorMain">
         <div className="errorNumber">404</div>
         <div className="errorMessage">
            Oups! La page que vous demandez n'existe pas.
         </div>
         <Link to="/" id="link">
            Retourner sur la page d’accueil
         </Link>
      </main>
   );
}

export default Error;
