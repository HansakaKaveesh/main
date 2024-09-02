import React from 'react';
import './Section.css'; // Optional: separate CSS for section

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
