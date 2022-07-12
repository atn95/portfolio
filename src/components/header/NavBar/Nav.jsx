import '../Header.css';
import NavButton from './NavButton';
function Nav() {
  return (
    <div className="nav-bar">
      <div className="nav-item-cont">
        <NavButton text={'//1. <Home/>'} />
      </div>
      <div className="nav-item-cont">
        <NavButton text={'//2. <Projects/>'} />
      </div>
      <div className="nav-item-cont">
        <NavButton text={'//3. <About/>'} />
      </div>
      <div className="nav-item-cont">
        <NavButton text={'//4. <Contact/>'} color={`green`} />
      </div>
    </div>
  );
}

export default Nav;
