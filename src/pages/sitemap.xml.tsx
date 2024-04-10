import { GetServerSideProps } from 'next';
import { format } from 'date-fns';

// const Sitemap = () => {
//   return null;
// };

// export default Sitemap;

// export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
//   ctx.res.setHeader('Content-Type', 'text/xml');
//   const xml = await generateSitemap();
//   ctx.res.write(xml);
//   ctx.res.end();

//   return {
//     props: {},
//   };
// };

// interface IBlogPost {
//   id: number;
//   title: string;
//   updated_at: Date;
// }

// async function generateSitemap(): Promise<string> {
//   // Generate dummy blog posts
//   const dummyBlogPosts = generateDummyBlogPosts(10); // Adjust the count as needed

//   // Generate XML for the sitemap
//   return `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${dummyBlogPosts
//       .map((post: IBlogPost) => {
//         return `
//         <url>
//           <loc>${getFullPostURL(post.id)}</loc>
//           <lastmod>${format(new Date(post.updated_at), 'yyyy-MM-dd')}</lastmod>
//         </url>`;
//       })
//       .join('')}
//   </urlset>`;
// }

// function generateDummyBlogPosts(count: number): IBlogPost[] {
//   const blogPosts: IBlogPost[] = [];
//   const currentDate = new Date();

//   for (let i = 1; i <= count; i++) {
//     const post: IBlogPost = {
//       id: i,
//       title: `Blog Post ${i}`,
//       updated_at: new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000), // Subtract days from current date
//     };
//     blogPosts.push(post);
//   }

//   return blogPosts;
// }

// function getFullPostURL(postId: number): string {
//   // Replace this with the actual URL pattern for your blog posts
//   return `https://example.com/blog/${postId}`;
// }






const Sitemap = () => {
  return null;
}

export default Sitemap;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  ctx.res.setHeader('Content-Type', 'text/xml');
  const xml = await generateSitemap();
  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {}
  };
}

async function generateSitemap(): Promise<string> {
  // List of existing page URLs on your website
  const pageUrls = [
    'https://jlogistics.in/',
    'https://jlogistics.in/about',
    'https://jlogistics.in/services',
    'https://jlogistics.in/contact',
    'https://jlogistics.in/blog',
    'https://jlogistics.in/clearance',
    'https://jlogistics.in/delivering',
    'https://jlogistics.in/entrepreneurs',
    'https://jlogistics.in/freightForwarding',
    'https://jlogistics.in/warehouse',
    // Add more page URLs as needed
  ];

  // Generate XML for the sitemap
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pageUrls
      .map((url: string) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
          </url>`;
      })
      .join('')}
    </urlset>`;
}

