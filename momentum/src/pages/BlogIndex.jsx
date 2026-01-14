// src/pages/BlogIndex.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import styles from '../style';

const BlogIndex = () => {
    useEffect(() => {
        document.title = 'Blog | MomentumSoft';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Insights on sales technology, field force automation, and business intelligence from MomentumSoft experts.');
        }
    }, []);

    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="py-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="font-poppins font-semibold text-[52px] text-white leading-[75px] mb-4">
                            MomentumSoft <span className="text-gradient">Blog</span>
                        </h1>
                        <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
                            Insights on sales technology, field automation, and business intelligence.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group block"
                            >
                                <div className="bg-black-gradient rounded-[20px] p-6 border border-gray-800 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col">
                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-blue-gradient rounded-full text-primary text-sm font-poppins font-medium">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="font-poppins font-semibold text-[24px] text-white leading-[32px] mb-3 group-hover:text-gradient transition-colors">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className={`${styles.paragraph} mb-4 flex-grow`}>
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                                                {post.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-poppins font-medium">{post.author}</p>
                                                <p className="text-dimWhite text-xs">{post.publishedDate}</p>
                                            </div>
                                        </div>
                                        <span className="text-dimWhite text-sm">{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State for Future Posts */}
                    {blogPosts.length === 0 && (
                        <div className="text-center py-16">
                            <p className={`${styles.paragraph} text-xl`}>
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogIndex;
