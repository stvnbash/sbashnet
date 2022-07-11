import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/old/Footer'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Footer1 from '../components/Footer1'
import Navbar1 from '../components/old/Navbar1'
import NextNProgress from "nextjs-progressbar";
import { useState, useEffect } from 'react';
import Meta from '../components/Meta'
import { AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // console.log(1, router.asPath)
  // console.log(2, router.route)
  return (
    <div className='min-h-screen flex flex-col justify-between bg-navy1 text-text1 '>
      <Meta />
      <NextNProgress color="#0CE8C7" />
      <div className='fixed w-[20vw] left-0 top-24 lg:top-0 z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" preserveAspectRatio="xMaxYMax slice"><g transform="scale(2.099737532808399)"><rect x="0" y="0" width="476.25" height="762" fill="#060950" /><g transform="translate(0,95.25) scale(4.7625) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#ff7a6c" /></g><g transform="translate(95.25,95.25) scale(4.7625) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#0CE8C7" /></g><circle cx="142.875" cy="333.375" r="47.625" fill="#FFDA01" /><circle cx="47.625" cy="428.625" r="47.625" fill="#d0b0ff" /><g transform="translate(95.25,381) scale(4.7625) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#ff7a6c" /></g><circle cx="142.875" cy="523.875" r="47.625" fill="#d0b0ff" /><circle cx="142.875" cy="619.125" r="47.625" fill="#0CE8C7" /></g></svg>

      </div>
      <div className='fixed w-[8vw] right-0 bottom-24 lg:bottom-12 rotate-180 z-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 3000" preserveAspectRatio="xMaxYMax slice"><g transform="scale(3.663003663003663)"><rect x="0" y="0" width="273" height="819" fill="#060950" /><g transform="translate(136.5,0) scale(6.825) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#FFDA01" /></g><circle cx="68.25" cy="204.75" r="68.25" fill="#FF7A6C" /><circle cx="204.75" cy="204.75" r="68.25" fill="#FFDA01" /><g transform="translate(0,273) scale(6.825) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#D0B0FF" /></g><circle cx="204.75" cy="341.25" r="68.25" fill="#0CE8C7" /><g transform="translate(0,409.5) scale(6.825) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#D0B0FF" /></g><circle cx="204.75" cy="477.75" r="68.25" fill="#0CE8C7" /><g transform="translate(136.5,546) scale(6.825) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#FF7A6C" /></g><g transform="translate(136.5,682.5) scale(6.825) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#D0B0FF" /></g></g></svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" preserveAspectRatio="xMaxYMax slice"><g transform="scale(2.099737532808399)"><rect x="0" y="0" width="476.25" height="762" fill="#060950" /><g transform="translate(0,95.25) scale(4.7625) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#ff7a6c" /></g><g transform="translate(95.25,95.25) scale(4.7625) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#0CE8C7" /></g><circle cx="142.875" cy="333.375" r="47.625" fill="#FFDA01" /><circle cx="47.625" cy="428.625" r="47.625" fill="#d0b0ff" /><g transform="translate(95.25,381) scale(4.7625) rotate(0)"><path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="#ff7a6c" /></g><circle cx="142.875" cy="523.875" r="47.625" fill="#d0b0ff" /><circle cx="142.875" cy="619.125" r="47.625" fill="#0CE8C7" /></g></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" preserveAspectRatio="xMaxYMax slice"><g transform="scale(2.099737532808399)"><rect x="0" y="0" width="476.25" height="762" fill="#060950"/><polygon points="190.5,0 190.5,95.25 95.25,95.25" fill="#FFDA01"/><polygon points="95.25,95.25 190.5,95.25 95.25,190.5" fill="#0CE8C7"/><polygon points="95.25,190.5 190.5,190.5 95.25,285.75" fill="#d0b0ff"/><polygon points="381,190.5 476.25,285.75 381,285.75" fill="#0CE8C7"/><polygon points="0,285.75 95.25,285.75 95.25,381" fill="#0CE8C7"/><polygon points="95.25,381 190.5,476.25 95.25,476.25" fill="#d0b0ff"/><polygon points="381,381 381,476.25 285.75,476.25" fill="#0CE8C7"/><polygon points="190.5,571.5 285.75,666.75 190.5,666.75" fill="#0CE8C7"/><polygon points="0,666.75 95.25,762 0,762" fill="#FFDA01"/><polygon points="95.25,666.75 190.5,666.75 190.5,762" fill="#ff7a6c"/><polygon points="285.75,666.75 381,762 285.75,762" fill="#d0b0ff"/></g></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMax slice"><g transform="scale(1.3123359580052494)"><rect x="0" y="0" width="762" height="762" fill="#fafafa" /><rect x="0" y="0" width="381" height="381" fill="#FF3565" /><polygon points="0,0 381,0 0,381" fill="#20dfdf" /><rect x="381" y="0" width="381" height="381" fill="#20dfdf" /><polygon points="381,0 762,0 381,381" fill="#183FE1" /><rect x="0" y="381" width="381" height="381" fill="#183FE1" /><polygon points="0,381 381,381 0,762" fill="#183FE1" /><rect x="381" y="381" width="381" height="381" fill="#183FE1" /><polygon points="381,381 762,381 381,762" fill="#20dfdf" /></g></svg> */}
      </div>
      {/* <div></div> */}
      <Navbar />
      {/* <Navbar1 /> */}
      {/* <main className='max-w-3xl mx-auto py-10 px-10'> */}
      {/* <main className='pt-2 md:pt-4 sm:px-10 bg-slate-200 overflow-y-auto flex flex-grow flex-col justify-between z-10 h-0'> */}
      {/* <main className='px-[20vw] p-10'> */}
      {/* <main className='max-w-3xl mx-auto p-10 h-0 flex flex-grow flex-col'> */}
      <main className='max-w-5xl mx-auto p-10 text-lg z-10'>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
          {/* <Component {...pageProps} key={router.asPath} /> */}
        </AnimatePresence>
      </main>
      <Footer1 />
    </div>
  )
}

export default MyApp

{/* <div className='min-h-screen flex flex-grow flex-col justify-between'>

  <div className='max-w-5xl mx-auto py-10'>

    // /* Header 
    <div className='flex'>
      <div className='flex-auto'>
        <Navbar />
      </div>
      <Socials />
    </div>

    // /* Body 
    <div className=''>
      <Component {...pageProps} />
    </div>


  </div >

  // /* Footer 
  <div className=' sticky  z-50'>
    <Footer />
  </div>
</div> */}

{/* Working with animated background - with no svg waves in header or footer
<Head>
  <script data-who="💎 Made with naker.io 💎" src="https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js" data-option="{|environment|:{|gradient|:|radial|,|sensitivity|:0.6,|colorStart|:[0,182,89,1],|colorEnd|:[50,189,146,1]},|particle|:{|life|:8.7,|power|:0.3,|texture|:|https://res.cloudinary.com/naker-io/image/upload/v1566560053/trace_01.png|,|number|:1749,|colorStart|:[13,28,25,0.07],|colorEnd|:[9,254,58,0.31],|sizeStart|:0.8,|sizeEnd|:1.6,|direction1|:{|x|:0,|y|:0,|z|:0},|direction2|:{|x|:0,|y|:0,|z|:0}},|waterMark|:false}" data-container="background"></script>
</Head>
<div id="background" className='relative'>
  <div className='relative w-full h-screen bg-black/50'>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
</div> */}

{/* Attempt to put background layer under <Component {...pageProps} /> ... was working, but was buggy and couldn't get background to match content height if taller than h-screen */ }
{/* <div className='static'> */ }
{/* <div className='z-10 relative'>
    <Component {...pageProps} />
  </div> */}
{/* <div id="background" className='z-0 h-screen'>
  </div> */}
{/* </div> */ }