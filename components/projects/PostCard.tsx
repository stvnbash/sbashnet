import Link from "next/link";
import TechIcons from "./TechIcons";


export default function PostCard({ post, setModalopen }: any) {


    return (
        <Link href={post.queryString} as={post.url}>
            {/* <Link href={post.url}> */}
            <a onClick={() => {setModalopen("open111");}} className="flex flex-col group hover:scale-105 focus-visible:outline-none focus-visible:ring focus:ring-purple1 font-bold p-6 rounded-3xl text-turquoise1 hover:text-turquoise1 bg-[#290066] hover:bg-[#4100A3] transition-all overflow-hidden">
                <h1 className='text-2xl'>{post.title}</h1>
                <div className="text-text1 mb-auto">
                    <h2 className="text-lg font-normal line-clamp-4">{post.description}</h2>
                </div>
                {/* {(post.icons).map((icon:any) => {<icon.hekkio size={30}/>})} */}
                <TechIcons post={post} />
            </a>
        </Link>
    )
}