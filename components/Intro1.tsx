import Link from 'next/link';
import Image from 'next/image'
import Socials from './Socials';
import TypeIt from "typeit-react";
import { motion } from "framer-motion"
// import Typist from "react-typist";
import {TiDocumentText} from "react-icons/ti"

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
                delay: 2.65,
                when: "beforeChildren",
                delayChildren: 0.2,
                staggerChildren: 0.0,
            }
        }
    }
    const subtitle = {
        hidden: { opacity: 0, },
        visible: { opacity: 1 }
    }
    return (
        <div className=''>
            <h3 className='text-xl sm:text-2xl lg:text-4xl'>
                {/* Hello, world!  I am */}
                <TypeIt options={{ speed: 50, deleteSpeed: 50, lifeLike: true, cursor: true, waitUntilVisible: false, cursorSpeed: 1500 }}
                    getBeforeInit={(instance) => {
                        // instance.type("Hello, wordl").pause(336).delete(2).pause(336).type("ld!  I am ");
                        instance.type("Hello, wodr").pause(336).delete(2).pause(336).type("rld!  I am ");
                        // instance.type("Hello, I ").pause(336).delete(2).pause(336).type("world!  I am ");
                        // instance.type("H").pause(232).type("e").pause(121).type("l").pause(159).type("l")
                        // .pause(185).type("o").pause(209).type(",").pause(71).type(" ").pause(440).type("w")
                        // .pause(113).type("o").pause(136).type("r").pause(256).type("d").pause(135).type("l")
                        // .pause(336).delete(1).pause(152).delete(1).pause(336).type("l").pause(128).type("d")
                        // .pause(473).type("!").pause(240).type(" ").pause(151).type(" ").pause(160).type("I")
                        // .pause(296).type(" ").pause(240).type("a").pause(80).type("m").pause(71).type(" ")

                        // Remember to return it!
                        return instance;
                    }}
                // getAfterInit={(instance) => {
                //     // while(!instance.is('completed')){

                //     //     // console.log(instance.is('completed'))
                //     // }
                //     console.log(instance.is('completed'))
                //     instance.destroy();
                //     return instance;
                // }}
                />
                {/* <Typist>
                    Hi
                </Typist> */}

            </h3>
            {/* <motion.div initial={{opacity: 0.0, y:-40}} animate={{opacity: 1, y:0}} transition={{type: 'tween', duration: 1, delay: 2.75, when: "beforeChildren", delayChildren: 0.1, staggerChildren: 0.3}}> */}
            <motion.div initial="hidden" animate="visible" variants={variants}>
                {/* <h1 className='text-5xl sm:text-6xl lg:text-8xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Steven Bash</h1> */}
                <motion.h1 key="Name" className='text-5xl sm:text-6xl lg:text-8xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-yellowgreen1 to-turquoise1'>Steven Bash</motion.h1>
                {/* I strive to create impactful change and strategize for organizational efficiency.   */}
                <motion.h2 variants={subtitle} className='text-xl sm:text-2xl lg:text-4xl'>I study Computer Science at UCLA.</motion.h2>
                <br />
                <Socials />
                <br />
                <Link href={'/resume'} passHref>
                    <motion.a variants={subtitle} className="flex items-center gap-2 font-normal text-text1 inline-block rounded-lg hover:text-yellow1 transition-all text-lg focus-visible:outline-none focus-visible:ring ring-offset-navy1 ring-offset-4 ring-red1">
                        {/* <svg className="w-[40px] font-normal text-text1 inline-block rounded-lg hover:text-yellow1 transition-all text-lg focus-visible:outline-none focus-visible:ring ring-offset-navy1 ring-offset-4 ring-red1" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 4.5V25.5C6.5 26.0523 6.94772 26.5 7.5 26.5H22.5C23.0523 26.5 23.5 26.0523 23.5 25.5V7.91421C23.5 7.649 23.3946 7.39464 23.2071 7.20711L19.7929 3.79289C19.6054 3.60536 19.351 3.5 19.0858 3.5H7.5C6.94772 3.5 6.5 3.94772 6.5 4.5ZM16.5 12.5H9.5V10.5H16.5V12.5ZM20.5 15.5H9.5V13.5H20.5V15.5ZM9.5 18.5H20.5V16.5H9.5V18.5ZM20.5 21.5H9.5V19.5H20.5V21.5Z" fill="white"></path></svg> */}
                        <TiDocumentText size={20}/>
                        <motion.p>Résumé / CV</motion.p>
                    </motion.a>
                </Link>
            </motion.div>
        </div>
    )
}