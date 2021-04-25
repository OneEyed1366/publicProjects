import { useState } from 'react';
import '../styles/Navbar.scss';

function App() {
  const [burger, setBurger] = useState(false);

  return (
    <section id="navbar" className="block">
      <div className="block__item block__logo">
        <h1>Fitness Founder</h1>
      </div>
      <div className="block__item block__nav">
        <ul className={ burger ? 'active' : '' }>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Classes</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Features</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Contact</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Login</a></li>
        </ul>
      </div>
      <div
        className="block__hamburger"
        onClick={ () => {setBurger((prev) => prev = !prev)} }
      >
        <div className={ burger ? 'active' : '' }></div>
        <div className={ burger ? 'active' : '' }></div>
        <div className={ burger ? 'active' : '' }></div>
      </div>
    </section>
  );
}

export default App;