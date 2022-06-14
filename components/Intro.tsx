import Link from 'next/link';
import Image from 'next/image'
import Socials from './Socials';

export default function Intro() {
    return (
        <div>

            <div className='pt-10 text-center text-yellow-500 text-3xl lg:text-9xl font-bold'>
                Hi 👋, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Steven Bash</span>
            </div>
            <div className='pt-10 text-center text-yellow-500 text-2xl font-bold'>
                Programmer | Activist | UCLA Computer Science

            </div>
            <Socials />
        </div>
    )
}