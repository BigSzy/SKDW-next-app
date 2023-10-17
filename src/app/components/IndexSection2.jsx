import styles from "../styles/indexSection.module.scss";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google'



const playfairDisplay = Playfair_Display({ subsets: ['latin'] })


export default function IndexSection2 () {
    return (
        <section>
            <div className="container">
                <div className={`${styles.card} ${styles.reverseCard}`}>
                    <div className={styles.infoWrapper}>
                        <h3 className={playfairDisplay.className}>Personalised design for each client.</h3>
                        <p>When working with me i make sure every website is unique and built to the clients needs, there are no templates that i supply. Take a look at projects ive completed.</p>

                        <div className={styles.linkWrapper}>
                             <Link href="/projects"> Learn More</Link> 
                        </div>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img className={styles.image} src="/img/drawing.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}