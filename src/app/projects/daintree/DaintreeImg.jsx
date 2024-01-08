import React from "react";
import styles from "./DaintreeImg.module.scss";

function DaintreeImg() {
  return (
    <section className="container">
      <div className={styles.imageGrid1}>
        <div className={styles.imgWrapper}>
          <img src="/img/DaintreeHome2.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img src="/img/DaintreeShoppingBasket.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img src="/img/DaintreeAllProducts.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default DaintreeImg;
