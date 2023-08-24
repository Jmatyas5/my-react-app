import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div className="home-container" id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="home-title">Jacob Matyas Photo Gallery</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <p className="home-description">Bio</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <ul className="short-list">
                  <li><i className="fas fa-angle-right"></i> <strong>Digital Camera:</strong> NDA</li>
                  <li><i className="fas fa-angle-right"></i> <strong>Film Camera:</strong> NAMEE OF FILM Camera</li>
                  <li><i className="fas fa-angle-right"></i> <strong>Location:</strong> Boulder, CO</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="short-list">
                  <li><i className="fas fa-angle-right"></i> <strong>Birthday:</strong> 08/20/2001</li>
                  <li><i className="fas fa-angle-right"></i> <strong>Age:</strong> {Math.floor((Date.now() - Date.parse('2001-08-20')) / 31536e6)} years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <Link to="/gallery">
              <button className="custom-button home-button">Go to Gallery</button>
            </Link>
          </div>
          <div className="col-sm">
            <Link to="/instagram">
              <button className="custom-button home-button">Instagram</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
