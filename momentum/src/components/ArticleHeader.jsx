import React from 'react';

const ArticleHeader = ({ title, author }) => (
  <header>
    <h1>{title}</h1>
    <p className="author">{author}</p>
  </header>
);

export default ArticleHeader;