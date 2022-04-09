import React from 'react';
import Nav from '../Nav';
import Menu from '../Menu';
import './index.css';

function Header() {
  return (
    <header
      className="flex justify-between items-center fixed w-full bg-prime-dark p-4 md:px-20 border-b border-b-prime-300"
    >
      <div
        className="font-title italic text-3xl md:text-5xl select-none text-prime-400"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 forwards fadeExpand' }}
      >
        D.C.
      </div>
      <Nav />
      <Menu />
    </header>
  );
}

export default Header;
