import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom'; // Import Link
import 'react-image-gallery/styles/css/image-gallery.css';
import './homepage.js';
import './instagram.js';

export default function App() {
  const images = [
    {
      original: "CBlakeReflection.jpg",
      thumbnail: "CBlakeReflection.jpg"
    },
    {
      original: "CBLandscape.jpg",
      thumbnail: "CBLandscape.jpg"
    },
    {
      original: "CBMountains.jpg",
      thumbnail: "CBMountains.jpg"
    },
    {
      original: "CBSunset.jpg",
      thumbnail: "CBSunset.jpg"
    },
    {
      original: "CBSunsetday2.jpg",
      thumbnail: "CBSunsetday2.jpg"
    },
    {
      original: "CBSunsetN1.jpg",
      thumbnail: "CBSunsetN1.jpg"
    },
    
  ];
  
  return (
    <div className="App">
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={2500}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert('slideshow is now playing!');
        }}
      />
      <Link to="/">
        <button>Go to Homepage</button>
      </Link>
    </div>
  );
}
