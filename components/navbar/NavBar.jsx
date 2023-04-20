import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineArrowRight } from "react-icons/hi";
import { GiDuck } from "react-icons/gi";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "About",
      href: "/about",
    },
    {
      id: 2,
      link: "Demographics",
      href: "/demographics",
    },
    {
      id: 3,
      link: "High School",
      href: "/highschool",
    },
    {
      id: 4,
      link: "Academics",
      href: "/academics",
    },
    {
      id: 5,
      link: "Co-op",
      href: "/co-op",
    },
    {
      id: 6,
      link: "Lifestyle",
      href: "/lifestyle",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`${styles.backgroundTintCommon} ${
          showMenu ? styles.backgroundTintOn : styles.backgroundTintOff
        }`}
        onClick={() => {
          setShowMenu(false);
        }}
      />

      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <GiDuck size={25} className={styles.icon} />
          syde 2027
        </Link>

        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className={styles.menuIcon}
        >
          <HiOutlineMenuAlt3 size="2.5rem" />
        </button>
      </div>

      <div
        className={`${styles.sideBar} ${!showMenu ? styles.sideBarClosed : ""}`}
      >
        <div className={styles.menuContainer}>
          <div className={styles.menuHeader}>
            <h2 className={styles.menuTitle}>Sections</h2>
            <button
              onClick={() => {
                setShowMenu(false);
              }}
              className={`${styles.closeMenuIcon} ${styles.menuIcon}`}
            >
              <HiOutlineArrowRight size="2.5rem" />
            </button>
          </div>

          <ul className={styles.sectionsContainer}>
            {links.map(({ id, link, href }) => (
              <li key={id}>
                <Link href={href}>
                  <h4>{link}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
