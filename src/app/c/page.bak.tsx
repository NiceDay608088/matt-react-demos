"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./SlidingTabIndicator.module.css";

const SlidingTabIndicator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <span className={styles.indicator} style={indicatorStyle} />
      </div>
    </div>
  );
};

export default SlidingTabIndicator;
