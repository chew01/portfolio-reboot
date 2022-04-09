import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';

function Menu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="md:hidden flex flex-col">
      <div className="z-10"><Hamburger toggled={isOpen} toggle={setOpen} color="#4B6587" /></div>
      <aside
        className={`flex flex-col fixed top-0 right-0 bg-prime-200 min-h-screen justify-center ${isOpen ? 'show_sidebar' : 'sidebar'}`}
      >
        <div className="flex justify-center">
          <div
            className="flex flex-col items-center text-prime-400 font-link font-semibold text-2xl gap-4"
          >
            <a href="#intro" className="px-4">Intro</a>
            <span className="flex-grow self-stretch border-b-prime-400 border" />
            <a href="#about" className="px-4">About</a>
            <span className="flex-grow self-stretch border-b-prime-400 border" />
            <a href="#projects" className="px-4">Projects</a>
            <span className="flex-grow self-stretch border-b-prime-400 border" />
            <a href="https://fs.kitsuiro.com/docs/CV_Daniel.pdf" className="px-4">Resume</a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Menu;
