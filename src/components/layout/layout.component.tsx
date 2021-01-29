import React, { useState, useRef, useEffect } from "react";
import { isBrowser } from "react-device-detect";

import * as styles from "./layout.module.scss";

const DAMPER = 0.09;

const BrowserLayout = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>();

  const animationRef = useRef<number>();
  const [offset, setOffset] = useState(0.0);

  const animate = () => {
    const scrollY = document.documentElement.scrollTop || 0.0;
    setOffset(offset + (scrollY - offset) * DAMPER);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  useEffect(() => {
    const { height: newHeight } = wrapperRef.current.getBoundingClientRect();
    document.body.style.height = newHeight + "px";

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  });

  return (
    <div
      ref={wrapperRef}
      style={{
        transform: `translate3d(0, ${-offset.toFixed(2)}px, 0)`,
        position: "fixed",
      }}
      className={styles.layout}
    >
      {children}
    </div>
  );
};

const MobileLayout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

const Layout = (props) => {
  if (isBrowser) {
    return <BrowserLayout {...props} />;
  } else {
    return <MobileLayout {...props} />;
  }
};

export default Layout;
