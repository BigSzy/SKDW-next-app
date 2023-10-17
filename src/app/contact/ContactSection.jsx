import styles from "./ContactSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Overpass } from "next/font/google";
const overpass = Overpass({ subsets: ["latin"] });

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function ContactSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.contactInfo}>
            <h2 className={playfairDisplay.className}>My Contact Details.</h2>
            <h3>Szymon Kaluza</h3>
            <p>info@skwd.com</p>
            <p>07494076862</p>
            <div className={styles.social}>
              <div className={styles.icon}>
                <Link href={"/"}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link href={"/"}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
              <div className={styles.icon}>
                <Link href={"/"}>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3 className={playfairDisplay.className}>Your Contact Details.</h3>
            <p>
              Full Name <span>(required)</span>
            </p>
            <div className={styles.name}>
              <div className={styles.firstName}>
                <span>First Name</span>
                <input type="text" />
              </div>
              <div className={styles.lastName}>
                <span>Last Name</span>
                <input type="text" />
              </div>
            </div>
            <div className={styles.email}>
              <p>
                Email Address <span>(required)</span>
              </p>
              <input type="text" />
            </div>

            <div className={styles.phone}>
              <p>
                Phone Number{" "}
                <span>
                  Not required but makes it easier sometimes if i can call you
                </span>
              </p>
              <input type="text" />
            </div>

            <div className={styles.message}>
              <p>
                Message Details <span>(required)</span>
              </p>
              <textarea
                placeholder="Send me all your questions "
                className={overpass.className}
              ></textarea>
            </div>

            <div className={styles.button}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
