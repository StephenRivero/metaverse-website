'use client';

import { motion } from 'framer-motion';

import styles from '../styles'; 
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pt-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8 items-center`}>
      {/* <img 
        src="/search.svg" 
        alt="search icon image"
        className='w-[24px] h-[24px] object-contain' 
      /> */}
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white mb-[2px]'>
        METAVERSUS
      </h2>
      <img 
        src="/menu.svg" 
        alt="menu icon" 
        className='w-[24px] h-[24px] object-contain mt-[2px] ml-auto'
      />
    </div>
  </motion.nav>
);

export default Navbar;
