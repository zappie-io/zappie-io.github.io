import * as React from "react";
import * as styles from "./textSection.module.scss";

interface IProps {
  title: string;
  description: string;
}

const TextSection = ({ title, description }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TextSection;
