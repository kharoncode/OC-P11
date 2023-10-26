import './about.css';
import Banner from '../../components/Banner';
import banner from '../../assets/pictures/banner_02.png';
import Collapse from '../../components/Collapse';

const about = {
   fiabilite:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
   respect:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   service:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
   securite:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

function About() {
   return (
      <main className="center">
         <Banner url={banner} tagline="" />
         <div className="about-collapse-container">
            <Collapse title={'Fiabilité'} text={about.fiabilite} />
            <Collapse title={'Respect'} text={about.respect} />
            <Collapse title={'Service'} text={about.service} />
            <Collapse title={'Sécurité'} text={about.securite} />
         </div>
      </main>
   );
}

export default About;
