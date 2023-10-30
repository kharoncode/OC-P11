import './home.css';
import Banner from '../../components/Banner';
import banner from '../../assets/pictures/banner_01.png';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';

function Home() {
   const { data, error, isLoading } = useFetch('./data/logements.json');
   return (
      <main>
         <Banner
            url={banner}
            taglineUp="Chez vous,"
            taglineDown="partout et ailleurs"
         />
         {error ? (
            <div>Il y a une erreur !</div>
         ) : (
            <div>
               {isLoading ? (
                  <div>Loading...</div>
               ) : (
                  <div className="cardContainer">
                     {data.map((housing, index) => (
                        <Link
                           /* to={`/housing/${index}`} */
                           to={`/housing/${housing.id}`}
                           id="cardLink"
                           key={`${housing.id}-${index}`}
                        >
                           <Card
                              id={housing.id}
                              title={housing.title}
                              cover={housing.cover}
                           />
                        </Link>
                     ))}
                  </div>
               )}
            </div>
         )}
      </main>
   );
}

export default Home;
