import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'
import { RiCloseCircleFill } from "react-icons/ri";
import Meta from '../Meta'
import { SiPython, SiGmail, SiTailwindcss, SiFramer, SiReact, SiPostman, SiNextdotjs } from "react-icons/si";
import TechIcons from './TechIcons'

export default function Modal({ children, post, setModalopen }: any) {
    let [isOpen, setIsOpen] = useState(true)
    const router = useRouter()
    const modal = {
        hidden: {
            opacity: 0.0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: 0.1,
                // when: "beforeChildren",
                // delayChildren: 0.2,
                // staggerChildren: 0.0,
                type: "spring",
                duration: .5,

            }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                delay: 0.1,
                // when: "beforeChildren",
                // delayChildren: 0.2,
                // staggerChildren: 0.0,
                type: "spring",
                duration: .5,

            }
        }
    }
    const background = {
        hidden: {
            opacity: 0.0,
            scale: 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: 0.1,
                // when: "beforeChildren",
                // delayChildren: 0.2,
                // staggerChildren: 0.0,
                type: "spring",
                duration: .5,

            }
        },
        exit: {
            opacity: 0,
        }
    }

    return (
        // Based on "Styling the dialog" from headlessui docs
        <Dialog
            open={isOpen}
            onClose={() => { setIsOpen(false); router.push('/projects'); }}
            className="relative z-50"
        >
            <Meta title={post.title} />
            {/* Backdrop */}

            <motion.div key="background" initial="hidden" animate="visible" exit="exit" variants={background} className="fixed inset-0 bg-black/75" aria-hidden="true" />

            <motion.div key="modal" initial="hidden" animate="visible" exit="exit" variants={modal} className="fixed inset-0 flex flex-auto items-center justify-center p-4 py-20 top-0">


                {/* <div className="flex min-h-full items-center justify-center"> */}
                {/* <div> */}

                {/* <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} className="flow-root w-full max-w-5xl h-full"> */}
                <Dialog.Panel className="flow-root w-full max-w-5xl rounded-3xl bg-darkpurple1/50 text-text1 p-10 h-full overflow-y-auto">
                    <button className="float-right text-turquoise1 hover:text-yellow1 rounded-lg focus-visible:outline-none focus-visible:ring ring-offset-navy1 ring-offset-0 ring-red1 transition-all" onClick={() => { router.push('/projects'); setModalopen("not open");}}><RiCloseCircleFill size={20} /></button>
                    <Dialog.Title className="mb-1 text-3xl font-bold">{post.title}</Dialog.Title>
                    <Dialog.Description className="text-lg">{post.description}</Dialog.Description>
                    <TechIcons post={post}/>
                    <br />
                    {children}

                </Dialog.Panel>
                {/* </motion.div> */}

                {/* </div> */}
            </motion.div>
        </Dialog>
    )
}