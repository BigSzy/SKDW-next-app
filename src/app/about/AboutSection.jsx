import styles from './AboutSection.module.scss'
import { Playfair_Display } from 'next/font/google'
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function AboutSection () {
    return (
        <section>
            <div className='container'>
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <img src="/img/about2.jpg" alt="" />
                    </div>

                    <div className={styles.textWrapper}>
                        <h3 className={playfairDisplay.className}>Fun facts about me. </h3>

                        <p>Weirdly obsessed about mountains and clouds , Car fanatic or just generally crazy about anything with wheels and an engine, hobbies I enjoy are lifting weights and skiing, I have love for dogs and horses <span>(My TikTok feed consists 95% of the last two)</span>. Finally and most importantly my favourite type of food is Italian.</p>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.reverseCard}`}>
                    <div className={styles.textWrapper}>
                        <div className={styles.titleWrapper}>
                            <h3 className={playfairDisplay.className}>My BS.</h3>
                            <p>(... Back Story)</p>
                        </div>

                        <p>From the age of 15 I started working in a pub kitchen peeling potatos and getting in the way of chefs during service, then when I finished secondary school I had no idea what to do with myself so ended up getting a job as a Commis chef in a resturant in Ascot where I found the beauty of fine dining and really opened my eyes to a completely different way of cooking and enjoying food , but due to the fast paced, high stress and extermely long hours I realised that this wasn't for me. So what next? one GCSE in maths and no idea what I could do. </p>

                        <p>Naturally I decided to do the next thing I love which is cars, so I set out to get an IMI level 3 qualification in maintance and repair of light vehicles which took me 3 years to accomplish. Finally got a job fixing cars at an Indepent Workshop, working on anything from Subaraus to old Morgan cars <span>(the ones made out of wood)</span> but i still wanted more out of my career. So I applied to my local Audi main dealership and with the help of God i managed to charm my way into a job and have been working there for the last 2 years. </p>

                        <p>So why am i making websites in my part time? Truth of it is that my dad and older brother are software developers<span>(you could say it runs in the blood)</span> and my best friend once asked my dad what he'd have to do to get more money and how he could do it to go off his illustrator and graphics design background, simple answer is front-end , while being pressent in the conversation of my dad explaing what he'd have to learn , so i decided to give it ago aswell, so here I am after 100s of hours of courses learning HTML , CSS/SCSS , Java Script and React, i have a new-found love and passion creating websites in my part time, aspiring to be a front-end developer and hopefully landing a job where I can learn even more and keep getting better and better at this. </p>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img id={styles.image} src="/img/about.jpg" alt="" />
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <img src="/img/odin.jpg" alt="" />
                    </div>

                    <div className={styles.textWrapper}>
                        <h3 className={playfairDisplay.className}>Heres a picture of my dog, Odin. </h3>
                        <span>... just because</span>

                    </div>
                </div>
            </div>
        </section>
    )
}