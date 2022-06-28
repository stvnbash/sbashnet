import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export async function getStaticProps() {
    const posts = allPosts.sort((a, b) => (a.id < b.id) ? 1 : -1)
    // const posts = allPosts.sort((a, b) => {
    //     return compareDesc(new Date(a.date), new Date(b.date))
    // })
    return { props: { posts } }
}

function PostCard(post: any) {
    return (
        <Link href={post.url}>
            <a className="group hover:scale-105 focus-visible:outline-none focus-visible:ring focus:ring-purple1 font-bold p-6 rounded-3xl text-turquoise1 hover:text-turquoise1 bg-[#290066] hover:bg-[#4100A3] transition-all">
                <h1 className='text-2xl'>{post.title}</h1>
                <div className="text-text1">
                    <h2 className="text-lg font-normal line-clamp-4">{post.description}</h2>
                </div>
            </a>
        </Link>
    )
}

export default function Projects({ posts }: any) {
    return (
        <div className='mb-auto'>
            <div id="__projects-modals"></div>
            <h1 className='text-5xl mb-10 font-bold'>My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {posts.map((post: any, idx: any) => (
                    <PostCard key={idx} {...post} />
                ))}
            </div>
        </div>
    )
}
