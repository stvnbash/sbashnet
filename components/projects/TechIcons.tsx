import {
    SiPython, SiGmail, SiTailwindcss, SiFramer, SiReact,
    SiPostman, SiNextdotjs, SiMicrosoftazure, SiJavascript, SiTypescript,
    SiCplusplus, SiArduino, SiAdafruit, SiBluetooth, SiPytorch, SiGooglecolab,
    SiRaspberrypi, SiFirebase, SiFigma, SiGithub, SiNfc, SiMarkdown 
} from "react-icons/si";

import { PiPasswordDuotone, PiPasswordFill } from "react-icons/pi";


export default function TechIcons({ post }: any) {


    return (
        <div className='flex flex-row flex-wrap gap-2 mt-3 text-purple1'>
            {post.body.raw.toLowerCase().includes("c++") && <SiCplusplus size={20} title="C++" />}
            {post.body.raw.toLowerCase().includes("javascript") && <SiJavascript size={20} title="JavaScript" />}
            {post.body.raw.toLowerCase().includes("typescript") && <SiTypescript size={20} title="TypeScript" />}
            {post.body.raw.toLowerCase().includes("python") && <SiPython size={20} title="Python" />}
            {post.body.raw.toLowerCase().includes("arduino") && <SiArduino size={20} title="Arduino" />}
            {post.body.raw.toLowerCase().includes("raspberry") && <SiRaspberrypi size={20} title="Raspberry Pi" />}
            {post.body.raw.toLowerCase().includes("adafruit") && <SiAdafruit size={20} title="Adafruit" />}
            {post.body.raw.toLowerCase().includes("bluetooth") && <SiBluetooth size={20} title="Bluetooth" />}
            {post.body.raw.toLowerCase().includes("nfc") && <SiNfc size={20} title="NFC" />}
            {post.body.raw.toLowerCase().includes("react") && <SiReact size={20} title="React" />}
            {post.body.raw.toLowerCase().includes("nextjs") && <SiNextdotjs size={20} title="NextJS" />}
            {post.body.raw.toLowerCase().includes("pytorch") && <SiPytorch size={20} title="PyTorch" />}
            {post.body.raw.toLowerCase().includes("tailwind") && <SiTailwindcss size={20} title="Tailwind CSS" />}
            {post.body.raw.toLowerCase().includes("framer motion") && <SiFramer size={20} title="Framer Motion" />}
            {post.body.raw.toLowerCase().includes("markdown") && <SiMarkdown size={20} title="Markdown" />}
            {post.body.raw.toLowerCase().includes("figma") && <SiFigma size={20} title="Figma" />}
            {post.body.raw.toLowerCase().includes("postman") && <SiPostman size={20} title="Postman" />}
            {post.body.raw.toLowerCase().includes("gmail") && <SiGmail size={20} title="Gmail" />}
            {post.body.raw.toLowerCase().includes("azure") && <SiMicrosoftazure size={20} title="Microsoft Azure" />}
            {post.body.raw.toLowerCase().includes("colab") && <SiGooglecolab size={20} title="Google Colab" />}
            {post.body.raw.toLowerCase().includes("firebase") && <SiFirebase size={20} title="Google Firebase" />}
            {post.body.raw.toLowerCase().includes("github") && <SiGithub  size={20} title="Github" />}
            {post.body.raw.toLowerCase().includes("auth") && <PiPasswordDuotone size={20} title="Authentication" />}
        </div>

    )
}