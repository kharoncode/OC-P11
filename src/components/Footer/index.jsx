import './footer.css';
import logo from '../../assets/pictures/logo_footer.png';

function Footer() {
   return (
      <footer>
         <img src={logo} alt="logo" />
         <p>© 2020 Kasa. All rights reserved</p>
      </footer>
   );
}

export default Footer;
