import React from 'react'

import { faHeart,faCommentDots,faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideNav = () => {
    return (
        <div>
           <ul className="sidenav">
       <li><a href="https://www.linkedin.com/in/mark-spence-7a900617a/"><i class="fab fa-linkedin"></i></a></li>
       <li><a href="https://github.com/mark-spence1256"><i class="fab fa-github"></i></a></li>
       <li><a href="tel:647-572-1205"><i class="fas fa-phone"></i></a></li>
       <li><a href="mailto:markspence647@gmail.com"><i class="fas fa-paper-plane"></i></a></li>
       <li><a href="Mark Spence Web Developer .pdf"><i class="fas fa-file-pdf"></i></a></li>
       
 
  </ul> 
  <FontAwesomeIcon icon={faHeart}  className="I"/>
<FontAwesomeIcon icon={faCommentDots} /> 
<FontAwesomeIcon icon={faShareSquare} />
        </div>
    )
}
export default SideNav
