import './housing.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';

function Housing() {
   const { id } = useParams();
   const { data, error, isLoading } = useFetch('../data/logements.json');
   const housingData = data[id];

   return (
      <main>
         {error ? (
            <div>Il y a une erreur !</div>
         ) : (
            <div>
               {isLoading ? (
                  <div>Loading...</div>
               ) : (
                  <div className="housingContainer">
                     <img src={housingData.cover} alt={housingData.title} />
                  </div>
               )}
            </div>
         )}
      </main>
   );
}

export default Housing;
