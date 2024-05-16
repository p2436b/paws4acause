import Image from 'next/image';
import Container from '@/components/Container';
import StatisticsCard from '@/components/StatisticsCard';
import Slider from '@/components/TestimonialSlider';

const statistics = [
	{ title: 'Animals Rescued', value: 180 },
	{ title: 'Adopted', value: 100 },
	{ title: 'Volunteers', value: 200 },
];

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col gap-4'>
			<div className='h-[550px] relative drop-shadow-lg'>
				<Image src='/images/pic_02.jpg' fill alt='' sizes='600px' className='object-cover' />
			</div>
			<Container>
				<article>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Hi!</h2>
					<p className='text-justify leading-loose'>
						Welcome to Paws for a Cause, where compassion meets action in the pursuit of animal welfare. At Paws for a Cause,
						we’re dedicated to providing a safe haven for animals in need, offering a range of services from rescue and medical
						care to volunteer opportunities and fundraising initiatives. Our mission is simple yet profound: to create a world
						where every furry friend receives the love, care, and support they deserve. As an animal shelter with a heart, we
						strive to make a tangible difference in the lives of our beloved companions, ensuring they find forever homes and live
						happy, healthy lives. With your support, we can continue to make a paw-sitive impact on the world, one wagging tail at
						a time. Join us in our mission to make the world a better place for all creatures, great and small.
					</p>
				</article>
				<div className='flex flex-col md:flex-row justify-center gap-8 my-16'>
					{statistics.map((s, i) => (
						<StatisticsCard key={i} title={s.title} value={s.value} />
					))}
				</div>
				<article className='my-16'>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Our Mission</h2>
					<p className='text-justify leading-loose'>
						At Paws for a Cause, our mission is simple yet profound: to provide compassionate care, shelter, and a second chance
						at happiness for animals in need. We are dedicated to rescuing and rehabilitating animals, ensuring their well-being
						through medical care, love, and attention. Our commitment extends beyond just providing a safe haven; we strive to
						find loving forever homes for each animal in our care, matching them with families where they can thrive. We believe
						that every animal deserves to feel loved and cherished, and we work tirelessly to make that belief a reality. Join us
						in our mission to make the world a better place for our furry friends, one paw at a time.
					</p>
				</article>
				<article className='my-16'>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Our Vision</h2>
					<p className='text-justify leading-loose'>
						Our vision is to create a world where every animal is valued, cherished, and treated with dignity and respect. We
						envision a society where no animal is left behind, where they are all given the care and compassion they deserve. We
						strive to be a beacon of hope for animals in need, advocating for their rights and well-being. Our vision encompasses
						a future where every pet has a loving home, every shelter is a sanctuary, and every heart is filled with empathy and
						kindness towards our furry companions. Together, we can build a brighter tomorrow for animals everywhere.
					</p>
				</article>
				<article className='my-16'>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Fundraising Event</h2>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Gala Dinner and Meeting the Furry Friends</h2>
					<h3 className='mb-4 font-semibold'>Date: 20th May 2024</h3>
					<p className='text-justify leading-loose'>
						Join us for an unforgettable evening of elegance and compassion at our Fundraising Gala Dinner, where you&apos;ll have
						the opportunity to meet our furry friends in need of loving homes and can ADOPT too! Indulge in a gourmet dining
						experience, sip on fine wines, and enjoy live entertainment as we come together to support our mission of rescuing and
						rehoming animals. Get to know some of our adorable shelter residents during special meet-and-greet sessions, and learn
						more about how you can make a difference in their lives. Don&apos;t miss this chance to make lasting memories while
						supporting a worthy cause. Reserve your tickets now for an evening of glamour, goodwill, and giving back.
					</p>
				</article>
				<div>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Testimonial</h2>
					<div className='flex justify-center'>
						<Slider />
					</div>
				</div>
			</Container>
		</main>
	);
}
