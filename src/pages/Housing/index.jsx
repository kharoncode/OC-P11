import './housing.css';
import { useParams, Navigate } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';

function Housing() {
   const { id } = useParams();
   const { data, isLoading, error } = useFetch('../data/logements.json');

   if (!isLoading) {
      const housingData = data.find((housing) => housing.id === id);
      if (!housingData) {
         return <Navigate to="/error" />;
      } else {
         return (
            <main>
               {error ? (
                  <div>Il y a une erreur !</div>
               ) : (
                  <div>
                     {isLoading ? (
                        <div>Loading...</div>
                     ) : (
                        <div className="housingContainer center">
                           <Carousel data={housingData} />
                           <div className="info center">
                              <div className="info-header">
                                 <div className="title-container">
                                    <div className="title">
                                       {housingData.title}
                                    </div>
                                    <div className="location">
                                       {housingData.location}
                                    </div>
                                 </div>
                                 <div className="host-container">
                                    <div className="host-name">
                                       {housingData.host.name
                                          .split(' ')
                                          .map((n) => (
                                             <div key={n}>{n}</div>
                                          ))}
                                    </div>
                                    <img
                                       className="host-picture"
                                       src={housingData.host.picture}
                                       alt={housingData.host.name}
                                    />
                                 </div>
                              </div>
                              <div className="info-footer">
                                 <div className="tag-container">
                                    {housingData.tags.map((tag) => (
                                       <div
                                          key={tag}
                                          className="tag btn center"
                                       >
                                          {tag}
                                       </div>
                                    ))}
                                 </div>
                                 <Rating data={housingData} />
                              </div>
                           </div>
                           <div className="complement">
                              <Collapse
                                 title={'Description'}
                                 text={housingData.description}
                              />
                              <Collapse
                                 title={'Equipement'}
                                 text={housingData.equipments.map(
                                    (equipement) => (
                                       <div key={equipement}>{equipement}</div>
                                    )
                                 )}
                              />
                           </div>
                        </div>
                     )}
                  </div>
               )}
            </main>
         );
      }
   }
   //const result = data.find((housing) => housing.id === 'b9123946');

   // if (!result) {
   //    return <Navigate to="/error" />;
   // } else {
   // }

   /*   if (!isLoading) {
      if (data[id] === undefined) {
         return <Navigate to="/error" />;
      }
   } */
}

export default Housing;
