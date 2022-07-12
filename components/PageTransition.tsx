import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

// https://github.com/james-wallis/wallis.dev

type Props = {
    children: ReactNode,
    animate?: boolean,
    // title: string,
    // description: string
}

const variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: {
        opacity: 1, x: 0, y: 0, transition: {
            // speed: .5, 
            type: "spring"
        }
    },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, animate = true }: Props): JSX.Element => (
    <div>
        {
            animate ?
                <motion.main
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    // transition={{ type: 'spring' }}
                >
                    {children}
                </motion.main>
                :
                <main>
                    {children}
                </main>
        }
    </div>
)

export default Layout
