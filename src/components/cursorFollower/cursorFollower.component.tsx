import { max } from "lodash";
import * as React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import * as styles from "./cursorFollower.module.scss";

const CursorFollower = () => {
  const animationRef = useRef<number>();
  const [destination, setDestination] = useState([0, 0]);
  const [pos, setPos] = useState([0, 0]);
  const [enabled, setEnabled] = useState(false);

  const lerp = (start, end, ratio) => {
    return (1 - ratio) * start + ratio * end;
  };

  const animate = () => {
    if (!enabled) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const newPos = [
      lerp(pos[0], destination[0], 0.1),
      lerp(pos[1], destination[1], 0.1),
    ];

    setPos(newPos);

    animationRef.current = requestAnimationFrame(animate);
  };

  const onMove = (event: MouseEvent) => {
    setDestination([event.pageX, event.pageY]);
  };

  useLayoutEffect(() => {
    const initMouse = (event) => {
      window.removeEventListener("mousemove", initMouse);
      setPos([event.pageX, event.pageY]);
      setDestination([event.pageX, event.pageY]);
      setEnabled(true);
    };

    window.addEventListener("mousemove", initMouse);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("mousemove", onMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animationRef.current);
    };
  });

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: `translate3d(${pos[0]}px, ${pos[1]}px, 0)`,
        opacity: enabled ? "1.0" : "0.0",
        transition: "opacity 0.5s",
      }}
    ></div>
  );
};

export default CursorFollower;
