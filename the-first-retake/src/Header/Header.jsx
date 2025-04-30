import { NavLink } from 'react-router-dom';

const getNavLinkClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

const Header = ({ className = '' }) => (
  <nav className={`header-nav ${className}`}>
    <NavLink 
      to="/" 
      end 
      className={getNavLinkClass}
      aria-current="page"
    >
      Home
    </NavLink>
    <NavLink 
      to="/horizontal" 
      className={getNavLinkClass}
    >
      Horizontal Shapes
    </NavLink>
    <NavLink 
      to="/vertical" 
      className={getNavLinkClass}
    >
      Vertical Shapes
    </NavLink>
  </nav>
);

export default Header;