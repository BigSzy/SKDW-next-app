import React from "react";
import styles from "./ProjectGrid.module.scss";
import Link from "next/link";

function ProjectGrid() {
  return (
    <section className="container">
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <Link href="/projects/astra" className={styles.img}>
            <img src="/img/AstraHome.png" alt="" />
          </Link>
          <div className={styles.info}>
            <h2>Astra Studios</h2>
            <p>A Graphics Designer's Portfolio Website</p>
          </div>
        </div>

        <div className={styles.projectCard}>
          <Link href="/projects/daintree" className={styles.img}>
            <img src="/img/DaintreeHome.png" alt="" />
          </Link>
          <div className={styles.info}>
            <h2>Daintree</h2>
            <p>E-commerce Portfolio Project</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;
