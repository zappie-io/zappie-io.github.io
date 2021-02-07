import * as React from "react";
import { Link as GLink } from "gatsby";
import * as styles from "./hero.module.scss";
import heroImage from "src/images/hero.svg";
import { useLayoutEffect, useRef, useState } from "react";

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

  const slide = (event, ratio, ref) => {
    const { left, right } = ref.current.getBoundingClientRect();
    return [(left - event.pageX) / ratio, (right - event.pageY) / ratio];
  };

  const onMove = (event: MouseEvent) => {
    setOffsetDarkDecor(slide(event, 100, phone));
    setOffsetPhone(slide(event, 60, phone));
    setOffsetBlured(slide(event, 40, blured));
    setOffsetAppleIcon(slide(event, 36, appleIcon));
    setOffsetAndroidIcon(slide(event, 20, androidIcon));
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
        </div>
        <div className={styles.canvas}>
          <div
            ref={appleIcon}
            style={{
              transform: `translate3d(${offsetAppleIcon[0]}px, ${offsetAppleIcon[1]}px, 0)`,
            }}
            className={styles.appleIcon}
          />
          <div
            ref={androidIcon}
            style={{
              transform: `translate3d(${offsetAndroidIcon[0]}px, ${offsetAndroidIcon[1]}px, 0)`,
            }}
            className={styles.androidIcon}
          />
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
              <div className={styles.figmaIcon} />
              <div className={styles.textWrapper}>
                <div className={styles.textWrapperTitle} />
                <div className={styles.textWrapperDesc} />
              </div>
            </div>

            <div className={styles.reactWrapper}>
              <div className={styles.figmaIcon} />
              <div className={styles.textWrapper}>
                <div className={styles.textWrapperTitle} />
                <div className={styles.textWrapperDesc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
