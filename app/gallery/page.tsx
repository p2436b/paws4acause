import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import Container from '../components/Container';

export default function Gallery() {
  return (
    <Container>
      <main className='mt-10'>
        <PhotoGallery />
      </main>
    </Container>
  );
}
