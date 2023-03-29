import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="container">
          <Routes>
            <Route index element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
