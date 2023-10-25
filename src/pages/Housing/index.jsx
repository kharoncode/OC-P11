import './housing.css';
import { useParams, Navigate } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import back from '../../assets/pictures/back.png';
import next from '../../assets/pictures/next.png';
import star from '../../assets/pictures/star.png';
import emptyStar from '../../assets/pictures/emptyStar.png';

function Housing() {
   const { id } = useParams();
   const { data, error, isLoading } = useFetch('../data/logements.json');
   const housingData = data[id];
   const rating = [1, 2, 3, 4, 5];
   if (!isLoading) {
      if (data[id] === undefined) {
         return <Navigate to="/error" />;
      }
   }

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
                     <div className="carousel center">
                        <img
                           className="cover"
                           src={housingData.cover}
                           alt={housingData.title}
                        />
                        <img src={back} alt="back" className="back arrow" />
                        <img src={next} alt="next" className="next arrow" />
                        <div className="page arrow">1/4</div>
                     </div>
                     <div className="info center">
                        <div className="info-header">
                           <div className="title-container">
                              <div className="title">{housingData.title}</div>
                              <div className="location">
                                 {housingData.location}
                              </div>
                           </div>
                           <div className="host-container">
                              <div className="host-name">
                                 {housingData.host.name.split(' ').map((n) => (
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
                                 <div key={tag} className="tag btn center">
                                    {tag}
                                 </div>
                              ))}
                           </div>
                           <div className="rating">
                              {rating.map((rat) =>
                                 rat > housingData.rating ? (
                                    <img
                                       key={`rating-${rat}`}
                                       src={emptyStar}
                                       alt="emptyStar"
                                    />
                                 ) : (
                                    <img
                                       key={`rating-${rat}`}
                                       src={star}
                                       alt="star"
                                    />
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                     {/* <div className="complement">
                        <div className="description">
                           <div className="complement-title btn">
                              Description
                           </div>
                           {housingData.description}
                        </div>
                        <div className="equipement">
                           <div className="complement-title btn">
                              Equipement
                           </div>
                           {housingData.equipments.map((equipments) => (
                              <div key={equipments}>{equipments}</div>
                           ))}
                        </div>
                     </div> */}
                  </div>
               )}
            </div>
         )}
      </main>
   );
}

export default Housing;
