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
		date: '2024/03/16',
	},
	{
		title: 'Expert Advice: Elevating Your Pet Care Game',
		description:
			"Today we bring you expert insights to elevate your pet care practices. We're privileged to tap into the expertise of Dr. Olivia Smith, a seasoned veterinarian with over two decades of experience in small animal care",
		href: '/blog/elevating-your-pet-care',
		imageUrl: '/images/b-4-1.jpg',
		date: '2024/04/16',
	},
	{
		title: 'Paws-itively Perfect: Mastering Pet Training Techniques',
		description:
			"We will unleash the secrets to mastering pet training techniques. Whether you're teaching your pup basic manners or refining advanced tricks, we've got you covered with expert tips and strategies to achieve paw-some results!",
		href: '/blog/mastering-pet-training-techniques',
		imageUrl: '/images/b-5-1.jpg',
		date: '2024/04/01',
	},
	{
		title: 'Paws for a Cause Carnival: A Day of Fun, Games, and Furry Friends!',
		description:
			"At Paws for a Cause, we're always looking for creative ways to bring our community together in support of our furry friends. Recently, we hosted a spectacular event that combined fun-filled carnival activities with the opportunity to interact with adorable animals, all in the spirit of raising awareness and support for pet adoption and welfare.",
		href: '/blog/a-day-of-fun-games-and-furry-friends',
		imageUrl: '/images/b-6-1.jpg',
		date: '2024/04/08',
	},
	{
		title: 'From Stray to Family: The Story of Max',
		description:
			"In the heart of our bustling city, amidst the noise and chaos of urban life, there was a lone figure wandering the streets a scruffy dog named Max. With a coat matted and dirt-streaked, and eyes filled with longing, Max's journey was a testament to resilience in the face of adversity.",
		href: '/blog/the-story-of-max',
		imageUrl: '/images/b-7-1.jpeg',
		date: '2024/04/8',
	},
	{
		title: 'Paws for a Cause Q & A: Your Burning Questions, Answered!',
		description:
			"Welcome to Paws for a Cause Q & A, where we address your most pressing questions about pet care, adoption, and everything in between! Our team of experts is here to provide valuable insights and advice to help you become the best pet parent you can be. Let's dive into your burning questions and get the answers you've been searching for!",
		href: '/blog/your-burning-questions-answered',
		imageUrl: '/images/b-8-1.jpg',
		date: '2024/04/21',
	},
	{
		title: 'Net to Leash: A Sustainable Twist on Pet Accessories',
		description:
			"At Paws for a Cause, we're committed to making a positive impact on the environment while providing high-quality products for our beloved pets. That's why we're excited to announce the upcoming launch of our latest innovation: leashes made from recycled fishing nets.",
		href: '/blog/a-sustainable-twist-on-pet-accessories',
		imageUrl: '/images/b-9-1.jpg',
		date: '2024/04/27',
	},
	{
		title: 'Finding Furry Friends: Your Ultimate Pet Adoption Guide!',
		description:
			"Are you ready to embark on a journey filled with wagging tails, playful purrs, and unconditional love? If you've ever considered bringing a furry friend into your life, look no further than pet adoption! Not only does adoption save lives, but it also opens the door to a world of joy and companionship like no other.",
		href: '/blog/your-ultimate-pet-adoption-guide',
		imageUrl: '/images/b-10-1.jpg',
		date: '2024/05/02',
	},
	{
		title: 'Wagging Tails and Heartfelt Smiles',
		description:
			"Welcome to the world of compassion, dedication, and endless paw prints – the life of a volunteer at Paws for a Cause! Ever wondered what it's like to spend a day in the company of furry friends, making a difference one wag at a time? Join us as we take you on a journey through the pawsitive experiences and heartwarming moments that define a typical day in the life of a volunteer.",
		href: '/blog/wagging-tails-and-heartfelt-smiles',
		imageUrl: '/images/b-11-1.jpg',
		date: '2024/05/14',
	},
];

export default function Blog() {
	return (
		<Container>
			<main className='mt-36 md:mt-10 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{posts.map((post) => (
					<PostCard
						key={post.href}
						title={post.title}
						description={post.description}
						href={post.href}
						imageUrl={post.imageUrl}
						date={post.date}
					/>
				))}
			</main>
		</Container>
	);
}
