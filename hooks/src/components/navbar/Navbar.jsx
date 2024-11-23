import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul className="navMenu">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li>Home</li></NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li>About</li></NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li>Contact</li></NavLink>
        <NavLink to="/loginsignup" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li>Login/SignUp</li></NavLink>
      </ul>
    </div>
  );
}












// import React from 'react';
// import './Navbar.css';
// import { NavLink } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <div>
//       <ul className="navMenu">
//         <NavLink to="/" className="link" activeClassName="activeLink"><li>Home</li></NavLink>
//         <NavLink to="/about" className="link" activeClassName="activeLink"><li>About</li></NavLink>
//         <NavLink to="/contact" className="link" activeClassName="activeLink"><li>Contact</li></NavLink>
//         <NavLink to="/loginsignup" className="link" activeClassName="activeLink"><li>Login/SignUp</li></NavLink>
//       </ul>
//     </div>
//   );
// }
