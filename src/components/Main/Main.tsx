import React from 'react';

import myPhoto from '../../assets/my-photo.jpg';

import './Main.scss';

function Main() {
  return (
    <main className="main">
      <section className="about">
        <div className="avatar avatar_position">
          <img className="avatar__photo" src={myPhoto} alt="" />
        </div>
      </section>
      <section className="skills">skills</section>
    </main>
  );
}

export default Main;
