import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';

function Projects() {
  const [projectsEntered, setProjectsEntered] = useState(false);

  return (
    <section id="projects" className="min-h-screen pt-20 flex flex-col gap-8 justify-center">
      <Waypoint onEnter={() => setProjectsEntered(true)} bottomOffset={300} />
      <CSSTransition in={projectsEntered} timeout={500} classNames="fade-right">
        <article className="grid gap-2 opacity-0 md:flex">
          <div className="bg-prime-300 row-start-1 col-start-1 h-full opacity-90 md:opacity-0" />
          <img
            src="https://fs.kitsuiro.com/assets/Thumbnail_D.png"
            alt=""
            className="col-start-1 row-start-1 object-cover h-full w-full self-center flex-1"
          />
          <div className="col-start-1 row-start-1 z-10 relative flex items-center flex-1">
            <div className="p-8 md:pr-0">
              <div className="text-slate-700 font-block font-medium">Featured Projects</div>
              <div className="text-prime-400 font-block font-semibold text-3xl mb-4">
                Discord Bot Applications
              </div>
              <div className="text-gray-600 font-block">
                I created
                {' '}
                <a href="https://github.com/chew01/jeanne-bot" className="link-animated font-bold">
                  Jeanne
                </a>
                {' '}
                as a &quot;freestyle&quot; bot, with productivity features such as reminders and
                even a Mafia spin-off game. I also created
                {' '}
                <a
                  href="https://github.com/chew01/cygnus-bot"
                  className="link-animated font-bold"
                >
                  Cygnus
                </a>
                , which serves as an information and ranking bot for the popular MMORPG, MapleStory.
              </div>
            </div>
          </div>
        </article>
      </CSSTransition>
      <CSSTransition in={projectsEntered} timeout={500} classNames="fade-left">
        <article className="grid gap-2 opacity-0 md:flex">
          <div className="col-start-1 row-start-1 z-10 relative flex items-center flex-1">
            <div className="p-8 md:pl-0">
              <div className="text-slate-700 font-block font-medium">Featured Projects</div>
              <div className="text-prime-400 font-block font-semibold text-3xl mb-4">
                Server Administration
              </div>
              <div className="text-gray-600 font-block">
                I wanted to learn tools like
                {' '}
                <strong>Docker</strong>
                , and also higher-order concepts like
                {' '}
                <strong>DevOps and CI/CD</strong>
                {' '}
                to increase my productivity.
                So I started hosting services such as Jenkins, PostgreSQL,
                NGINX proxy and InfluxDB monitoring system on
                {' '}
                <a href="https://kitsuiro.com/" className="link-animated font-bold">Kitsuiro.com</a>
                .
              </div>
            </div>
          </div>
          <div className="bg-prime-300 col-start-1 row-start-1 h-full opacity-90 md:opacity-0" />
          <img
            src="https://fs.kitsuiro.com/assets/Thumbnail_K.png"
            alt=""
            className="col-start-1 row-start-1 object-cover h-full w-full self-center flex-1"
          />
        </article>
      </CSSTransition>
    </section>
  );
}

export default Projects;
