import React from 'react';
import Contacts from './Contacts/Contacts';
import Summary from './Summary/Summary';
import './Main.scss';
import Skills from './Skills/Skills';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Courses from './Courses/Courses';
import Languages from './Languages/Languages';
import Education from './Education/Education';

function Main() {
  return (
    <main className="main">
      <Profile />
      <div className="container">
        <Contacts />
        <Summary />
        <Skills />
        <Projects />
        <Languages />
        <Courses />
        <Education />
      </div>
    </main>
  );
}

export default Main;
