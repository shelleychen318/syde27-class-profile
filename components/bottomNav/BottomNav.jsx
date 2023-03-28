import React from "react";
import Link from "next/link";
import Arrow from "@elsdoerfer/react-arrow";
import styles from "./BottomNav.module.scss";

const NavButtons = ({ currentPage }) => {
  let backPageLink;
  let backPageName;
  let nextPageLink;
  let nextPageName;

  switch (currentPage) {
    case "demographics":
      backPageLink = "/about";
      backPageName = "About";
      nextPageLink = "/highschool";
      nextPageName = "High School";
      break;
    case "highschool":
      backPageLink = "/demographics";
      backPageName = "Demographics";
      nextPageLink = "/academics";
      nextPageName = "Academics";
      break;
    case "academics":
      backPageLink = "/highschool";
      backPageName = "High School";
      nextPageLink = "/co-op";
      nextPageName = "Co-op";
      break;
    case "co-op":
      backPageLink = "/academics";
      backPageName = "Academics";
      nextPageLink = "/lifestyle";
      nextPageName = "Lifestyle";
      break;
    case "lifestyle":
      backPageLink = "/academics";
      backPageName = "Academics";
      break;
  }

  return (
    <div className={styles.navContainer}>
      {backPageLink && (
        <Link href={backPageLink}>
          <div className={styles.linkContainer}>
            <Arrow
              angle={270}
              length={75}
              lineWidth={1.1}
              color="#1f1d1d"
              className={styles.arrow}
            />
            <div className={styles.text}>{backPageName}</div>
          </div>
        </Link>
      )}

      {nextPageLink && (
        <Link href={nextPageLink}>
          <div className={styles.linkContainer}>
            <div className={styles.text}>{nextPageName}</div>
            <Arrow
              angle={90}
              length={75}
              lineWidth={1.1}
              color="#1f1d1d"
              className={styles.arrow}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
