import './collapse.css';
import { useState } from 'react';
import arrow from '../../assets/pictures/open.png';

function Collapse({ title, text }) {
   const [isOpen, setIsOpen] = useState(false);
   const [reverse, setReverse] = useState('');
   const [display, setDisplay] = useState('');

   return (
      <div className="collapse-container center">
         <div className="collapse-button">
            <img
               className={`${reverse} arrow`}
               src={arrow}
               alt="Open"
               onClick={() =>
                  isOpen
                     ? (setIsOpen(false), setReverse(''), setDisplay(''))
                     : (setIsOpen(true),
                       setReverse('reverse'),
                       setDisplay('collapse-dropdown_menu-open'))
               }
            />
            <div className="collapse-title">{title}</div>
         </div>
         <div className={`collapse-dropdown_menu ${display}`}>{text}</div>
      </div>
   );
}

export default Collapse;
