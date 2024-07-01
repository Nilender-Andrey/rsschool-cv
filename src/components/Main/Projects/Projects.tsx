import React from 'react';
import Efk from '../../../assets/2021-09-27_18-38-59.jpg';
import game2048 from '../../../assets/2024-07-01_13-47-56.jpg';
import findACouple from '../../../assets/match_match_game.jpg';
import './Projects.scss';

const projects = [
  {
    to: 'https://nilender-andrey.github.io/JavaScript/game_2048/index.html',
    src: game2048,
    name: 'Game 2048',
  },
  {
    to: 'https://rolling-scopes-school.github.io/nilender-andrey-JSFE2021Q1/english-for-kids-base/dist/',
    src: Efk,
    name: 'English for kids',
  },
  {
    to: 'https://rolling-scopes-school.github.io/nilender-andrey-JSFE2021Q1/match-match-game/dist/',
    src: findACouple,
    name: 'Find a couple',
  },
];

function Projects() {
  return (
    <section className="section-broad" id="projects">
      <h2 className="subtitle">projects</h2>
      <div className="decoration decoration_color_dark-grey" />
      <ul className="projects-list list">
        {projects.map((item) => (
          <li className="projects-list__item" key={item.name}>
            <a
              className="projects-list__link"
              href={item.to}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects-list__jmg"
                src={item.src}
                alt={item.name}
              />
            </a>
            <p className="projects-list__name">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
