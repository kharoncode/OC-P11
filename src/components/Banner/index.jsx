import './banner.css';

function Banner({ url, tagline }) {
   return (
      <div className="banner">
         <img src={url} alt="banner" />
         <span>{tagline}</span>
      </div>
   );
}

export default Banner;
