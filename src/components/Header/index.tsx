import React from 'react';
import Nav from '../Nav';
import Menu from '../Menu';
import './index.css';
import { MenuProps } from '../../types';

function Header(props: MenuProps) {
  const { menuOpen, setMenuOpen } = props;
  return (
    <header
      className="flex justify-between items-center fixed w-full bg-prime-100 p-4 md:px-20 border-b border-b-prime-300 z-20"
    >
      <div
        className="font-title italic text-3xl md:text-5xl select-none text-prime-400"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 forwards fadeExpand' }}
      >
        D.C.
      </div>
      <Nav />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default Header;
