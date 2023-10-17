import styles from './ServiceGrid.module.scss'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function ServiceGrid () {
    return (
        <section className={styles.sectionWrapper}>
            <div className='container'>
               <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3 className={playfairDisplay.className}>Step 1 - The Call.</h3>
                        <p>Before we can start any work, I like to video call my clients and get to know you and your business, where you've come from , where your heading. We'll discuss things like functionality of the website and what your favrouite colour is. All jokes aside with this call it'll let me figure out what your wants and needs are and it'll be a good foundation for me to start our project. </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={playfairDisplay.className}>Step 2 - The Build.</h3>
                        <p>After our call, I like to start projects straight away as im always excited. I'll first create a blank layout for your page that when finished we will have our first revision of the site where you can voice your opinion and I'll correct it your liking. During this process i will be gathering content for the next revison where i start filling the empty layout with text and photos to make the website true to you. </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={playfairDisplay.className}>Step 3 - The Finish Line.</h3>
                        <p>After all the content is gathered, I will be finialising the site making sure everything is perfect. Once the site is no longer and empty layout but a well populated set of pages we will have our third and final revision, where again if there's something you want changed I'll make your wishes come true and we'll be ready for deployment. </p>
                    </div>
               </div>
            </div>
        </section>
    )
}