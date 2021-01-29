import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import * as styles from "./layout.module.scss";

const DAMPER = 0.09;

const Layout = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const animationRef = useRef<number>();
  const [offset, setOffset] = useState(0.0);

  const animate = (time) => {
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
      }}
      className={styles.layout}
    >
      {children}
    </div>
  );
};

export default Layout;
