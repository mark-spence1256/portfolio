import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const SideNav = () => {
    return (
        <div>
           <ul className="sidenav">
       <li><a href="https://www.linkedin.com/in/mark-spence-7a900617a/"><i className="fab fa-linkedin"></i></a></li>
       <li><a href="https://github.com/mark-spence1256"><i className="fab fa-github"></i></a></li>
       <li><a href="tel:647-572-1205"><i className="fas fa-phone"></i></a></li>
       <li><a href="mailto:markspence647@gmail.com"><i className="fas fa-paper-plane"></i></a></li>
      
    
  </ul> 
  <FontAwesomeIcon icon={faThumbsUp} style={color: 'red'} />

        </div>
    )
}
export default SideNav
