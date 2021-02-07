import * as React from "react";
import * as styles from "./developmentDecor.module.scss";

import iconFolder from "src/images/icons/folder.png";

const DevelopmentDecor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.listingBox}>
        <div className={styles.numbers}>
          {Array.from(Array(5)).map((_, index) => (
            <div key={`listing-${index}`}>{index + 1}</div>
          ))}
        </div>
        <div className={styles.listing}>
          <p>
            <span className={styles.purple}>interface </span>
            <span className={`${styles.red} ${styles.bold}`}>IProps</span>
            <span className={styles.gray}>{" {"}</span>
          </p>
          <p>
            <span className={styles.yellow}>&nbsp;&nbsp;&nbsp;&nbsp;items</span>
            <span className={styles.gray}>{": "}</span>
            <span className={`${styles.red} ${styles.bold}`}>
              &nbsp;UserModel
            </span>
            <span className={styles.gray}>{";"}</span>
          </p>
          {/* <p>
            <span className={styles.yellow}>&nbsp;&nbsp;&nbsp;&nbsp;style</span>
            <span className={styles.gray}>{"?: "}</span>
            <span className={`${styles.red} ${styles.bold}`}>
              &nbsp;{"StyleProp"}
            </span>
            <span className={styles.gray}>{"<"}</span>
            <span className={`${styles.red} ${styles.bold}`}>
              {"ViewStyle"}
            </span>
            <span className={styles.gray}>{">"}</span>
            <span className={styles.gray}>{";"}</span>
          </p> */}
          <p>
            <span className={styles.gray}>{"}"}</span>
          </p>
          <p>
            <br />
          </p>
          <p>
            <span className={styles.purple}>type </span>
            <span className={`${styles.purple} ${styles.bold}`}>
              UserListType
            </span>
            <span className={styles.gray}>{" = "}</span>
            <span className={`${styles.red} ${styles.bold}`}>{"React"}</span>
            <span className={styles.gray}>{"."}</span>
            <span className={`${styles.red} ${styles.bold}`}>{"FC"}</span>
            <span className={styles.gray}>{"<"}</span>
            <span className={`${styles.red} ${styles.bold}`}>IProps</span>
            <span className={styles.gray}>{">;"}</span>
          </p>
        </div>
      </div>
      <div className={styles.input}>user|</div>
      <div className={styles.highlightBox}>
        <div className={styles.line}>UserModel</div>
        <div className={`${styles.line} ${styles.lineActive}`}>
          UserListType{" "}
        </div>
        <div className={styles.line}>userRepository</div>
        <div className={styles.line}>selectUserAvatar</div>
        <div className={styles.scroll} />
      </div>
      <img className={styles.folder} src={iconFolder} alt="Folder zappie" />
    </div>
  );
};

export default DevelopmentDecor;
