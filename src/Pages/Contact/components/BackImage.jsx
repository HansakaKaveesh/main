import React from "react";
import styles from "./LocationSection.module.css";
const BackImage = () => {
    return (
        <section className={styles.locationSection}>
            <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd91e2a016e78b4576b4c2d31ce0e0013acb947e460022a64c3d363694933f8?placeholderIfAbsent=true&apiKey=2ced3db22aac4ec9b3a268650a41a373"
        alt="Company building"
        className={styles.companyImage}
      />
      </section>
  );
};

export default BackImage;