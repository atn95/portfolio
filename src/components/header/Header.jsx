import './Header.css';
import Nav from './NavBar/Nav';

function Header() {
  return (
    <div className="header-container">
      <div className="header-item-cont">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
