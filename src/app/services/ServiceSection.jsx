import styles from './ServiceSection.module.scss'
import { Playfair_Display } from 'next/font/google'


const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function ServiceSection () {
    return (
        <section className={styles.sectionWrapper}>
            <div className='container'>
                <div className={styles.lead}>
                    <p>Front-End Development</p>
                    <h3 className={playfairDisplay.className}>Having a new found passion in front-end development i always push the boundries of my knowledge with each project, making them look and work better each time. I take the upmost pride in my work and will not deliver projects that are not up to industry standards.</h3>
                </div>

                <div className={styles.processInfo}>
                    <h3 className={playfairDisplay.className}>The Process.</h3>
                    <p className={styles.bigPara}>With the lack of experience that i have i don't have multiple templates to show clients for them to pick and choose, I'd rather create unique designs fit to the clients needs and wants while putting my own creative spin on things. </p>
                    <p>When working with me i like to be transparent with the client but there has to be a high level of trust between us both for me to develop the website of your dreams. Give me the reigns and i'll take you the destination regardless of the route. </p>
                </div>
            </div>
        </section>
    )
}