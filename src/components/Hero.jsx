import { navLinks } from '../data';
import { Logo, MenuIcon, PlayIcon, SearchIcon } from './Icons';
import Photo from './Photo';

export default function Hero() {
  return (
    <div className="container">
      <header className="hero" id="home">
        <Photo name="hero.png" alt="Business professional with tablet" className="hero__photo" />

        <nav className="nav">
          <Logo variant="hero" />
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
          <button className="nav__login">Log In</button>
          <button className="nav__icon" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="nav__icon nav__menu" aria-label="Menu">
            <MenuIcon />
          </button>
        </nav>

        <div className="hero__content">
          <h1>
            Global business
            <br />
            <span>payments simplified</span>
          </h1>
          <p>
            Whether you need to make cross-border payments enterprise management solutions, we’ve got you covered.
            International transfers across <strong>190+ countries</strong>
          </p>
          <div className="hero__actions">
            <button className="btn btn--white">Sign In</button>
            <a className="hero__link" href="#">
              <PlayIcon />
              <span>Explore entterprice</span>
            </a>
          </div>
          <div className="hero__dots" aria-hidden="true">
            <i className="on" />
            <i />
            <i />
            <i />
          </div>
        </div>
      </header>
    </div>
  );
}
