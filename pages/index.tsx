import type { NextPage } from "next";
import DivContainer from "../components/div-container";
import styles from "./index.module.css";

const Morning: NextPage = () => {
  return (
    <div className={styles.morning}>
      <div className={styles.component1}>
        <div className={styles.sanFrancisco}>San Francisco</div>
        <div className={styles.clear}>Clear</div>
        <b className={styles.b}>11</b>
        <div className={styles.mayXx20xx}>May XX, 20XX</div>
        <img className={styles.sun1Icon} alt="" src="/sun-1.svg" />
      </div>
      <DivContainer />
    </div>
  );
};

export default Morning;
