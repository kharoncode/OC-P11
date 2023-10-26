import './carousel.css';
import back from '../../assets/pictures/back.png';
import next from '../../assets/pictures/next.png';
import { useState } from 'react';

function Carousel({ data }) {
   const [page, setPage] = useState(1);
   const pagesLength = data.pictures.length;
   const prevPage = page === 1 ? pagesLength : page - 1;
   const nextPage = page === pagesLength ? 1 : page + 1;
   const pictures = data.pictures;
   return (
      <div className="carousel center">
         <img className="cover" src={pictures[page - 1]} alt={data.title} />
         {pagesLength > 1 ? (
            <div className="arrow-container center">
               <img
                  src={back}
                  alt="back"
                  className="back arrow"
                  onClick={() => {
                     setPage(prevPage);
                  }}
               />
               <img
                  src={next}
                  alt="next"
                  className="next arrow"
                  onClick={() => {
                     setPage(nextPage);
                  }}
               />
               <div className="page arrow">
                  {page}/{pagesLength}
               </div>
            </div>
         ) : (
            <div></div>
         )}
      </div>
   );
}

export default Carousel;
