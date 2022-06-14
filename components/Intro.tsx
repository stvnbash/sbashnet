import Link from 'next/link';
import Image from 'next/image'

export default function Intro() {
    return (
        <div>

            <div className='pt-10 text-center text-white text-5xl font-bold'>
                Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Steven Bash</span>
            </div>
            <div className='pt-10 text-center text-white text-2xl font-bold'>
                UCLA Computer Science

            </div>
        </div>
    )
}