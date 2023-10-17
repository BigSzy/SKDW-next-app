import styles from './ServiceSection.module.scss'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function ServiceSection2 () {
    return (
        <section className={styles.sectionWrapper}>
        <div className='container'>
            <div className={styles.lead}>
                <p>Intrested? Let's Talk</p>
                <h3 className={playfairDisplay.className}>I would love to get to know you and create something truely special. If you have any questions get a hold of me today.</h3>

                <Link href={"/contact"}>Contact Me Today</Link>
            </div>
        </div>
    </section>
    )
}