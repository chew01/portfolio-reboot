import React from 'react';
import Nav from '../Nav';
import Menu from '../Menu';

function Header() {
  return (
    <header className="flex justify-between items-center bg-prime-dark p-4 md:mx-20">
      <div className="font-title italic text-3xl md:text-5xl select-none text-prime-400">D.C.</div>
      <Nav />
      <Menu />
    </header>
  );
}

export default Header;
