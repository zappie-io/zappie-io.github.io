import * as React from "react";
import { Link as GLink } from "gatsby";

import MainNav from "../mainNav/mainNav.component";
import * as styles from "./header.module.scss";
import logoImage from "src/images/zappie.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.wrapper}>
        <GLink className={styles.logoWrapper} to={"#"}>
          <img className={styles.logo} src={logoImage} alt="Logo" />
        </GLink>
        <MainNav className={styles.nav} />
      </header>
    </div>
  );
};

export default Header;
