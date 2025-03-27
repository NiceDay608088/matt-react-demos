import React from "react";
import Image from "next/image";
import style from "./ImageShiftOnHover.module.css";

const ImageShiftOnHover = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className={style.imageContainer}>
        <Image src="/portrait.jpg" alt="" sizes="auto" fill />
      </div>
    </div>
  );
};

export default ImageShiftOnHover;
