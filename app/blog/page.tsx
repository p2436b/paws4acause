import React from 'react';
import Container from '@/components/Container';
import PostCard from '@/components/PostCard';

const posts = [
  {
    title: 'How You Can Make a Difference at Paws for a Cause',
    description:
      "Are you ready to make a difference in the lives of animals in need? At Paws for a Cause, we welcome animal lovers from all walks of life to join our pack and become valued members of our compassionate community. Whether you're looking to open your heart and home to a furry friend, roll up your sleeves and volunteer your time, or support our cause through donations, there are countless ways to get involved and make a meaningful impact.",
    href: '/blog/join-our-pack',
    imageUrl: '/images/our_pack.jpg',
    date: '2024/04/18',
  },
  {
    title: 'The Heartwarming Journey of Luna the Cat',
    description:
      'In the heart of our shelter beats countless stories of resilience, each one a testament to the indomitable spirit of the animals we care for. Today, we share with you the inspiring tale of Luna – a courageous feline whose journey from hardship to hope serves as a beacon of strength for us all.',
    href: '/blog/luna-the-cat',
    imageUrl: '/images/luna.jpg',
    date: '2024/04/11',
  },
  {
    title: 'A Journey of Compassion at Paws for a Cause',
    description:
      'In the heart of Paws for a Cause lies a tapestry of compassion, woven together by the dedicated hands and caring hearts of our volunteers. Today, we invite you to step into the shoes of one such volunteer and experience the transformative power of giving back.',
    href: '/blog/volunteers-journey',
    imageUrl: '/images/volunteer.jpg',
    date: '2024/04/16',
  },
];

export default function Blog() {
  return (
    <Container>
      <main className='mt-36 md:mt-10 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <PostCard key={post.href} title={post.title} description={post.description} href={post.href} imageUrl={post.imageUrl} date={post.date}/>
        ))}
      </main>
    </Container>
  );
}
