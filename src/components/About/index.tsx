import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

function About() {
  const [aboutEntered, setAboutEntered] = useState(false);

  return (
    <section id="about" className="min-h-screen pt-20 flex flex-col md:flex-row gap-6 md:gap-20 justify-center">
      <Waypoint onEnter={() => setAboutEntered(true)} bottomOffset={300} />
      <div className="flex flex-col justify-center gap-2">
        <CSSTransition in={aboutEntered} timeout={500} classNames="fade-item">
          <div className="text-prime-400 font-block font-semibold text-3xl opacity-0">A bit about myself</div>
        </CSSTransition>
        <CSSTransition in={aboutEntered} timeout={500} classNames="fade-item" style={{ transitionDelay: '0.2s' }}>
          <div className="text-gray-500 font-block opacity-0">
            Hello there! My name is
            {' '}
            <strong>Daniel</strong>
            {' '}
            and I create interesting trinkets on the Internet.
            I started learning bits and pieces of programming and database management
            when I was 12, just to start up some Minecraft servers. Over the years,
            I can&apos;t say I&apos;ve done much with that knowledge, having found some other
            hobbies. But recently, I&apos;ve discovered a cool messaging platform called Discord
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
        </CSSTransition>
      </div>
      <div className="flex flex-col justify-center gap-2 min-w-[240px] md:pb-40">
        <CSSTransition in={aboutEntered} timeout={500} classNames="fade-item">
          <div className="opacity-0" style={{ transitionDelay: '0.4s' }}>
            <div className="text-prime-400 font-block font-semibold text-xl">
              Languages and
              Skills
            </div>
            <ul className="list-disc list-inside columns-2 text-gray-500 font-block">
              <li>Typescript</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Git</li>
              <li>Docker</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    </section>

  );
}

export default About;
