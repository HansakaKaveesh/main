import React from "react";
import styles from "./LocationSection.module.css";

const BackImage = () => {
    return (
        <section className={styles.locationSection}>
         <img src="img with blur.png"
        alt="Company building"
        className={styles.companyImage}
      />
      </section>
  );
};

export default BackImage;