import Link from "next/link";
import TechIcons from "./TechIcons";


export default function PostCard({ post, setModalopen }: any) {


    return (
        // change which Link is uncommented for redirecting the entire page (second) vs popup (first)
        <Link href={post.queryString} as={post.url}>
            {/* <Link href={post.url}> */}
            <a onClick={() => {setModalopen("open111");}} className="flex flex-col p-6 rounded-3xl group hover:scale-105 focus-visible:outline-none focus-visible:ring focus:ring-purple1 bg-[#290066] hover:bg-[#4100A3] transition-all overflow-hidden">
                {/* <img src={post.image} className="rounded-3xl -mx-6 w-[calc(100%_+_1.5rem)]" /> */}
                <h1 className='text-turquoise1 text-2xl font-bold'>{post.title}</h1>
                <div className="text-text1 mb-auto">
                    <h2 className="text-base font-normal line-clamp-4">{post.description}</h2>
                </div>
                {/* {(post.icons).map((icon:any) => {<icon.hekkio size={30}/>})} */}
                <TechIcons post={post} />
            </a>
        </Link>
    )
}