import React from 'react';
import { NavLink } from 'react-router-dom';

const navList = [
  {
    name: `Contacts`,
    path: '#contacts',
  },
  {
    name: `Summary`,
    path: '#summary',
  },
  {
    name: `Skills`,
    path: '#skills',
  },
  {
    name: `Code`,
    path: '#code',
  },
  {
    name: `Projects`,
    path: '#projects',
  },
  {
    name: `Education`,
    path: '#education',
  },
  {
    name: `English`,
    path: '#english',
  },
];

function List() {
  return (
    <ul className="list">
      {navList.map((item) => (
        <li className="list__item" key={item.name}>
          <NavLink className="link" to={item.path}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default List;
