import { useState } from "react";
import styles from "../converModule/DetailCate.module.css";

let variable = 0;

function Friend() {
  const [topic, setTopic] = useState(Topic[variable][0]);
  const beforeBtn = () => {
    if (variable > 0) variable = variable - 1;
    setTopic(Topic[variable][0]);
    console.log(variable);
  };
  const nextBtn = () => {
    if (variable < Topic.length - 1) variable = variable + 1;
    setTopic(Topic[variable][0]);
    console.log(variable);
  };
  return (
    <>
      <div>
        <div className={styles.header}>
          <h1>F3PHER</h1>
        </div>

        <button className={styles.beforeBtn} onClick={beforeBtn}>
          {"<"}
        </button>

        <div className={styles.topic}>
          {topic} <br />
          <span className={styles.txtCntF}>{Topic[variable][1]}</span>
          {Topic[variable][2] ? (
            <span className={styles.txtCntF}>{Topic[variable][2]}</span>
          ) : null}
        </div>

        <button className={styles.nextBtn} onClick={nextBtn}>
          {">"}
        </button>

        <div className={styles.home}>
          <p>
            <a href="/">⌂</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Friend;

const Topic = [
  ["당신의 이상형은?", "연애", "가치관"],
  ["어린시절 있었던 재밌는 이야기", "과거", "추억"],
  ["올해의 영화는?", "영화", false],
  ["상대방과 꼭 같이 해보고 싶은 것", "상상", false],
  ["서로 기억하는 재밌는 이야기", "과거", "추억"],
];
