import React from 'react'
import styles from './AstraImg.module.scss'

function AstraImg() {
  return (
    <section className='container'>
        <div className={styles.imageGrid}>
            <img className={styles.img1} src="/img/AstraHome.png" alt="" />
            <img className={styles.img2} src="/img/AstraContactForm.png" alt="" />
            <img className={styles.img3} src="/img/AstraAbout.png" alt="" />
            <img className={styles.img4} src="/img/AstraProjectDrawings.png" alt="" />
            <img className={styles.img5} src="/img/AstraProjectSancho.png" alt="" />
            <img className={styles.img6} src="/img/AstraProjectTehila.png" alt="" />
        </div>
    </section>
  )
}

export default AstraImg