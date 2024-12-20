import { SiInstagram, SiGithub, SiLinkedin, SiTelegram, SiStackoverflow, SiBluesky } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoVenmo } from "react-icons/io5";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Socials() {
    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
            },
        },
    }
    return (
        <motion.div className='flex gap-5' variants={variants}>
            {[
                {
                    aria: 'Linkedin',
                    icon: SiLinkedin,
                    href: 'https://linkedin.com/in/stevenbash/',
                },
                {
                    aria: 'GitHub',
                    icon: SiGithub,
                    href: 'https://github.com/stvnbash',
                },
                {
                    aria: 'SiInstagram',
                    icon: SiInstagram,
                    href: 'https://instagram.com/stvnbash',
                },
                // {
                //     aria: 'Twitter',
                //     icon: FaTwitter,
                //     href: 'https://twitter.com/stvnbash',
                // },
                {
                    aria: 'Bluesky',
                    icon: SiBluesky,
                    href: 'https://bsky.app/profile/stevenbash.bsky.social',
                },
                {
                    aria: 'Telegram',
                    icon: SiTelegram,
                    href: 'https://t.me/stevenbash',
                },
                {
                    aria: 'Venmo',
                    icon: IoLogoVenmo,
                    href: 'https://venmo.com/stvnbash',
                },
            ].map((link, index) => (
                <Link href={link.href} key={index} passHref>
                    <motion.a
                        href={link.href}
                        target='_blank'
                        rel='noreferrer'
                        // className='mr-5 hover:text-yellow1'
                        className=' hover:text-yellow1 focus-visible:outline-none focus-visible:ring ring-offset-navy1 ring-offset-4 ring-red1 focus-visible:rounded-lg'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}

                        aria-label={link.aria}
                    >
                        <link.icon size={25} />
                    </motion.a>
                </Link>
            ))}
        </motion.div>
    )
}