import React, { useState } from 'react';
import 'animate.css/animate.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  if (menuOpen) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'unset';
  return (
    <div className="bg-prime-100 min-h-screen min-w-screen">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main menuOpen={menuOpen} />
      <Footer menuOpen={menuOpen} />
    </div>
  );
}

export default App;
