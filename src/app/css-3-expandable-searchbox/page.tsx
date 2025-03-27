import React from "react";
import styles from "./ExpandableSearchBoxPage.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const ExpandableSearchBoxPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className={`${styles.searchContainer}`}>
        <input type="text" placeholder="Search" />
        <BiSearchAlt2 size={30} />
      </div>
    </div>
  );
};

export default ExpandableSearchBoxPage;
