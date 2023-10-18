"use client";

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
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const overpass = Overpass({ subsets: ["latin"] });

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function ContactSection() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const mobile = useRef();
  const subject = useRef();
  const message = useRef();
  const reRef = useRef();
  const SITE_KEY = "6Lflda4oAAAAAMpkogNzUa_vgDmdGggT6pC81Pxe";

  async function submit(event) {
    console.log("Submitting...");
    event.preventDefault()

    const token = await reRef.current.getValue();

    const body = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      message: message.current.value,
      subject: subject.current.value,
      token,
    };

    console.log(body);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.contactInfo}>
            <h2 className={playfairDisplay.className}>My Contact Details.</h2>
            <h3>Szymon Kaluza</h3>
            <p>info@skwd.com</p>
            <p>07495067765</p>
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

          <form className={styles.contactForm} onSubmit={submit}>
            <h3 className={playfairDisplay.className}>Your Contact Details.</h3>
            <p>
              Full Name <span>(required)</span>
            </p>
            <div className={styles.name}>
              <div className={styles.firstName}>
                <span>First Name</span>
                <input type="text" ref={firstName} />
              </div>

              <div className={styles.lastName}>
                <span>Last Name</span>
                <input type="text" ref={lastName} />
              </div>
            </div>

            <div className={styles.email}>
              <p>
                Email Address <span>(required)</span>
              </p>
              <input type="text" ref={email} />
            </div>

            <div className={styles.phone}>
              <p>
                Phone Number{" "}
                <span>
                  Not required but makes it easier sometimes if i can call you
                </span>
              </p>
              <input type="text" ref={mobile} />
            </div>

            <div className={styles.email}>
              <p>
                Subject <span>(required)</span>
              </p>
              <input type="text" ref={subject} />
            </div>

            <div className={styles.message}>
              <p>
                Message Details <span>(required)</span>
              </p>
              <textarea
                placeholder="Send me all your questions "
                className={overpass.className}
                ref={message}
              ></textarea>
            </div>

            <div className={styles.recaptcha}>
              <ReCAPTCHA sitekey={SITE_KEY} ref={reRef} />
            </div>

            <div className={styles.button}>
              <input type="submit" className={overpass.className} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
