import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className="hidden md:flex font-menu font-medium text-xl text-prime-400 gap-8">
      <Link
        activeClass="text-slate-900"
        className="link-animated opacity-0 cursor-pointer transition-colors"
        to="intro"
        spy
        smooth
        duration={500}
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s 1 forwards fadeInDown' }}
      >
        Intro
      </Link>
      <Link
        activeClass="text-slate-900"
        className="link-animated opacity-0 cursor-pointer transition-colors"
        to="about"
        spy
        smooth
        duration={500}
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s 1 forwards fadeInDown' }}
      >
        About
      </Link>
      <Link
        activeClass="text-slate-900"
        className="link-animated opacity-0 cursor-pointer transition-colors"
        to="projects"
        spy
        smooth
        duration={500}
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.75s 1 forwards fadeInDown' }}
      >
        Projects
      </Link>
      <a
        href="https://fs.kitsuiro.com/docs/CV_Daniel.pdf"
        className="link-animated opacity-0"
        style={{ animation: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 1s 1 forwards fadeInDown' }}
      >
        Resume
      </a>
    </nav>
  );
}

export default Nav;
