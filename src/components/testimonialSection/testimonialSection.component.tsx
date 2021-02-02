import * as React from "react";
import * as styles from "./testimonialSection.module.scss";

interface IProps {
  testimonials: JSX.Element[];
}

const TestimonialSections = ({ testimonials }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {testimonials.map((testimonial) => (
          <div className={styles.column}>{testimonial}</div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSections;
