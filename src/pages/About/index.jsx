import './about.css';
import Banner from '../../components/Banner';
import banner from '../../assets/pictures/banner_02.png';

function About() {
   return (
      <main>
         <Banner url={banner} tagline="" />
         About
      </main>
   );
}

export default About;
