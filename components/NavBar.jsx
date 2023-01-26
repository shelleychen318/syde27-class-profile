import React, { useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Demographics",
    },
    {
      id: 3,
      link: "Academics",
    },
    {
      id: 4,
      link: "Co-op",
    },
  ];

  return (
    <div>
      <div>
        <a
          to="Home"
          smooth
          duration={500}
        >
          SYDE '27
        </a>
      </div>

      <ul>
        {links.map(({ id, link, href }) => (
          <li key={id}>
            <a
              to={link}
              smooth
              duration={500}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
      >
        {nav ? <HiXMark size={30} /> : <HiBars2 size={30} />}
      </div>

      {nav && (
        <ul>
          {links.map(({ id, link }) => (
            <li key={id}>
              <a
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
