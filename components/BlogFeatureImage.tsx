'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BlogFeatureImage({ imageUrl }: { imageUrl: string }) {
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
				scale: [0.8, , 1.2, 1, 1.1, 1],
			}}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className='relative h-96 rounded-tl-3xl rounded-br-3xl overflow-hidden mb-8'>
			<Image className='object-cover' fill src={imageUrl} alt='Feature image' />
		</motion.div>
	);
}
