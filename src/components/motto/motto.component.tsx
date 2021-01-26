import * as React from "react";
import * as styles from "./motto.module.scss";

const Motto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        We buid outstanding react native apps for sturtups.
        <br />
        Talented people of design and code behind.
        <br />
        Only highest quality - no bullshit.
      </div>
    </div>
  );
};

export default Motto;
