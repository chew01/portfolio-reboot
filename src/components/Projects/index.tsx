import React from 'react';

function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-20 mx-6 flex flex-col gap-8 justify-center">
      <article className="grid gap-2">
        <div className="row-span-full col-span-full z-10 relative flex items-center ">
          <div className="p-8">
            <div className="text-slate-700 font-block font-medium">Featured Projects</div>
            <div className="text-prime-400 font-block font-semibold text-3xl mb-4">
              Discord Bot Applications
            </div>
            <div className="text-gray-600 font-block">
              I created
              {' '}
              <a href="https://github.com/chew01/jeanne-bot" className="nav-animated font-bold">
                Jeanne
              </a>
              {' '}
              as a &quot;freestyle&quot; bot, with productivity features such as reminders and
              even a Mafia spin-off game. I also created
              {' '}
              <a href="https://github.com/chew01/cygnus-bot" className="nav-animated font-bold">Cygnus</a>
              , which serves as an information and ranking bot for the popular MMORPG, MapleStory.
            </div>
          </div>
        </div>
        <div className="bg-prime-300 row-span-full col-span-full h-full opacity-90" />
        <img
          src="https://fs.kitsuiro.com/assets/Thumbnail_D.png"
          alt=""
          className="row-span-full col-span-full object-cover h-full w-full"
        />
      </article>
      <article className="grid gap-2">
        <div className="row-span-full col-span-full z-10 relative flex items-center ">
          <div className="p-8">
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
              to increase my productivity. So I started hosting services such as
              {' '}
              <a href="https://www.jenkins.io/" className="nav-animated font-bold">Jenkins</a>
              {', '}
              <a href="https://www.postgresql.org/" className="nav-animated font-bold">PostgreSQL</a>
              , complete with an
              {' '}
              <a href="https://www.nginx.com/" className="nav-animated font-bold"> NGINX proxy </a>
              {' '}
              and
              {' '}
              <a href="https://www.influxdata.com/" className="nav-animated font-bold">
                {' '}
                InfluxDB
                monitoring system
              </a>
              {' '}
              on
              {' '}
              <a href="https://kitsuiro.com/" className="nav-animated font-bold">Kitsuiro.com</a>
              .
            </div>
          </div>
        </div>
        <div className="bg-prime-300 row-span-full col-span-full h-full opacity-90" />
        <img
          src="https://fs.kitsuiro.com/assets/Thumbnail_K.png"
          alt=""
          className="row-span-full col-span-full object-cover h-full w-full"
        />
      </article>
    </section>
  );
}

export default Projects;
