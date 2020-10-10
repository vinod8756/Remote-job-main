import React from 'react'
import  {Aux}  from '../hoc/auxilary'
import './nav.css'

const Nav = () => {
return(
    <Aux>
   <nav className = 'Nav'>
       <h2 className = 'tittle'>REMOTE JOBS</h2>
       <ul className = 'nav-link'>
       <li className = 'nav-link1'>HOME</li>
       <li className = 'nav-link2'>ABOUT</li>
       <li className = 'nav-link3'>BLOGS</li>
       <li className = 'nav-link4'>REMOTE JOBS</li>
       <li className = 'nav-link5'>POST A JOB</li>
       </ul>
   </nav>
    </Aux>
)

      




}

export default Nav