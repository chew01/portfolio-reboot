import React from 'react';
import { SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si';

type WidgetProps = {
  menuOpen: boolean,
};

function Widget(props: WidgetProps) {
  const { menuOpen } = props;
  return (
    <div
      className={`hidden lg:inline-flex sticky bottom-0 flex-col p-6 pb-16 justify-center gap-8 text-neutral-400 ${menuOpen ? 'blur select-none overflow-hidden transition-all ease-in' : ''}`}
    >
      <a href="https://twitter.com/lifelessfruit" aria-label="Twitter link">
        <SiTwitter
          size={36}
          className="hover:text-prime-400 focus:text-prime-400 transition-colors"
        />
      </a>
      <a href="https://www.linkedin.com/in/chewjunheng/" aria-label="LinkedIn link">
        <SiLinkedin
          size={36}
          className="hover:text-prime-400 focus:text-prime-400 transition-colors"
        />
      </a>
      <a href="https://github.com/chew01" aria-label="GitHub link">
        <SiGithub
          size={36}
          className="hover:text-prime-400 focus:text-prime-400 transition-colors"
        />
      </a>
    </div>
  );
}

export default Widget;
