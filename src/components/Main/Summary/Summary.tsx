import React from 'react';
import './Summary.scss';

function Summary() {
  return (
    <section
      className="section-broad section-broad_positioning_column section-broad_first-child"
      id="summary"
    >
      <h2 className="section__title">summary</h2>
      <p className="section__text">
        Completed the course in front-end development (&quot;RS School&quot;
        course &quot;JS/FRONT-END&quot;) and additionally the course on
        &quot;React&quot; library (&quot;ReactJS&quot; in &quot;ItGid&quot;).
      </p>
      <p className="section__text">
        At the moment I am in an active job search, if you have any offers ready
        to consider them.
      </p>
      <p className="section__text">And yes I really like programming.</p>
    </section>
  );
}

export default Summary;
