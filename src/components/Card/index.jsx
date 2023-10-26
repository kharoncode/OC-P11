import './card.css';

function Card({ id, title, cover }) {
   return (
      <div id={id} className="card">
         <div className="img"></div>
         <img src={cover} alt={title} />
         <span>{title}</span>
      </div>
   );
}

export default Card;
