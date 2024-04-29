'use client';

import { animate, motion, motionValue, useInView, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function StatisticsCard({ title, value }: { title: string; value: number }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const count = motionValue(0);
	const rounded = useTransform(count, Math.round);

	useEffect(() => {
		if (isInView) animate(count, value, { ease: 'easeInOut', duration: 2 });
	}, [count, isInView, value]);

	return (
		<div className='relative flex flex-col justify-center items-center border-2 rounded-xl min-w-52 min-h-52 z-10 bg-white overflow-hidden shadow-md'>
			<motion.div
				whileInView={{ scaleY: [0, 1], transition: { duration: 2, ease: 'easeInOut' } }}
				viewport={{ once: true }}
				className='absolute bg-gradient-to-br from-pink-300 to-fuchsia-500 inset-0 origin-bottom'></motion.div>
			<p className='mb-6 text-xl z-10 font-semibold'>{title}</p>
			<motion.p ref={ref} className='text-5xl font-semibold z-10 drop-shadow'>
				{rounded}
			</motion.p>
		</div>
	);
}
