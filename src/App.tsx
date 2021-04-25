import React from 'react';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="content">
      <Navbar />
      <section id="start-page" className="main">
        <div className="main__block">
          <div className="main__sub-title">
            <h3>Shape your body</h3>
          </div>
          <div className="main__title">
            <h1>Strive for progress, not perfection</h1>
          </div>
          <div className="main__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum asperiores
            </p>
          </div>
          <div className="main__form">
            <label>
              <input type="email" id="" placeholder="Email adress"/>
              <button>
                <span>
                  Join with Us
                </span>
              </button>
            </label>
          </div>
        </div>
        <div className="main__block">
          <div className="main__hero">
            <img src="" alt=""/>
          </div>
        </div>
        <div className="main__block">
          <div className="main__btns">
            <button>
              Improve your ability to do Daily Activities
            </button>
          </div>
          <div className="main__btns">
            <button>
              Strengthen Your Bones and Muscles
            </button>
          </div>
          <div className="main__btns">
            <button>
              Increases Your Chances of Living Longer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
