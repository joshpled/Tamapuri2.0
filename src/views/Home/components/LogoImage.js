import React from 'react'

import {motion} from 'framer-motion'
import {Image} from 'react-bootstrap'

export default function LogoImage() {
    return (
        <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
					<Image fluid alt="logo" src="/images/Logo.png" id="imgSetting" />
				</motion.div>
        </div>
    )
}
