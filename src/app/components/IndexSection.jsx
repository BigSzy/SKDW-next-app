import styles from "../styles/indexSection.module.scss";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google'
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function IndexSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src="/img/code.jpg" alt="" />
            </div>

            <div className={styles.infoWrapper}>
                <h3 className={playfairDisplay.className}>A Passion and focus for frontend development.</h3>
                <p>If you want a great looking website thats fully functional, look no further. See for yourself how I work and the processes I take to develop frontend applications.</p>

                <div className={styles.linkWrapper}>
                    <Link href="/services"> Learn More</Link> 
                </div>
            </div>


        </div>
      </div>
    </section>
  );
}
