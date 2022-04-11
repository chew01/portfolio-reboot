import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Widget from './components/Widget';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  if (menuOpen) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'unset';
  return (
    <>
      <div className="bg-prime-100 min-h-screen min-w-screen lg:mb-[-260px]">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main menuOpen={menuOpen} />
        <Footer menuOpen={menuOpen} />
      </div>
      <Widget menuOpen={menuOpen} />
    </>
  );
}

export default App;
