import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Modal2 from 'components/projects/Modal2'
import Router, { useRouter } from 'next/router'
import { AnimatePresence, motion } from "framer-motion"
import PageTransition from 'components/PageTransition'
import Meta from 'components/Meta'
import { useState } from 'react'
import { SiPython, SiGmail, SiTailwindcss, SiFramer, SiReact, SiPostman, SiNextdotjs } from "react-icons/si";
import TechIcons from 'components/projects/TechIcons'
import PostCard from 'components/projects/PostCard'


export async function getStaticProps() {
    const posts = allPosts.sort((a, b) => (a.id < b.id) ? 1 : -1)
    // const posts = allPosts.sort((a, b) => {
    //     return compareDesc(new Date(a.date), new Date(b.date))
    // })
    return { props: { posts } }
}

// function PostCard(post: any) {
//     return (
//         <Link href={post.queryString} as={post.url}>
//         {/* <Link href={post.url}> */}
//             <a className="flex flex-col group hover:scale-105 focus-visible:outline-none focus-visible:ring focus:ring-purple1 font-bold p-6 rounded-3xl text-turquoise1 hover:text-turquoise1 bg-[#290066] hover:bg-[#4100A3] transition-all overflow-hidden">
//                 <h1 className='text-2xl'>{post.title}</h1>
//                 <div className="text-text1 mb-auto">
//                     <h2 className="text-lg font-normal line-clamp-4">{post.description}</h2>
//                 </div>
//                 {/* {(post.icons).map((icon:any) => {<icon.hekkio size={30}/>})} */}
//                 <TechIcons post={post} />
//             </a>
//         </Link>
//     )
// }

export default function Projects({ posts }: any) {
    const [modalopen, setModalopen] = useState("not open")

    const variants = {
        hidden: {
            opacity: 0.0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.025,
            }
        }
    }

    const router = useRouter()
    let post = null
    if (router.query.project) {
        for (let x of posts) {
            if (x._raw.flattenedPath == router.query.project) {
                post = x;
            }
        }
    }

    return (
        // <motion.div initial="hidden" whileInView="visible" variants={variants} className='mb-auto'>
        <div>
            <Meta title={"Projects"} />
            {
                router.query.project && 
                // modalopen &&
                (
                    <AnimatePresence><Modal2 title={post.title} description={post.description} key="modal" post={post} setModalopen={setModalopen}>
                        {/* <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
                        <p className='text-lg'>{post.description}</p> */}
                        <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: post.body.html }} />
                    </Modal2></AnimatePresence>
                )
            }
            <PageTransition animate={router.query.project ? false : true}>
                <div id="__projects-modals"></div>
                <h1 className='text-5xl mb-10 font-bold'>My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {posts.map((post: any, idx: any) => (
                        <PostCard key={idx} post={post} setModalopen={setModalopen}/>
                        // <PostCard key={idx} {...post} />
                    ))}
                </div>
                {/* {console.log(posts)} */}
                {/* </motion.div> */}
            </PageTransition>
        </div>
    )
}
