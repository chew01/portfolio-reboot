import React from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { MenuProps } from '../../types';

function Menu(props: MenuProps) {
  const { menuOpen, setMenuOpen } = props;

  return (
    <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
      <div className="md:hidden flex flex-col">
        <div className="z-30"><Hamburger toggled={menuOpen} toggle={setMenuOpen} color="#4B6587" /></div>
        <aside
          className={`flex flex-col fixed top-0 right-0 bg-prime-200 min-h-screen justify-center z-20 ${menuOpen ? 'show_sidebar' : 'sidebar'}`}
        >
          <div className="flex justify-center">
            <div
              className="flex flex-col items-center text-prime-400 font-link font-semibold text-2xl gap-4"
            >
              <a href="#intro" className="px-4" onClick={() => setMenuOpen(false)}>Intro</a>
              <span className="flex-grow self-stretch border-b-prime-400 border" />
              <a href="#about" className="px-4" onClick={() => setMenuOpen(false)}>About</a>
              <span className="flex-grow self-stretch border-b-prime-400 border" />
              <a href="#projects" className="px-4" onClick={() => setMenuOpen(false)}>Projects</a>
              <span className="flex-grow self-stretch border-b-prime-400 border" />
              <a
                href="https://fs.kitsuiro.com/docs/CV_Daniel.pdf"
                className="px-4"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </aside>
      </div>
    </ClickAwayListener>
  );
}

export default Menu;
