import styles from './ServicesHero.module.scss'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



export default function ServicesHero() {
    return (
        <div className={styles.hero}>
            <div className='container'>
                <div className={styles.heroInfo}>
                    <h1 className={playfairDisplay.className}>Front-End Developer.</h1>
                </div>
            </div>
        </div>
    )
}