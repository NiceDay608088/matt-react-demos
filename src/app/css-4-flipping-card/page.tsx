"use client";
import React, { useState } from "react";
import styles from "./FlippingCard.module.css";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center items-center h-screen gap-20">
      {/* rotate on click */}
      <div
        className={`${styles.cardContainer} ${isFlipped && styles.flipped}`}
        onClick={handleFlip}
      >
        <div className={`${styles.cardFace} ${styles.front}`}>Click Rotate</div>
        <div className={`${styles.cardFace} ${styles.back}`}>
          Click Rotate backface
        </div>
      </div>
      {/* rotate on hover */}
      <div className={`${styles.cardContainerHover}`}>
        <div className={`${styles.cardFace} ${styles.front}`}>Hover Rotate</div>
        <div className={`${styles.cardFace} ${styles.back}`}>
          Hover Rotate backface
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
