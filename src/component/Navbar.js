import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
      <div >

       <ul className='navbar'>

        <li> <NavLink  className='nav-bar-links'  to='/'>Home </NavLink></li>
        <li> <NavLink  className='nav-bar-links' to='/About'>About </NavLink></li>
        <li> <NavLink  className='nav-bar-links' to='/Contact'>Contact </NavLink></li>
        

       </ul>

       
      </div>
    );
  }
  
  export default Navbar;