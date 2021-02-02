import * as React from "react";
import { Link as GLink } from "gatsby";

import * as styles from "./footer.module.scss";
import logoImage from "src/images/zappie_white.svg";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.signature}>
        <div className={styles.column}>
          <p className={styles.subtitle}>Let’s talk</p>
          <h3 className={styles.title}>
            Ready to buid app
            <br />
            with zappie?
          </h3>
          <p className={styles.description}>
            Get free estimation and consultation
          </p>
        </div>
        <div className={styles.centered}>
          <GLink className={styles.button} to={"#"}>
            Let's talk
          </GLink>
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <GLink className={styles.logoWrapper} to={"#"}>
            <img className={styles.logo} src={logoImage} alt="Logo" />
          </GLink>

          <p className={styles.description}>
            &copy; 2021 Zappie. All rights reserved. Made with ♡ in Poznań
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
