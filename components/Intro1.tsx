import Link from 'next/link';
import Image from 'next/image'
import Socials from './Socials';
import TypeIt from "typeit-react";

export default function Intro() {
    return (
        <div className=''>
            <p className='text-xl sm:text-2xl lg:text-4xl'>
                {/* Hello, world!  I am */}
                <TypeIt options={{speed: 75, deleteSpeed: 50, lifeLike: true, cursor: true, waitUntilVisible: true, cursorSpeed: 1500}}
                    getBeforeInit={(instance) => {
                        instance.type("Hello, wordl").pause(750).delete(2).pause(500).type("ld!  I am ");

                        // Remember to return it!
                        return instance;
                    }}
                />
            </p>
            {/* <h1 className='text-5xl sm:text-6xl lg:text-8xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Steven Bash</h1> */}
            <h1 className='text-5xl sm:text-6xl lg:text-8xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-yellowgreen1 to-turquoise1'>Steven Bash</h1>
            {/* I strive to create impactful change and strategize for organizational efficiency.   */}
            <p className='text-xl sm:text-2xl lg:text-4xl'>I study Computer Science at UCLA.</p>
            <br />
            <Socials />
        </div>
    )
}