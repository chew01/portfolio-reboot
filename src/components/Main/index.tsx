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
    <main
      className={`mx-6 sm:mx-10 md:mx-14 lg:mx-28 xl:mx-48 2xl:mx-auto max-w-7xl ${menuOpen ? 'blur select-none overflow-hidden transition-all ease-in' : ''}`}
    >
      <Intro />
      <About />
      <Projects />
    </main>
  );
}

export default Main;
