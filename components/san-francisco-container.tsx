import type { NextPage } from "next";
import styles from "./san-francisco-container.module.css";

const SanFranciscoContainer: NextPage = () => {
  return (
    <div className={styles.component3}>
      <div className={styles.component1}>
        <div className={styles.sanFrancisco}>San Francisco</div>
        <div className={styles.clear}>Clear</div>
        <b className={styles.b}>11</b>
        <div className={styles.mayXx20xx}>May XX, 20XX</div>
        <img className={styles.sun1Icon} alt="" src="/sun-11.svg" />
      </div>
      <img
        className={styles.crescentMoon1Icon}
        alt=""
        src="/crescentmoon-1.svg"
      />
    </div>
  );
};

export default SanFranciscoContainer;
