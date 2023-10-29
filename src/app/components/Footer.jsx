import styles from "../styles/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function Footer() {

    return (
    <footer className={styles.footer}>
        <div className="container">
        <div className={styles.footerRow}>
            <div className={`${styles.footerCol} ${styles.footerInfo}`}>
            <h3 className={playfairDisplay.className}>Szymon Kaluza</h3>
            <p className={styles.title}>Free Lance Front-End Developer</p>
            <p>info@skwd.co.uk</p>
            </div>

            <div className={`${styles.footerCol} ${styles.footerLogo}`}>
            <h2 className={playfairDisplay.className}>S K W D</h2>
            </div>

            <div className={`${styles.footerCol} ${styles.footerSocial}`}>
                <div className={styles.icon}>
                    <Link href={"/"}>
                            <FontAwesomeIcon icon={faInstagram} size="2x"/> 
                    </Link>
                </div>
                <div className={styles.icon}>
                    <Link href={"/"}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/> 
                    </Link>
                </div>
                <div className={styles.icon}>
                    <Link href={"/"}>
                            <FontAwesomeIcon icon={faGithub} size="2x" /> 
                    </Link>
                </div>
            
            </div>
        </div>

        <div className={styles.footerSub}>
            <p>&copy;2023 All rights reserved | S K W D</p>
        </div>
        </div>
    </footer>

    )
}
