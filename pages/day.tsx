import type { NextPage } from "next";
import SFContainer from "../components/s-f-container";
import Container10 from "../components/container10";
import styles from "./day.module.css";

const Day: NextPage = () => {
  return (
    <div className={styles.day}>
      <div className={styles.frame2}>
        <SFContainer />
        <Container10 />
      </div>
    </div>
  );
};

export default Day;
