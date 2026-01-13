import { notFound } from 'next/navigation';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  try {
    const post = await getPostBySlug(params.slug);
    return buildMetadata({
      title: post.title,
      description: post.description,
      keywords: [post.title, 'industrial coating', 'corrosion'],
      url: `https://corropaints.com/blog/${params.slug}`,
    });
  } catch {
    return buildMetadata({
      title: 'Article | Corro Protection',
      description: 'Industrial coating article',
      keywords: ['industrial coating'],
      url: 'https://corropaints.com/blog',
    });
  }
}

export default async function BlogPostPage({ params }: Params) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Hero
        title={post.title}
        subtitle={post.description}
        ctaText="Request Consultation"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-content">
          <p className="text-sm text-gray-600">Published: {post.date} · {post.readTime}</p>
          <div
            className="mt-4 space-y-4 text-gray-800 [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: post.title,
              description: post.description,
              image: 'https://corropaints.com/images/hero-pipeline.webp',
              date: post.date,
            })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
