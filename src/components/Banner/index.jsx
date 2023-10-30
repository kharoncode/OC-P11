import './banner.css';

function Banner({ url, taglineUp, taglineDown }) {
   return (
      <div className="banner">
         <img src={url} alt="banner" />
         <div className="taglineContainer">
            <span>{taglineUp}</span>
            <span>{taglineDown}</span>
         </div>
      </div>
   );
}

export default Banner;
