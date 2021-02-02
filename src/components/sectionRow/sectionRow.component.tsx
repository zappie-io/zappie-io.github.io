import * as React from "react";
import * as styles from "./sectionRow.module.scss";

interface IProps {
  left: JSX.Element | string;
  right: JSX.Element | string;
}

const SectionRow = ({ left, right }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.column}>{left}</div>
        <div className={styles.column}>{right}</div>
      </div>
    </div>
  );
};

export default SectionRow;
