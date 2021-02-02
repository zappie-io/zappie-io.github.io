import * as React from "react";
import * as styles from "./testimonial.module.scss";

interface IProps {
  description: JSX.Element | string;
  author: {
    avatarSrc: string;
    name: string;
    title: string;
  };
}

const Testimonial = ({ description, author }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{description}</div>
      <div className={styles.author}>
        <img
          src={author.avatarSrc}
          title={author.name}
          className={styles.avatar}
        />
        <div className={styles.column}>
          <p className={styles.name}>{author.name}</p>
          <p className={styles.title}>{author.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
