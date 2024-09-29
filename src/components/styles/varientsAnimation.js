// hidden: {
// y: direction
// 'up' ? 40
// direction === 'down' ? -40 :
// x: direction === 'left' ? 40
// direction === 'right' ? -40
// e,
// },
// show: {
// y: 0,
// x:0,
// opacity: 1,
// transition: {
// type: 'tween',
// duration: 1.2,
// delay: delay,
// ease: [0.25, 0.25, 0.25, 0.75],

import { px } from "framer-motion"
import { filter } from "framer-motion/client"

export const fadein = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'right' ? 60 : direction === 'left' ? -60 : 0,
            
            filter:"blur(3px)",
            opacity:0,

        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,filter: "blur(0px)",
            transition: {
                filter: "blur(0px)",
                type: 'tween',
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}