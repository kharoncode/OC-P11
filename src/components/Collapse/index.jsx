import './collapse.css';
import { useState } from 'react';
import arrow from '../../assets/pictures/open.png';

function Collapse({ title, text }) {
   const [isOpen, setIsOpen] = useState(false);
   const [reverse, setReverse] = useState('');
   const [display, setDisplay] = useState('none');

   return (
      <div className="collapse-container center">
         <div className="collapse-button">
            <img
               className={reverse}
               src={arrow}
               alt="Open"
               onClick={() =>
                  isOpen
                     ? (setIsOpen(false), setReverse(''), setDisplay('none'))
                     : (setIsOpen(true), setReverse('reverse'), setDisplay(''))
               }
            />
            <div className="collapse-text">{title}</div>
         </div>
         <div className={`collapse-dropdown_menu ${display}`}>{text}</div>
      </div>
   );
}

export default Collapse;
