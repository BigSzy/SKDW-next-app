import React from 'react'
import styles from './ProjectLead.module.scss'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function ProjectLead() {
  return (
    <section className={styles.projectLead}>
        <h2 className={playfairDisplay.className}>Here are all my projects that I've created. I encourage you to go visit the sites for the best viewing experience.</h2>
    </section>
  )
}

export default ProjectLead