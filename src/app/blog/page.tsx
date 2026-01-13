import Link from 'next/link';
import Hero from '../../components/Hero';
import { getAllPosts } from '../../lib/posts';
import { buildMetadata } from '../../lib/metadata';
import { organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'Industrial Coating Insights & Technical Articles | Corro Protection Blog',
  description:
    'Technical articles about corrosion protection, industrial coatings, pipeline systems, and surface preparation. Expert insights from coating professionals.',
  keywords: ['industrial coating articles', 'corrosion prevention', 'pipeline protection blog'],
  url: 'https://corropaints.com/blog',
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Hero
        title="Industrial Coating Insights"
        subtitle="Technical articles on corrosion protection, coating systems, and pipeline solutions."
        ctaText="Request Consultation"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card flex h-full flex-col">
                <p className="text-xs font-semibold uppercase text-secondary">{post.readTime}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">{post.description}</p>
                <p className="mt-3 text-xs text-gray-500">Published: {post.date}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
