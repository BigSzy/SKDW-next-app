import React from "react";
import styles from "./DaintreeImg.module.scss";

function DaintreeImg() {
  return (
    <section className="container">
      <div className={styles.imageGrid1}>
        <div className={styles.imgWrapper}>
          <h4>Home page</h4>
          <img src="/img/DaintreeHome2.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <h4>Shopping basket page</h4>
          <img src="/img/DaintreeShoppingBasketFull.png" alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <h4>All products page</h4>
          <img src="/img/DaintreeAllProducts.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default DaintreeImg;
