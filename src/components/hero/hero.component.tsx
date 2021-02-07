import * as React from "react";
import { Link as GLink } from "gatsby";
import * as styles from "./hero.module.scss";
import { useLayoutEffect, useRef, useState } from "react";

import iconAndroid from "src/images/icons/icon_android.svg";
import iconApple from "src/images/icons/icon_apple.svg";
import iconReact from "src/images/icons/icon_react.svg";
import iconFigma from "src/images/icons/icon_figma.svg";
import iconClutch from "src/images/icons/clutch.svg";

const Hero = () => {
  const phone = useRef(null);
  const [offsetPhone, setOffsetPhone] = useState([0, 0]);

  const darkDecor = useRef(null);
  const [offsetDarkDecor, setOffsetDarkDecor] = useState([0, 0]);

  const blured = useRef(null);
  const [offsetBlured, setOffsetBlured] = useState([0, 0]);

  const appleIcon = useRef(null);
  const [offsetAppleIcon, setOffsetAppleIcon] = useState([0, 0]);

  const androidIcon = useRef(null);
  const [offsetAndroidIcon, setOffsetAndroidIcon] = useState([0, 0]);

  const textDecor = useRef(null);
  const [offsetTextDecor, setOffsetTextDecor] = useState([0, 0]);

  const slide = (event, ratio, ref) => {
    const { left, right } = ref.current.getBoundingClientRect();
    return [(left - event.pageX) / ratio, (right - event.pageY) / ratio];
  };

  const onMove = (event: MouseEvent) => {
    setOffsetDarkDecor(slide(event, 100, phone));
    setOffsetPhone(slide(event, 70, phone));
    setOffsetBlured(slide(event, 50, blured));
    setOffsetAppleIcon(slide(event, 46, appleIcon));
    setOffsetAndroidIcon(slide(event, 39, androidIcon));
    setOffsetTextDecor(slide(event, 130, textDecor));
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  });

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

          <GLink to={"https://clutch.co/profile/zappie-0"}>
            <div className={styles.clutchWrapper}>
              Find us on
              <img src={iconClutch} alt="Zappie clutch" />
            </div>
          </GLink>
        </div>
        <div className={styles.canvas}>
          <div
            ref={appleIcon}
            style={{
              transform: `translate3d(${offsetAppleIcon[0]}px, ${offsetAppleIcon[1]}px, 0)`,
            }}
            className={styles.appleIcon}
          >
            <img src={iconApple} alt="Apple" />
          </div>
          <div
            ref={androidIcon}
            style={{
              transform: `translate3d(${offsetAndroidIcon[0]}px, ${offsetAndroidIcon[1]}px, 0)`,
            }}
            className={styles.androidIcon}
          >
            <img src={iconAndroid} alt="Android" />
          </div>
          <div
            ref={phone}
            className={styles.phone}
            style={{
              transform: `translate3d(${offsetPhone[0]}px, ${offsetPhone[1]}px, 0)`,
            }}
          />
          <div
            ref={darkDecor}
            style={{
              transform: `translate3d(${offsetDarkDecor[0]}px, ${offsetDarkDecor[1]}px, 0)`,
            }}
            className={styles.darkDecor}
          />
          <div
            style={{
              transform: `translate3d(${offsetPhone[0]}px, ${offsetPhone[1]}px, 0)`,
            }}
            className={styles.darkDecorMask}
          >
            <div className={styles.circle} />
          </div>
          <div
            ref={blured}
            style={{
              transform: `translate3d(${offsetBlured[0]}px, ${offsetBlured[1]}px, 0)`,
            }}
            className={styles.blured}
          >
            <div className={styles.figmaWrapper}>
              <div className={styles.textIcon}>
                <img src={iconFigma} alt="Figma" />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.textWrapperTitle} />
                <div className={styles.textWrapperDesc} />
              </div>
            </div>

            <div className={styles.reactWrapper}>
              <div className={styles.textIcon}>
                <img src={iconReact} alt="React" />
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.textWrapperTitle} />
                <div className={styles.textWrapperDesc} />
              </div>
            </div>
          </div>

          <div
            ref={textDecor}
            style={{
              transform: `translate3d(${offsetTextDecor[0]}px, ${offsetTextDecor[1]}px, 0)`,
            }}
            className={styles.textDecor}
          >
            Aa
          </div>
          <div
            style={{
              transform: `translate3d(${offsetTextDecor[0]}px, ${offsetTextDecor[1]}px, 0)`,
            }}
            className={styles.textSelect}
          >
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
