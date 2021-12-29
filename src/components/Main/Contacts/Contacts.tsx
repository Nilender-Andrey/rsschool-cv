import React from 'react';
import './Contacts.scss';

function Contacts() {
  return (
    <section
      className="section-narrow section-narrow_first-child"
      id="contacts"
    >
      <h2 className="section__title">contacts</h2>
      <div className="decoration decoration_color_grey" />
      <ul className="contacts-list list">
        <li className="contacts-list__item list__item">
          <span>Samara, Russia</span>
        </li>

        <li className="contacts-list__item list__item">
          Email:{' '}
          <a
            className="contacts-list__link link"
            href="mailto:nilenderav@mail.ru"
          >
            nilenderav@mail.ru
          </a>
        </li>

        <li className="contacts-list__item list__item">
          GitHub:{' '}
          <a
            className="contacts-list__link link"
            href="https://github.com/Nilender-Andrey"
            target="__blank"
          >
            Nilender-Andrey
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
