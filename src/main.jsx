import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import Home from './pages/Home/App';
import Projet from './pages/Projet/App';
import Error from './pages/Error/App';
import { Navigate } from 'react-router-dom';
import Layout from './components/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/projet/:slug" element={<Projet />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
