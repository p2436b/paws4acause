'use client'

import { motion } from "framer-motion";

export default function StatisticsCard({title, value}:{title:string, value:number}) {
  return (
    <div className='flex flex-col justify-center items-center border-2 rounded-xl p-4 min-w-52 min-h-52 z-10 bg-white overflow-hidden'>
      <motion.p initial={{opacity:0 }} animate={{opacity:1}}  className="mb-6 text-xl">{title}</motion.p>
      <p className="text-4xl font-semibold">{value}+</p>
    </div>
  )
}
