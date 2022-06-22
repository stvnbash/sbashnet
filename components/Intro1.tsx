import Link from 'next/link';
import Image from 'next/image'
import Socials from './Socials';
import TypeIt from "typeit-react";
import { motion } from "framer-motion"

export default function Intro() {
    const variants = {
        hidden: {
            opacity: 0.0,
            // y: -40,
            y: -1000,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                // type: 'tween',
                // duration: 1,
                // delay: 2.75,
                // type: "spring",
                // bounce: .4,
                delay: 3.0,
                when: "beforeChildren",
                delayChildren: 0.0,
                staggerChildren: 0.0,
            }
        }
    }
    return (
        <div className=''>
            <h3 className='text-xl sm:text-2xl lg:text-4xl'>
                {/* Hello, world!  I am */}
                <TypeIt options={{ speed: 75, deleteSpeed: 50, lifeLike: true, cursor: true, waitUntilVisible: false, cursorSpeed: 1500 }}
                    getBeforeInit={(instance) => {
                        instance.type("Hello, wordl").pause(336).delete(2).pause(336).type("ld!  I am ");
                        // instance.type("H").pause(232).type("e").pause(121).type("l").pause(159).type("l")
                        // .pause(185).type("o").pause(209).type(",").pause(71).type(" ").pause(440).type("w")
                        // .pause(113).type("o").pause(136).type("r").pause(256).type("d").pause(135).type("l")
                        // .pause(336).delete(1).pause(152).delete(1).pause(336).type("l").pause(128).type("d")
                        // .pause(473).type("!").pause(240).type(" ").pause(151).type(" ").pause(160).type("I")
                        // .pause(296).type(" ").pause(240).type("a").pause(80).type("m").pause(71).type(" ")

                        // Remember to return it!
                        return instance;
                    }}
                />
            </h3>
            {/* <motion.div initial={{opacity: 0.0, y:-40}} animate={{opacity: 1, y:0}} transition={{type: 'tween', duration: 1, delay: 2.75, when: "beforeChildren", delayChildren: 0.1, staggerChildren: 0.3}}> */}
            <motion.div initial="hidden" animate="visible" variants={variants}>
                {/* <h1 className='text-5xl sm:text-6xl lg:text-8xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Steven Bash</h1> */}
                <motion.h1 className='text-5xl sm:text-6xl lg:text-8xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-yellowgreen1 to-turquoise1'>Steven Bash</motion.h1>
                {/* I strive to create impactful change and strategize for organizational efficiency.   */}
                <motion.h2 className='text-xl sm:text-2xl lg:text-4xl'>I study Computer Science at UCLA.</motion.h2>
                <br />
                <Socials />
            </motion.div>
        </div>
    )
}