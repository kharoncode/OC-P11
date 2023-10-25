import './housing.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';

function Housing() {
   const { id } = useParams();
   const { data, error, isLoading } = useFetch('../data/logements.json');
   const housingData = data[id];
   const rating = [1, 2, 3, 4, 5];

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
                     <img
                        className="cover"
                        src={housingData.cover}
                        alt={housingData.title}
                     />
                     <div className="info">
                        <div className="title">{housingData.title}</div>
                        <div className="location">{housingData.location}</div>
                        <div className="host">{housingData.host.name}</div>
                        <img
                           className="hostCover"
                           src={housingData.host.picture}
                           alt={housingData.host.name}
                        />
                        <div className="tagContainer">
                           {housingData.tags.map((tag) => (
                              <div key={tag} className="tag">
                                 {tag}
                              </div>
                           ))}
                        </div>
                        <div className="rating">
                           {rating.map((rat) =>
                              rat > housingData.rating ? '-' : '+'
                           )}
                        </div>
                     </div>
                     <div className="description">
                        {housingData.description}
                     </div>
                     <div className="equipement">
                        {housingData.equipments.map((equipments) => (
                           <div key={equipments}>{equipments}</div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         )}
      </main>
   );
}

export default Housing;
