import * as React from "react";
import { useCallback, useLayoutEffect, useState } from "react";
import * as styles from "./cursorFollower.module.scss";

const CursorFollower = () => {
  const [destination, setDestination] = useState([0, 0]);
  const [destinationX, setDestinationX] = useState(0);
  const [pos, setPos] = useState([0, 0]);

  const onInterval = useCallback(() => {
    const diff = [destination[0] - pos[0], destination[1] - pos[1]];
    const maxStep = 100;

    const dest = [
      pos[0] + Math.sign(diff[0]) * Math.min(Math.abs(diff[0]), maxStep),
      pos[1] + Math.sign(diff[1]) * Math.min(Math.abs(diff[1]), maxStep),
    ];

    setPos(dest);

    console.log(destinationX);
    // console.log(pos);
  }, [destinationX, destination, pos]);

  const onMove = useCallback((event: MouseEvent) => {
    setDestination([event.pageX, event.pageY]);
    setDestinationX(event.pageX);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("mousemove", onMove);
    const interval = setInterval(onInterval, 100);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: `translate(${pos[0]}px, ${pos[1]}px)`,
      }}
    >
      twoj stary
    </div>
  );
};

export default CursorFollower;
