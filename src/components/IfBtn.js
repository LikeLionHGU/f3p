import { useNavigate } from "react-router-dom";

const IfBtn = () => {
  const movePage = useNavigate();
  const toIf = () => movePage("/category/if");

  return (
    <button onClick={toIf} className="if">
      <span className="title">
        <span className="icon">❔</span>If
      </span>
      <br />
      <span className="explanation">끝없는 상상력, 과몰입</span>
      <img src="img/target-dynamic-color.png" alt="Friend" />
    </button>
  );
};

export default IfBtn;