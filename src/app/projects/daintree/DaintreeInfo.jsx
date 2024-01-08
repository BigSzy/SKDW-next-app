import React from 'react'
import styles from '../astra/AstraInfo.module.scss'
import Link from 'next/link'
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

function DaintreeInfo() {
  return (
    <section className='container'>
          <section className='container'>
      <div className={styles.overview}>
        <h2 className={playfairDisplay.className}>Daintree</h2>
        <p className={styles.subtitle}>By Szymon Kaluza</p>
        <p>
         This is a project to populate my portofilio and demostrate skills in implimenting different API's to make a fully functioning E-commerce website. I have used Fakestore API for all the products , I have implemented Stripe payment API for the checkout. I've also constructed a shopping basket context to allow the user easy and fluid use of adding products and adjusting the quantity of products in the basket. 
        </p>
        <p>I took a lot of insperation from department store websites like House Of Fraser and Amazon on how to layout the website and different design ideas and other features like the featured products. I've also used GetStaticParams for the category pages to improve site performance since Next.JS will create the pages before the user requests to see them making the load times a lot quicker, This was also used on the single product pages that gives you the description of the product.  </p>
        <p>
          This project was created using Next.JS and deployed on AWS Amplify.
        </p>
        <p>
          Visit his website here. 
          <Link href={"https://shop.skwd.co.uk"}> Click Here</Link>
        </p>

        <h2 className={playfairDisplay.className}>Showcase</h2>
        <p>Here are a couple of pages Daintree has to offer. I urge you to have a visit and play around like it was a real e-commerece website but unfortunatly it's not. With the Stripe checkout out you will have to use their test cards that you can find <Link href={"https://stripe.com/docs/testing"}>here</Link>.</p>

      </div>
      <div className={styles.links}></div>
    </section>
    </section>
  )
}

export default DaintreeInfo