import './rating.css';
import star from '../../assets/pictures/star.png';
import emptyStar from '../../assets/pictures/emptyStar.png';

function Rating({ data }) {
   const rating = [1, 2, 3, 4, 5];
   return (
      <div className="rating">
         {rating.map((rat) =>
            rat > data.rating ? (
               <img key={`rating-${rat}`} src={emptyStar} alt="emptyStar" />
            ) : (
               <img key={`rating-${rat}`} src={star} alt="star" />
            )
         )}
      </div>
   );
}
export default Rating;
