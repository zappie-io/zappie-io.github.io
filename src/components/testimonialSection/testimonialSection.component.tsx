import * as React from "react";
import * as styles from "./testimonialSection.module.scss";

interface IProps {
  testimonials: JSX.Element[];
}

const TestimonialSections = ({ testimonials }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {testimonials.map((testimonial, index) => (
          <div
            data-sal="fade"
            data-sal-duration="600"
            data-sal-delay={150 * index}
            data-sal-easing="ease"
            className={styles.column}
          >
            {testimonial}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSections;
