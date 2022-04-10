import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiJava,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiMongodb,
} from 'react-icons/si';
import './index.css';

function Hex() {
  return (
    <div className="hexagon-container">
      <div className="hexagon color-blank" />
      <div className="hexagon color-typescript">
        <SiTypescript size={48} />
      </div>
      <div className="hexagon color-node">
        <SiNodedotjs size={48} />
      </div>
      <div className="hexagon color-css">
        <SiCss3 size={48} />
      </div>
      <div className="hexagon color-git">
        <SiGit size={48} />
      </div>
      <div className="hexagon color-postgres">
        <SiPostgresql size={48} />
      </div>
      <div className="hexagon color-tailwind">
        <SiTailwindcss size={48} />
      </div>
      <div className="hexagon color-blank" />
      <div className="hexagon color-blank" />
      <div className="hexagon color-react">
        <SiReact size={48} />
      </div>
      <div className="hexagon color-javascript">
        <SiJavascript size={48} />
      </div>
      <div className="hexagon color-java">
        <SiJava size={48} />
      </div>
      <div className="hexagon color-mongo">
        <SiMongodb size={48} />
      </div>
      <div className="hexagon color-docker">
        <SiDocker size={48} />
      </div>
      <div className="hexagon color-html">
        <SiHtml5 size={48} />
      </div>
    </div>
  );
}

export default Hex;
