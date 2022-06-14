import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen relative'>

      <div className='max-w-5xl mx-auto py-10'>

        {/* Header */}
        <div className='flex'>
          <div className='flex-auto'>
            <Navbar />
          </div>
          <Socials />
        </div>

        {/* Body */}
        <div className=''>
          <Component {...pageProps} />
        </div>


      </div >

      {/* Footer */}
      <div className='absolute w-full bottom-0'>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp

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