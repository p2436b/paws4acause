import BlogFeatureImage from '@/components/BlogFeatureImage';
import Container from '@/components/Container';

export default function Blog() {
	return (
		<Container>
			<main className='mt-12'>
				<article className='text-justify text-lg leading-loose'>
					<BlogFeatureImage imageUrl='/images/b-2-1.jpg' />
					<h1 className='text-3xl font-semibold text-center mb-14'>
						A Tale of Resilience: The Heartwarming Journey of Luna the Cat
					</h1>
					<p>
						In the heart of our shelter beats countless stories of resilience, each one a testament to the indomitable spirit of
						the animals we care for. Today, we share with you the inspiring tale of Luna – a courageous feline whose journey from
						hardship to hope serves as a beacon of strength for us all.
					</p>
					<p>
						Luna&apos;s story begins in the midst of adversity. Found wandering the streets alone, hungry, and scared, she bore
						the scars of a life marked by hardship. With matted fur and weary eyes, Luna&apos;s fragile frame belied the fierce
						determination that burned within her. But despite her challenges, Luna refused to surrender to despair.
					</p>
					<p>
						When Luna arrived at our shelter, she was greeted with open arms and gentle hands, each one eager to offer her the
						love and care she so desperately needed. Our team worked tirelessly to nurse Luna back to health, providing her with
						nourishment, warmth, and, most importantly, a sense of security.
					</p>
					<p>
						As the days turned into weeks, Luna began to blossom before our eyes. With each passing day, her once-fearful demeanor
						gave way to newfound confidence and trust. She reveled in the affection of our volunteers, basking in the warmth of
						their love and companionship.
					</p>
					<p>
						But Luna&apos;s journey was far from over. Despite the obstacles she faced, Luna remained resilient, her spirit
						unbroken. And then, one fateful day, Luna&apos;s perseverance was rewarded – she found her forever home.
					</p>
					<p>
						Today, Luna is thriving in the loving embrace of her new family. With each playful leap and contented purr, she serves
						as a reminder of the transformative power of love and compassion. Luna&apos;s story is a testament to the resilience
						of the animals we serve and the profound impact that kindness can have on their lives.
					</p>
					<p>
						As we celebrate Luna&apos;s journey, we are reminded of the countless animals still in need of our help. Their stories
						may be different, but their spirits are equally resilient. With your support, we can continue to provide hope,
						healing, and second chances to animals in need, one life at a time.
					</p>
					<p>
						Join us in celebrating Luna&apos;s triumph and honoring the countless animals whose journeys have yet to unfold.
						Together, we can make a difference – one rescue story, one life, at a time.
					</p>
				</article>
			</main>
		</Container>
	);
}
