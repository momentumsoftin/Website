// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts (you'll need to adjust path)
const blogPostsPath = path.join(__dirname, '../src/data/blogPosts.js');
let blogPosts = [];

try {
    // Dynamic import for ES modules
    const module = await import(blogPostsPath);
    blogPosts = module.blogPosts || [];
} catch (error) {
    console.log('No blog posts found, generating sitemap without them');
}

const baseUrl = 'https://momentumsoft.in';

// Define your routes with priority and change frequency
const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms', priority: '0.5', changefreq: 'yearly' },
];

// Generate blog post URLs
const blogRoutes = blogPosts.map(post => ({
    path: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.publishedDate
}));

const allRoutes = [...staticRoutes, ...blogRoutes];

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public folder
const publicPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, sitemap);

console.log('✅ Sitemap generated successfully at public/sitemap.xml');
console.log(`📊 Total URLs: ${allRoutes.length} (${staticRoutes.length} static + ${blogRoutes.length} blog posts)`);
