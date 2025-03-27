import Image from "next/image";
import styles from "./ImageHoverEffectPage.module.css";

const ImageHoverEffectPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className={styles.imageContainer}>
        <Image src="/sports_man_1.png" fill sizes="auto" alt="" />
        <div className={styles.message}>this is the first a</div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/sports_man_2.png" fill sizes="auto" alt="" />
        <div className={styles.message}>bbb</div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/sports_man_3.png" fill sizes="auto" alt="" />
        <div className={styles.message}>ccc</div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/sports_woman_1.png" fill sizes="auto" alt="" />
        <div className={styles.message}>ddd</div>
      </div>
    </div>
  );
};

export default ImageHoverEffectPage;
