import styles from '@/app/services/ServicesHero.module.scss'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



export default function DaintreeHero() {
    return (
        <div className={styles.hero}>
            <div className='container'>
                <div className={styles.heroInfo}>
                    <h1 className={playfairDisplay.className}>Daintree</h1>
                </div>
            </div>
        </div>
    )
}