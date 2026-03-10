// src/pages/BlogPage.jsx
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './Blog.css'; // We will create this CSS file next
import { ArticleHeader, ArticleSection, ArticleFooter } from "../components";
import { blogPosts } from '../data/blogPosts';

import styles from "../style"; // Import your styles

const BlogPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Set page title
      document.title = `${post.title} | MomentumSoft Blog`;

      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }

      // Add BlogPosting Schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "datePublished": post.publishedDate,
        "publisher": {
          "@type": "Organization",
          "name": "MomentumSoft",
          "logo": {
            "@type": "ImageObject",
            "url": "https://momentumsoft.in/favicon.svg"
          }
        },
        "description": post.excerpt,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://momentumsoft.in/blog/${post.slug}`
        }
      });
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        document.title = 'MomentumSoft';
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    // We use your Tailwind styles, but add our blog container
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <main className="container text-white">
          <ArticleHeader
            title={post.title}
            author={`By ${post.author} — ${post.authorBio}`}
          />
          {post.sections.map((section, index) => (
            <ArticleSection key={section.title || index} title={section.title}>
              {section.content}
            </ArticleSection>
          ))}
          <ArticleFooter note={post.footerNote} />
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
