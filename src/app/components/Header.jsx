'use client'

import styles from '../styles/header.module.scss';
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });



export default function Header() {
  const [toggle, setToggle] = useState(false);
  const mobileLink = useRef();

  
  const currentRoute = usePathname();

  useEffect(() => {
    if (toggle) {
      mobileLink.current.style = "display:flex;";
    } else {
      mobileLink.current.style = "display:none;";
    }
  });

  return (

     <header>
    <div className="container">
      <div className={styles.mainNav}>
        <div className={styles.leftSide}>
          <h2 className={playfairDisplay.className}>S K W D</h2>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.navLinks}>
            <Link href="/" className={currentRoute === "/" ? "active" : ""}>Home</Link>
            <Link href="/services" className={currentRoute === "/services" ? "active" : ""}>Services</Link>
            <Link href="/projects" className={currentRoute === "/projects" ? "active" : ""}>Projects</Link>
            <Link href="/about" className={currentRoute === "/about" ? "active" : ""}>About</Link>
            <Link href="/contact" className={currentRoute === "/contact" ? "active" : ""}>Contact</Link>
          </div>

          <button onClick={() => setToggle((toggle) => !toggle)}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>

        </div>
      </div>
    </div>

          <div className={styles.mobileLinks} ref={mobileLink}>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
     </header>
  );
}
