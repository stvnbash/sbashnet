import Link from 'next/link';
import Image from 'next/image'
import Socials from './Socials';

export default function Intro() {
    return (
        <div className=''>
            <p className='text-xl sm:text-2xl'>Hello, world!  I am</p>
            <h1 className='text-5xl sm:text-6xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Steven Bash</h1>
            {/* I strive to create impactful change and strategize for organizational efficiency.   */}
            <p className='text-xl sm:text-2xl'>I study Computer Science at UCLA.</p>
            <br />
            <Socials />
        </div>
    )
}