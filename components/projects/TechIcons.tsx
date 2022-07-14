import { SiPython, SiGmail, SiTailwindcss, SiFramer, SiReact, SiPostman, SiNextdotjs } from "react-icons/si";

export default function TechIcons({ post }: any) {


    return (
        <div className='flex flex-row gap-2 mt-3 text-purple1'>
            {post.body.raw.toLowerCase().includes("react") && <SiReact size={20} title="React" />}
            {post.body.raw.toLowerCase().includes("nextjs") && <SiNextdotjs size={20} title="NextJS" />}
            {post.body.raw.toLowerCase().includes("python") && <SiPython size={20} title="Python" />}
            {post.body.raw.toLowerCase().includes("tailwind") && <SiTailwindcss size={20} title="Tailwind CSS" />}
            {post.body.raw.toLowerCase().includes("framer motion") && <SiFramer size={20} title="Framer Motion" />}
            {post.body.raw.toLowerCase().includes("postman") && <SiPostman size={20} title="Postman" />}
            {post.body.raw.toLowerCase().includes("gmail") && <SiGmail size={20} title="Gmail" />}
        </div>

    )
}