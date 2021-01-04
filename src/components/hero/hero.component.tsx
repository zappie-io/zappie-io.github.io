import * as React from "react";
import * as styles from "./hero.module.scss";
import { Link as GLink } from "gatsby";
import heroImage from "src/images/hero.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>
          Top-notch apps
          <br />
          with React Native
          <br />
          and brush of UX
        </h1>
        <h2 className={styles.desc}>
          Hire top tech talent to design, develop
          <br />
          and deploy your mobile application
        </h2>

        <GLink className={styles.button} to={"#"}>
          Let's talk
        </GLink>
      </div>
      <img className={styles.heroImage} src={heroImage} alt="Zappie hero" />
    </div>
  );
};

export default Hero;
