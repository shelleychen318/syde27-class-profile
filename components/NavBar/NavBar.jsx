import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { Variant, motion } from "framer-motion";

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transiiton: {
        delay: 0.7,
      },
    },
  };

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

  return (
    <div className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          SYDE 2027
        </Link>
        <ul className={styles.navLinks}>
          {links.map(({ id, link, href }) => (
            <li key={id}>
              <a href={href}>{link}</a>
            </li>
          ))}
        </ul>
        <div className={styles.menu}>
          <HiBars2
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className={styles.closeMenu}
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div
          className={styles.menuX}
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiXMark
            onClick={() => {
              setToggle(false);
            }}
          />
          {links.map(({ id, link, href }) => (
            <li key={id}>
              <a href={href}>{link}</a>
            </li>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
