import React from "react";
import styles from "./AstraInfo.module.scss";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function AstraInfo() {
  return (
    <section className='container'>
      <div className={styles.overview}>
        <h2 className={playfairDisplay.className}>Astra Studios</h2>
        <p className={styles.subtitle}>By AJ Smith</p>
        <p>
          This was my first project for a client so I was extemely excited to
          show what I can do when it comes to buidling websites. It was important on
          this project to have the design and layout up to the high standards AJ
          works to, so matching it was without question. It was a great learning
          experience working with him as he has a very good eye for design
          as well as being a very talented artist. So this is his showcase for
          all the amazing work he's created over the years.
        </p>
        <p>
          This project was created using Next.JS , I also included AWS Simple
          Email Service (SES) and Google ReCAPTCHA to prevent spam in his
          contact form - All deployed using AWS Amplify.
        </p>
        <p>
          Visit his website here. 
          <Link href={"https://www.astrastudios.co.uk/"}> Click Here</Link>
        </p>

        <h2 className={playfairDisplay.className}>Showcase</h2>
        <p>Here a few of many pages that the website has. I urge you to visit as AJ has created some really good animation that I'm unable to display with just a simple screnshot of his page and you can see the finer details of his work.</p>

      </div>
      <div className={styles.links}></div>
    </section>
  );
}

export default AstraInfo;
