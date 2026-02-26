import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/index.css';
import Home from './pages/Home/App';
import Projet from './pages/Projet/App';
import Error from './pages/Error/App';
import { Navigate } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to={'/404'} replace />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projet/:slug" element={<Projet />}></Route>
        <Route path="/404" element={<Error />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
