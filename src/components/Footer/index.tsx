import React from 'react';
import { SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si';
import './index.css';

type FooterProps = {
  menuOpen: boolean,
};

function Footer(props: FooterProps) {
  const { menuOpen } = props;
  return (
    <footer
      className={`flex justify-center p-8 gap-8 text-neutral-400 ${menuOpen ? 'blur select-none overflow-hidden transition-all ease-in' : ''}`}
    >
      <a href="https://twitter.com/lifelessfruit" aria-label="Twitter link">
        <SiTwitter
          size={36}
          className="hover:text-prime-400 transition-colors"
        />
      </a>
      <a href="https://www.linkedin.com/in/chewjunheng/" aria-label="LinkedIn link">
        <SiLinkedin
          size={36}
          className="hover:text-prime-400 transition-colors"
        />
      </a>
      <a href="https://github.com/chew01" aria-label="GitHub link">
        <SiGithub
          size={36}
          className="hover:text-prime-400 transition-colors"
        />
      </a>
    </footer>
  );
}

export default Footer;
