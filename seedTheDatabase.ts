import { getPayload } from 'payload';
import config from '@payload-config';
const categories = [
  {
    name: 'All',
    slug: 'all',
  },
  {
    name: 'Business & Money',
    color: '#a7c957', // Light Olive Green
    slug: 'business-money',
    subcategories: [
      { name: 'Accounting', slug: 'accounting' },
      {
        name: 'Entrepreneurship',
        slug: 'entrepreneurship',
      },
      { name: 'Gigs & Side Projects', slug: 'gigs-side-projects' },
      { name: 'Investing', slug: 'investing' },
      { name: 'Management & Leadership', slug: 'management-leadership' },
      {
        name: 'Marketing & Sales',
        slug: 'marketing-sales',
      },
      { name: 'Networking, Careers & Jobs', slug: 'networking-careers-jobs' },
      { name: 'Personal Finance', slug: 'personal-finance' },
      { name: 'Real Estate', slug: 'real-estate' },
    ],
  },
  {
    name: 'Software Development',
    color: '#76c893', // Soft Teal
    slug: 'software-dev',
    subcategories: [
      { name: 'Web Development', slug: 'web-development' },
      { name: 'Mobile Development', slug: 'mobile-development' },
      { name: 'Game Development', slug: 'game-development' },
      { name: 'Programming Languages', slug: 'programming-languages' },
      { name: 'DevOps', slug: 'devops' },
    ],
  },
  {
    name: 'Writing & Publishing',
    color: '#6a4c93', // Dusty Lavender
    slug: 'writing-publishing',
    subcategories: [
      { name: 'Fiction', slug: 'fiction' },
      { name: 'Non-Fiction', slug: 'non-fiction' },
      { name: 'Blogging', slug: 'blogging' },
      { name: 'Copywriting', slug: 'copywriting' },
      { name: 'Self-Publishing', slug: 'self-publishing' },
    ],
  },
  {
    name: 'Other',
    slug: 'other',
  },
  {
    name: 'Education',
    color: '#f2e5d4', // Light Beige
    slug: 'education',
    subcategories: [
      { name: 'Online Courses', slug: 'online-courses' },
      { name: 'Tutoring', slug: 'tutoring' },
      { name: 'Test Preparation', slug: 'test-preparation' },
      { name: 'Language Learning', slug: 'language-learning' },
    ],
  },
  {
    name: 'Self Improvement',
    color: '#ced4da', // Soft Grayish Blue
    slug: 'self-improvement',
    subcategories: [
      { name: 'Productivity', slug: 'productivity' },
      { name: 'Personal Development', slug: 'personal-development' },
      { name: 'Mindfulness', slug: 'mindfulness' },
      { name: 'Career Growth', slug: 'career-growth' },
    ],
  },
  {
    name: 'Fitness & Health',
    color: '#e45858', // Soft Coral
    slug: 'fitness-health',
    subcategories: [
      { name: 'Workout Plans', slug: 'workout-plans' },
      { name: 'Nutrition', slug: 'nutrition' },
      { name: 'Mental Health', slug: 'mental-health' },
      { name: 'Yoga', slug: 'yoga' },
    ],
  },
  {
    name: 'Design',
    color: '#457b9d', // Muted Blue
    slug: 'design',
    subcategories: [
      { name: 'UI/UX', slug: 'ui-ux' },
      { name: 'Graphic Design', slug: 'graphic-design' },
      { name: '3D Modeling', slug: '3d-modeling' },
      { name: 'Typography', slug: 'typography' },
    ],
  },
  {
    name: 'Drawing & Painting',
    color: '#f4a261', // Pale Orange
    slug: 'drawing-painting',
    subcategories: [
      { name: 'Watercolor', slug: 'watercolor' },
      { name: 'Acrylic', slug: 'acrylic' },
      { name: 'Oil', slug: 'oil' },
      { name: 'Pastel', slug: 'pastel' },
      { name: 'Charcoal', slug: 'charcoal' },
    ],
  },
  {
    name: 'Music',
    color: '#ffe0b2', // Light Tan
    slug: 'music',
    subcategories: [
      { name: 'Songwriting', slug: 'songwriting' },
      { name: 'Music Production', slug: 'music-production' },
      { name: 'Music Theory', slug: 'music-theory' },
      { name: 'Music History', slug: 'music-history' },
    ],
  },
  {
    name: 'Photography',
    color: '#8ac926', // Bright Lime Green (softened)
    slug: 'photography',
    subcategories: [
      { name: 'Portrait', slug: 'portrait' },
      { name: 'Landscape', slug: 'landscape' },
      { name: 'Street Photography', slug: 'street-photography' },
      { name: 'Nature', slug: 'nature' },
      { name: 'Macro', slug: 'macro' },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({ config });
  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: 'categories',
      data: {
        name: category.name,
        slug: `slug_${category.slug}`,
        color: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: 'categories',
        data: {
          name: subCategory.name,
          slug: `slug_${subCategory.slug}`,
          parent: parentCategory.id,
        },
      });
    }
  }
};

await seed();
process.exit(0);
