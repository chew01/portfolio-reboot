import React from 'react';

function Nav() {
  return (
    <nav className="hidden md:flex font-menu font-medium text-xl text-prime-400 gap-8">
      <a
        href="#intro"
        className="nav-animated opacity-0"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s 1 forwards fadeInDown' }}
      >
        Intro
      </a>
      <a
        href="#about"
        className="nav-animated opacity-0"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s 1 forwards fadeInDown' }}
      >
        About
      </a>
      <a
        href="#projects"
        className="nav-animated opacity-0"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.75s 1 forwards fadeInDown' }}
      >
        Projects
      </a>
      <a
        href="https://fs.kitsuiro.com/docs/CV_Daniel.pdf"
        className="nav-animated opacity-0"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 1s 1 forwards fadeInDown' }}
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
