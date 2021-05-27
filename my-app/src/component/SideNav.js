import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import  {falinkedin} from '@fortawesome/free-brands-svg-icons';

export const SideNav = () => {
    return (
        <div>
           <ul className="sidenav">
       <li><a href="https://www.linkedin.com/in/mark-spence-7a900617a/"><FontAwesomeIcon icon={falinkedin}  style={{color:'red'}}/></a></li>
       <li><a href="https://github.com/mark-spence1256"><FontAwesomeIcon icon={["fab","github"]} style={{color:'red'}} /></a></li>
       <li><a href="tel:647-572-1205"><FontAwesomeIcon icon={faPhone} style={{color:'red'}} /></a></li>
       <li><a href="mailto:markspence647@gmail.com"><FontAwesomeIcon icon={faPaperPlane} style={{color:'red'}} /></a></li>
      
    
  </ul> 


        </div>
    )
}
export default SideNav
