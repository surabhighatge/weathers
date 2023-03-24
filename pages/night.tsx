import type { NextPage } from "next";
import SanFranciscoContainer from "../components/san-francisco-container";
import styles from "./night.module.css";

const Night: NextPage = () => {
  return (
    <div className={styles.night}>
      <div className={styles.component2}>
        <div className={styles.component2Child} />
        <div className={styles.component2Child} />
        <div className={styles.component2Inner} />
        <div className={styles.lineDiv} />
        <div className={styles.component2Child1} />
        <div className={styles.component2Child2} />
        <div className={styles.component2Child3} />
        <img className={styles.sun2Icon} alt="" src="/sun-21.svg" />
        <img className={styles.sun3Icon} alt="" src="/sun-31.svg" />
        <div className={styles.monday}>Monday</div>
        <div className={styles.tuesday}>Tuesday</div>
        <div className={styles.wednesday}>Wednesday</div>
        <div className={styles.thursday}>Thursday</div>
        <div className={styles.friday}>Friday</div>
        <img className={styles.cloud1Icon} alt="" src="/cloud-1.svg" />
        <img className={styles.rain1Icon} alt="" src="/rain-11.svg" />
        <img className={styles.snowflake1Icon} alt="" src="/snowflake-11.svg" />
        <div className={styles.div}>10</div>
        <div className={styles.div1}>10</div>
        <div className={styles.div2}>10</div>
        <div className={styles.div3}>10</div>
        <div className={styles.div4}>10</div>
        <div className={styles.div5}>10</div>
        <div className={styles.div6}>10</div>
        <div className={styles.div7}>10</div>
        <div className={styles.div8}>10</div>
        <div className={styles.div9}>10</div>
      </div>
      <SanFranciscoContainer />
      <div className={styles.nightChild} />
    </div>
  );
};

export default Night;
