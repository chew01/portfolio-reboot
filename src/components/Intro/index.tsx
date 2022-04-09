import React, { useState } from 'react';
import { useWindupString } from 'windups';

function Intro() {
  const [finished, setFinished] = useState(false);
  const [string] = useWindupString('Greetings, Internet traveler.', { onFinished: () => setFinished(true) });

  return (
    <section id="intro" className="min-h-screen pt-20 flex flex-col justify-center items-center gap-6 mx-4">
      <div className="font-code font-medium text-3xl text-gray-500 text-center">{string}</div>
      <div
        className="font-block font-bold text-5xl text-slate-700 text-center opacity-0"
        style={finished ? { animation: '0.1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s 1 forwards fadeInUp' } : {}}
      >
        Test test
      </div>
      <div
        className="font-block font-medium text-2xl text-prime-400 text-center opacity-0"
        style={finished ? { animation: '0.1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s 1 forwards fadeInUp' } : {}}
      >
        I design, tinker, and build user-first
        applications.
      </div>
      <div
        className="font-block text-md text-gray-500 mx-2 opacity-0"
        style={finished ? { animation: '0.1s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s 1 forwards fadeInUp' } : {}}
      >
        I&apos;m a full stack developer,
        and I love to learn and experiment with the latest technologies.
        I&apos;m always motivated to solve problems
        with user-friendly solutions that are pleasing to the eyes.
        Currently, I&apos;m learning new things everyday from the Internet community,
        while I wait for college matriculation.
      </div>
    </section>
  );
}

export default Intro;
