import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    <section id="about" className="min-h-screen min-h-screen pt-20 flex flex-col justify-center">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce
        initiallyVisible
        className="flex flex-col gap-6"
      >
        <div className="text-prime-400 font-block font-semibold text-3xl">A bit about myself</div>
        <div className="text-gray-500 font-block">
          Hello there! My name is
          {' '}
          <strong>Daniel</strong>
          {' '}
          and I create interesting trinkets on the Internet.
          I started learning bits and pieces of programming and database management
          when I was 12, just to start up some Minecraft servers. Over the years,
          I can&apos;t say I&apos;ve done much with that knowledge, having found some other hobbies.
          But recently, I&apos;ve discovered a cool messaging platform called Discord
          with lots of interesting bots — and the rest is history, as they say.
          <br />
          <br />
          I started off taking a
          {' '}
          <strong>full-stack Javascript programming</strong>
          {' '}
          course, bundled in with HTML
          and CSS. Along the way, I&apos;ve been exposed to even more languages and tools
          in every project, such as
          {' '}
          <strong>SQL, Docker, and Jenkins</strong>
          {' '}
          (which builds and runs this
          website!)
          to do more advanced things. These days, I&apos;ve been writing more
          bots, studying data structures, and learning some cool new languages like Rust!
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default About;
