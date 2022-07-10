import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Meta from 'components/Meta'
import Modal from 'react-modal'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }:any) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return {
    props: {
      post,
    },
  }
}

Modal.setAppElement('#__next')

export default function PostLayout({ post }:any) {
  const router = useRouter()

  return (
    <Modal
      isOpen={true} onRequestClose={() => router.push('/projects')} 
      contentLabel="Project modal" 
      role={'Project Description'} 
      // overlayRef={node => (this.overlayRef = node)}
      // contentRef={node => (this.contentRef = node)}
<<<<<<< HEAD
      className="text-text1 max-w-2xl sm:mx-auto my-24 m-10 md:my-24 p-10 bg-slate-600 h-[80vh] rounded-3xl overflow-y-auto"
=======
      className="text-text1 max-w-5xl sm:mx-auto my-24 m-10 md:my-24 p-10 bg-[#290066] h-[80vh] rounded-3xl overflow-y-auto"
>>>>>>> d957123d5835344b51d4262e05ddea77001ec64d
      style={{
        overlay: {
          // backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }
      }}
      >
      <Meta title={post.title} />
      {/* <article className="mx-auto max-w-2xl py-16 bg-red-400 w-full h-full"> */}
      <article className="mx-auto py-16  w-full h-full">
        <div className="mb-6 text-center">
          <Link href="/projects">
            <a className="text-center text-sm font-bold uppercase text-turquoise1 hover:text-yellow1 transition-all">Go Back</a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <p className='text-lg'>{post.description}</p>
          {/* <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time> */}
        </div>
        <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </Modal>
  )
}



// export default function Projects() {
//     return (
//         // <div className="flex h-[75vh] items-center justify-center">
//         <div className="">
//             <p>Projects coming soon! :-)</p>
//             <br />
//             <ul>
               
//             </ul>
//         </div>
//     )
// }
