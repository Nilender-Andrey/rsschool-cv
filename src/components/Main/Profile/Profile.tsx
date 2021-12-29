import React from 'react';
import './Pofile.scss';

function Profile() {
  return (
    <section className="section-profile section_positioning_row">
      <div className="avatar">
        <div className="avatar__photo" />
      </div>

      <div className="profile">
        <h1 className="profile__title">Andrey Nilender</h1>
        <div className="decoration" />
        <h3 className="profile__profession">
          Junior JavaScript / React developer
        </h3>
      </div>
    </section>
  );
}

export default Profile;
