import React from 'react';
import { Link } from 'react-scroll';

const navList = [
  {
    name: `Contacts`,
    path: 'contacts',
  },
  {
    name: `Summary`,
    path: 'summary',
  },
  {
    name: `Skills`,
    path: 'skills',
  },
  {
    name: `Projects`,
    path: 'projects',
  },
  {
    name: `Education`,
    path: 'education',
  },
  {
    name: `Courses`,
    path: 'courses',
  },
  {
    name: `Languages`,
    path: 'languages',
  },
];

interface IList {
  position: string;
}

function List({ position }: IList) {
  return (
    <ul className="nav-list">
      {position === 'nav_vertically' && (
        <li className="nav-list__item">
          <Link
            className="nav-list__arrow"
            to="header"
            offset={-100}
            smooth
            duration={500}
          >
            🠖
          </Link>
        </li>
      )}
      {navList.map((item) => (
        <li className="nav-list__item" key={item.name}>
          <Link
            className="nav-list__link"
            to={item.path}
            offset={-100}
            smooth
            duration={500}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
