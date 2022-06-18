import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Footer1 from '../components/Footer1'
import Navbar1 from '../components/Navbar1'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen flex flex-col justify-between bg-p5 text-white'>
      <div className='absolute w-24 right-0'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMax slice"><g transform="scale(1.3123359580052494)"><rect x="0" y="0" width="762" height="762" fill="#fafafa" /><rect x="0" y="0" width="381" height="381" fill="#FF3565" /><polygon points="0,0 381,0 0,381" fill="#20dfdf" /><rect x="381" y="0" width="381" height="381" fill="#20dfdf" /><polygon points="381,0 762,0 381,381" fill="#183FE1" /><rect x="0" y="381" width="381" height="381" fill="#183FE1" /><polygon points="0,381 381,381 0,762" fill="#183FE1" /><rect x="381" y="381" width="381" height="381" fill="#183FE1" /><polygon points="381,381 762,381 381,762" fill="#20dfdf" /></g></svg>
      </div>
      {/* <div></div> */}
      <Navbar />
      {/* <Navbar1 /> */}
      {/* <main className='max-w-3xl mx-auto py-10 px-10'> */}
      {/* <main className='pt-2 md:pt-4 sm:px-10 bg-slate-200 overflow-y-auto flex flex-grow flex-col justify-between z-10 h-0'> */}
      {/* <main className='max-w-3xl mx-auto p-10 h-0 flex flex-grow flex-col'> */}
      <main className='max-w-3xl mx-auto p-10 text-lg'>
        {/* <main className='px-[20vw] p-10'> */}
        <Component {...pageProps} />
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