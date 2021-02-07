import * as React from "react";
import * as styles from "./designDecor.module.scss";

import justifyIcon from "src/images/icons/justify.svg";
import leftJustifyIcon from "src/images/icons/justify_left.svg";
import rightJustifyIcon from "src/images/icons/justify_right.svg";
import centerIcon from "src/images/icons/center.svg";

import iIcon from "src/images/icons/i.svg";
import uIcon from "src/images/icons/u.svg";
import sIcon from "src/images/icons/s.svg";
import checkmarkIcon from "src/images/icons/check.svg";

const DesignDecor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.row}>
          <span>Active</span>
          <span>Hover</span>
          <span className={styles.active}>Normal</span>
        </div>
        <div className={styles.row}>
          <img src={leftJustifyIcon} alt={"Justify left"} />
          <img src={rightJustifyIcon} alt={"Justify right"} />
          <img src={justifyIcon} alt={"Justify"} />
          <img src={centerIcon} alt={"Center"} />
        </div>
      </div>
      <div className={styles.button}>Button</div>
      <div className={styles.fontBox}>
        <span className={styles.active}>
          <img src={iIcon} alt={"I font"} />
        </span>
        <span>
          <img src={uIcon} alt={"U font"} />
        </span>
        <span>
          <img src={sIcon} alt={"S font"} />
        </span>
      </div>

      <div className={styles.checked}>
        <div className={styles.checkbox}>
          <img src={checkmarkIcon} alt={"Checked"} />
        </div>
        <div className={styles.label}>Checkbox</div>
      </div>

      <div className={styles.unchecked}>
        <div className={styles.checkbox} />
        <div className={styles.label}>Checkbox</div>
      </div>
    </div>
  );
};

export default DesignDecor;
