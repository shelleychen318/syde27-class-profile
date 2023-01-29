import React, { useState } from "react";
import Link from "next/link";
import { HiBars2, HiXMark } from "react-icons/hi2";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [nav, setNav] = useState(false);

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
      <Link href="/" className={styles.siteLogo}>
        SYDE 2027
      </Link>

      <div className={styles.divLinks}>
        {links.map(({ id, link, href }) => (
          <a key={id} className={styles.navLink} href={href}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
