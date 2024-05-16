/* eslint-disable react/no-unescaped-entities */
import BlogFeatureImage from '@/components/BlogFeatureImage';
import Container from '@/components/Container';

export default function page() {
	return (
		<Container>
			<main className='mt-12'>
				<article className='text-justify text-lg leading-loose'>
					<BlogFeatureImage imageUrl='/images/b-9-2.jpg' />
					<h1 className='text-3xl font-semibold text-center mb-14'>Net to Leash: A Sustainable Twist on Pet Accessories</h1>
					<p>
						At Paws for a Cause, we're committed to making a positive impact on the environment while providing high-quality
						products for our beloved pets. That's why we're excited to announce the upcoming launch of our latest innovation:
						leashes made from recycled fishing nets. With "Net to Leash," we're transforming waste into eco-friendly pet
						accessories that are as stylish as they are sustainable.
					</p>
					<h2 className='text-xl font-semibold mt-4'>The Problem:</h2>
					<p>
						The fishing industry generates a significant amount of waste in the form of discarded fishing nets, which pose a
						serious threat to marine life and ecosystems. These nets, often made of non-biodegradable materials, can persist in
						the environment for decades, entangling marine animals and contributing to ocean pollution.
					</p>
					<h2 className='text-xl font-semibold mt-4'>Our Solution:</h2>
					<p>
						"Net to Leash" solves this environmental challenge by repurposing discarded fishing nets into durable and stylish pet
						leashes. By collecting and recycling these nets, we're not only reducing plastic waste in our oceans but also giving
						new life to materials that would otherwise harm marine life.
					</p>
					<h2 className='text-xl font-semibold mt-4'>Key Features:</h2>
					<ul className='list-disc'>
						<li>
							Sustainability: Each "Net to Leash" is made from recycled fishing nets, helping to reduce plastic pollution and
							conserve natural resources.
						</li>
						<li>
							Durability: Despite being eco-friendly, our leashes are designed to withstand the rigors of daily use, ensuring
							long-lasting performance.
						</li>
						<li>
							Style: With a range of colors and designs inspired by the ocean, "Net to Leash" combines fashion with functionality,
							allowing pets and their owners to make a statement while promoting sustainability.
						</li>
					</ul>
					<p>
						We're excited to announce that "Net to Leash" will be launching soon, and we can't wait to share this innovative
						product with pet lovers everywhere. Stay tuned for updates on our website and social media channels as we prepare to
						unveil our eco-friendly pet accessories.
					</p>
					<h2 className='text-xl font-semibold mt-4'>Join Us in Making a Difference</h2>
					<p>
						By choosing "Net to Leash" for your pet's daily walks, you're not only investing in a high-quality product but also
						supporting our mission to protect the planet and its precious marine ecosystems. Together, we can make a
						difference—one leash at a time. With "Net to Leash," we're turning waste into wonder, offering pet owners a
						sustainable alternative to traditional pet accessories. Join us in our commitment to sustainability and style, and
						together, let's make a positive impact on the environment while pampering our pets with products that are as
						eco-conscious as they are chic.
					</p>
				</article>
			</main>
		</Container>
	);
}
