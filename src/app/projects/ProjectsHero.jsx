import styles from '../services/ServicesHero.module.scss'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



export default function ProjectsHero() {
    return (
        <div className={styles.hero}>
            <div className='container'>
                <div className={styles.heroInfo}>
                    <h1 className={playfairDisplay.className}>My Projects.</h1>
                </div>
            </div>
        </div>
    )
}