import * as React from "react";
import * as styles from "./sectionHeader.module.scss";

interface IProps {
  category: JSX.Element;
  title: JSX.Element;
  description?: JSX.Element;
}

const SectionHeader = ({ category, title, description }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h2 className={styles.category}>{category}</h2>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
