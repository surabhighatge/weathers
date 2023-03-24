import type { NextPage } from "next";
import styles from "./s-f-container.module.css";

const SFContainer: NextPage = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.sanFrancisco}>San Francisco</div>
      <div className={styles.clear}>Clear</div>
      <b className={styles.b}>11</b>
      <div className={styles.mayXx20xx} />
      <img className={styles.sun1Icon} alt="" src="/sun-12.svg" />
    </div>
  );
};

export default SFContainer;
