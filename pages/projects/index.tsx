import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export async function getStaticProps() {
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })
    return { props: { posts } }
}

function PostCard(post: any) {
    return (
        <div className="mb-6">
            {/* <time dateTime={post.date} className="block text-sm text-text1">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time> */}
            <h2 className="text-xl font-bold">
                <Link href={post.url}>
                    <a className="text-turquoise1 hover:text-yellow1 transition-all">{post.title}</a>
                </Link>
            </h2>
        </div>
    )
}

export default function Projects({ posts }: any) {
    return (
        <div className='mb-auto'>
            <h1 className='text-5xl mb-10 font-bold'>My Projects</h1>
            <div className="grid grid-cols-1">
                {posts.map((post: any, idx: any) => (
                    <PostCard key={idx} {...post} />
                ))}
            </div>
        </div>
    )
}
