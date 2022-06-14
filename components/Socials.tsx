import { SiTwitter, SiInstagram, SiGithub, SiLinkedin, SiTelegram, SiStackoverflow } from "react-icons/si";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Socials() {
    return (
        <motion.div className='flex' >
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
                {
                    aria: 'Twitter',
                    icon: SiTwitter,
                    href: 'https://twitter.com/stvnbash',
                },
                {
                    aria: 'Telegram',
                    icon: SiTelegram,
                    href: 'https://t.me/stevenbash',
                },
            ].map((link, index) => (
                <Link href={link.href} key={index} passHref>
                    <motion.a
                        href={link.href}
                        target='_blank'
                        rel='noreferrer'
                        className='mr-5'
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