import React from 'react';

function Nav() {
  return (
    <nav className="hidden md:flex font-menu font-medium text-xl text-prime-400 gap-8">
      <a href="#intro">Intro</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </nav>
  );
}

export default Nav;
