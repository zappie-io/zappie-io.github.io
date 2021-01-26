import * as React from "react";
import { Link as GLink } from "gatsby";
import * as styles from "./hero.module.scss";
import heroImage from "src/images/hero.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.title}>
            Top-notch
            <br />
            React Native apps
            <br />
            with brush of UX
          </h1>
          <h2 className={styles.desc}>
            Top tech talent to design, develop and deploy
            <br />
            your mobile application
          </h2>

          <GLink className={styles.button} to={"#"}>
            Let's talk
          </GLink>
        </div>
        <img className={styles.heroImage} src={heroImage} alt="Zappie hero" />
      </div>
    </div>
  );
};

export default Hero;
