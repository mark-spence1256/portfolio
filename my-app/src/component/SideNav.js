import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SideNav = () => {
    return (
        <div>
           <div className="sidenav">
       <a href="https://www.linkedin.com/in/mark-spence-7a900617a/">
           < FontAwesomeIcon icon={['fab', 'linkedin']} />
           </a>
       <a href="https://github.com/mark-spence1256">
            < FontAwesomeIcon icon={['fab', 'github']} />
       </a>
       <a href="tel:6475721205">
       < FontAwesomeIcon icon={['fa', 'phone']} />
  </a>
  <a href="mailto:markspence647@gmail.com">
  < FontAwesomeIcon icon={['fa', 'paper-plane']} />
</a>
< FontAwesomeIcon icon={['fa', 'paper-plane']} />


       
 
  </div> 

        </div>
    )
}
export default SideNav
