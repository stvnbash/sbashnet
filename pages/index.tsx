import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/old/Intro'
import Intro1 from '../components/Intro1'
import styles from '../styles/Home.module.css'

export default function Index() {
    return (
        // <div className='container mx-auto bg-black h-screen text-white'>
        <div className=''>
            {/* <Intro /> */}
            <Intro1 />
        </div>
    )
}

// const Index: NextPage = () => {
//   return (
//     <div className=''>
//         Hello World
//     </div>
//   )
// }

// export default Index
