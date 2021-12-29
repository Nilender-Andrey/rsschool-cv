import React from 'react';

const courses = [
  {
    school: 'The Rolling Scopes School',
    courseName: 'JAVASCRIPT/FRONT-END',
    certificate_link:
      'https://app.rs.school/certificate/9t3d17an?hhtmFrom=resume',
  },
  {
    school: 'ItGid',
    courseName: 'ReactJS',
    certificate_link:
      'https://itgid.info/certificate/view?Certificate%5Buid%5D=ptqs34u9u6&hhtmFrom=resume',
  },
];

function Courses() {
  return (
    <section
      className="section-broad section-broad_positioning_column"
      id="courses"
    >
      <h2 className="section__title">courses</h2>
      <ul className="courses-list list">
        {courses.map((item) => (
          <li className="courses-list__item">
            {item.school}:{' '}
            <a className="courses-list__link link" href={item.certificate_link}>
              {item.courseName}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;
