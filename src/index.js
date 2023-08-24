import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './homepage';
import Instagram from './instagram';
import './instagram.css';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<App />} />
        <Route path="/instagram" element={<Instagram />} /> {/* Add this line */}
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
