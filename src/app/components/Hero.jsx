import styles from '../styles/hero.module.scss'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className='container'>
                <div className={styles.heroInfo}>
                    <p>Here to make your dreams a reality</p>
                    <h1 className={playfairDisplay.className}>Let's build something brilliant together.</h1>

                    <div className={styles.heroLinks}>
                        <Link href="/about">About Me</Link>
                        <Link href="/contact">Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}