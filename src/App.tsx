import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VectorArtPage from './pages/VectorArtPage';
import InvitationsPage from './pages/InvitationsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FreeSamplesPage from './pages/FreeSamplesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EnhancedDoodles from './components/EnhancedDoodles';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <EnhancedDoodles />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vector-art" element={<VectorArtPage />} />
            <Route path="/invitations" element={<InvitationsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/free-samples" element={<FreeSamplesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;