import Container from '@/components/Container';
import StatisticsCard from '@/components/StatisticsCard';

const statistics = [
	{ title: 'Adopted', value: 68 },
	{ title: 'Still at Shelter', value: 32 },
];

export default function AdoptDonate() {
	return (
		<Container>
			<main className='mt-36 md:mt-10'>
				<article className='text-justify leading-loose'>
					<h2 className='text-purple-800 text-4xl font-semibold mb-4'>Adopt & Donate</h2>
					<div className='flex flex-col gap-4 mb-4'>
						{statistics.map((s, i) => (
							<StatisticsCard key={i} title={s.title} value={s.value} percent />
						))}
					</div>
					<p>
						At Paws For a Cause, you have the opportunity to change lives by adopting, donating, or sponsoring an animal in need.
						Adoption is a beautiful journey where you open your heart and home to a furry friend in search of love and
						companionship. Our shelter houses a diverse range of animals eagerly awaiting their forever homes, from playful
						puppies and cuddly kittens to wise senior pets. If you’re ready to welcome a new member into your family, explore our
						adoption process and meet the adorable animals available for adoption.
					</p>
					<p>
						For those who may not be able to adopt but still wish to make a difference, donating or sponsoring an animal is
						another impactful way to support our cause. Your generous contributions help cover the costs of food, shelter, medical
						care, and other essentials for our animals. You can make a one-time donation or become a monthly donor, ensuring a
						steady stream of support for our furry residents. Additionally, sponsoring an animal provides ongoing assistance to a
						specific furry friend, offering them the care and attention they need while they wait for their forever home.
					</p>
					<p>
						Volunteering at our shelter is yet another invaluable way to contribute to our mission. Whether you’re walking dogs,
						socializing with cats, assisting with cleaning and feeding, or helping with administrative tasks, your time and
						dedication make a world of difference. Volunteers are the backbone of our organization, providing love, care, and
						support to our animals each day.
					</p>
					<p>
						No matter how you choose to get involved, your support is crucial in helping us continue our lifesaving work.
						Together, we can make a meaningful impact in the lives of animals and create a brighter future for them. Join us in
						our mission to provide a second chance to those who need it most.
					</p>
				</article>
			</main>
		</Container>
	);
}
