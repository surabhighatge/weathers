import type { NextPage } from "next";
import styles from "./div-container.module.css";

const DivContainer: NextPage = () => {
  return (
    <div className={styles.component2} id="week1" days1="5">
      <div className={styles.component2Child} />
      <div className={styles.component2Child} />
      <div className={styles.component2Inner} />
      <div className={styles.lineDiv} />
      <div className={styles.component2Child1} />
      <div className={styles.component2Child2} />
      <div className={styles.component2Child3} />
      <img className={styles.sun2Icon} alt="" src="/sun-2.svg" />
      <img className={styles.sun3Icon} alt="" src="/sun-3.svg" />
      <div className={styles.monday}>Monday</div>
      <div className={styles.tuesday}>Tuesday</div>
      <div className={styles.wednesday}>Wednesday</div>
      <div className={styles.thursday}>Thursday</div>
      <div className={styles.friday}>Friday</div>
      <img className={styles.cloud1Icon} alt="" src="/cloud-1.svg" />
      <img className={styles.rain1Icon} alt="" src="/rain-1.svg" />
      <img className={styles.snowflake1Icon} alt="" src="/snowflake-1.svg" />
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
      <div className={styles.topnavigationWrapper}>
        <div className={styles.topnavigation}>
          <div className={styles.statusbarIphone13}>
            <img className={styles.notchIcon} alt="" src="/notch.svg" />
            <div className={styles.leftSide}>
              <div className={styles.statusbarTime}>
                <div className={styles.div10}>1:41</div>
              </div>
            </div>
            <img
              className={styles.rightSideIcon}
              alt=""
              src="/right-side.svg"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.leftTitleRight}>
              <div className={styles.leftAccessory}>
                <div className={styles.iconChevronleft}>􀆉</div>
                <div className={styles.leftTitle}>Weather</div>
              </div>
              <div className={styles.title}>
                <div className={styles.title1}>Title</div>
              </div>
              <div className={styles.rightAccessory}>
                <div className={styles.rightTitle}>􀍡</div>
              </div>
            </div>
            <div className={styles.extra}>
              <div className={styles.searchfield}>
                <img
                  className={styles.iconMagnifyingglass}
                  alt=""
                  src="/icon--magnifyingglass.svg"
                />
                <div className={styles.placeholder}>
                  {" "}
                  Search for a city or airport
                </div>
                <img
                  className={styles.sfSymbolMicrophone}
                  alt=""
                  src="/sf-symbol--microphone.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivContainer;
