import React from "react";
import styles from "./AstraImg.module.scss";

function AstraImg() {
  return (
    <section className="container">
      <div className={styles.imageGrid1}>
        <div className={styles.imgWrapper}>
          <h4>Home Page</h4>
          <img src="/img/AstraHome.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <h4>Jadon Sancho Project Page</h4>
          <img src="/img/AstraJS.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <h4>Portrait Project Page</h4>
          <img src="/img/AstraPD.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <h4>Sports Graphics Project Page</h4>
          <img src="/img/AstraSG.png" alt="" />
        </div>
      </div>

      <div className={styles.imageGrid2}>
        <div className={styles.imgWrapper}>
          <h4>Contact Page</h4>
          <img src="/img/AstraContact.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <h4>About Me Page</h4>
          <img src="/img/AstraAbout.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default AstraImg;
