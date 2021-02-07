import * as React from "react";
import { Link as GLink } from "gatsby";
import * as styles from "./mainNav.module.scss";

type Link = { title: string; url: string };

const MainNav = ({ className }) => {
  const links: Link[] = [
    {
      title: "Service",
      url: "#service",
    },
    {
      title: "About",
      url: "https://clutch.co/profile/zappie-0",
    },
  ];

  return (
    <nav className={className}>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index}>
            <GLink to={link.url}>{link.title}</GLink>
          </li>
        ))}

        <li className={styles.bordered}>
          <GLink to={"#contact"}>{"Let’s talk"}</GLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
