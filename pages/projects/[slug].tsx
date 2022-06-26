import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Meta from 'components/Meta'

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

export default function PostLayout({ post }:any) {
  return (
    <>
      <Meta title={post.title} />
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/projects">
            <a className="text-center text-sm font-bold uppercase text-turquoise1 hover:text-yellow1 transition-all">Go Back</a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          {/* <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time> */}
        </div>
        <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </>
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
