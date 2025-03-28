"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SlidingTabIndicator.module.css";

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

const SlidingTabIndicatorPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const currentTab = tabRefs.current[activeTabIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTabIndex]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className={styles.tabList}>
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`${styles.tab}`}
              onClick={() => setActiveTabIndex(index)}
              ref={(rel) => {
                tabRefs.current[index] = rel;
              }}
            >
              {tab}
            </div>
          );
        })}
        <div className={styles.aaa} style={indicatorStyle} />
      </div>
    </div>
  );
};

export default SlidingTabIndicatorPage;
