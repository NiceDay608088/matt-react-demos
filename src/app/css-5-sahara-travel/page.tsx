import React from "react";
import styles from "./SaharaTravel.module.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {
  return (
    <div className={`${poppins.className} h-full`}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <span> </span>
          <div className="flex items-center gap-12">
            <span>Home</span>
            <span>Region</span>
            <span>About</span>
            <div className="bg-white text-black rounded-full p-2">
              <AiOutlineMenu size={16} />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.leftPanel}>
            <div className="text-9xl">Sahara</div>
            <div>
              Until 2020, no other member state of the United Nations had ever
              officially recognized Moroccan sovereignty over parts of Western
              Sahara.[14][15][16] In 2020, the United States recognized Moroccan
              sovereignty over Western Sahara in exchange for Moroccan
              normalization of relations with Israel.
            </div>
            <div></div>
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.imageRow}>
              <div className={styles.imageContainer}>
                <Image src="/pic-1.png" alt="" width={200} height={200} />
              </div>
              <div className={styles.imageContainer}>
                <Image src="/pic-2.png" alt="" width={200} height={200} />
              </div>
            </div>
            <div className={styles.imageRow}>
              <div className={styles.imageContainer}>
                <Image src="/pic-3.png" alt="" width={200} height={200} />
              </div>
              <div className={styles.imageContainer}>
                <Image src="/pic-4.png" alt="" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
