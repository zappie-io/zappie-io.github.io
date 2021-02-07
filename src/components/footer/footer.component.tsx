import * as React from "react";
import { Link as GLink } from "gatsby";

import * as styles from "./footer.module.scss";
import logoImage from "src/images/zappie_white.svg";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    alert(email);
  };

  return (
    <footer className={styles.wrapper}>
      <div className={styles.signature}>
        <div
          data-sal="fade"
          data-sal-duration="600"
          data-sal-easing="ease"
          className={styles.column}
        >
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
        <div id={"contact"} className={styles.contactForm}>
          <input
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
          />
          <div>
            <p>By sending email, I agree to zappie with me</p>

            <div className={styles.button} onClick={onSubmit}>
              Let's talk
            </div>
          </div>
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
