import React from 'react';

const ArticleSection = ({ title, children }) => (
  <section className="section">
    {title && <h2>{title}</h2>}
    {Array.isArray(children) ? (
      <ul>
        {children.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{children}</p>
    )}
  </section>
);

export default ArticleSection;
