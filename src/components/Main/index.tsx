import React from 'react';
import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';

type MainProps = {
  menuOpen: boolean
};

function Main(props: MainProps) {
  const { menuOpen } = props;
  return (
    <main className={menuOpen ? 'blur select-none overflow-hidden transition-all ease-in' : ''}>
      <Intro />
      <About />
      <Projects />
    </main>
  );
}

export default Main;
