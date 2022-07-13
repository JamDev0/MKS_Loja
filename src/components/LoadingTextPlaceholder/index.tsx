import { motion } from "framer-motion";

import { LoadingTextPlaceholderContainer } from "./LoadigTextPlaceholder.styles";

export function LoadingTextPlaceholder() {
    return(
        <LoadingTextPlaceholderContainer role='loadingPlaceholder'>
            <linearGradient
             id="myGradient"
            >
                <motion.stop
                 animate={{offset: ['10%', '100%']}}
                 transition={{
                    duration: 1.3,
                    ease: 'easeOut',
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    repeatType: 'loop'
                 }}
                 className="stopWhite"
                />
                <motion.stop
                 animate={{offset: ['100%', '200%']}}
                 transition={{
                    duration: 1.3,
                    ease: 'easeOut',
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    repeatType: 'loop'
                 }}
                 className="stopGray"
                />
            </linearGradient>    

            <rect x="0" y="0" width="100%" height="100%" fill="url(#myGradient)"/>
        </LoadingTextPlaceholderContainer>
    )
}