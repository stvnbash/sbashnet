import Link from 'next/link';
import Image from 'next/image'
import Socials from './Socials';

export default function Intro() {
    return (
        <div className='prose'>
            <p className='text-xl'>HELLO, WORLD!  I'M</p>
            <h1 className='text-5xl font-bold py-3'>Steven Bash</h1>
            <p className='text-xl'>I strive to create impactful change and strategize for organizational efficiency.  I study Computer Science at UCLA.</p>
        </div>
    )
}