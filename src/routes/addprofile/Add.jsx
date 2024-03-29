import React, { useEffect, useState } from "react";
import styles from "./Add.module.css";
import { useParams } from "react-router-dom";

const Write = (props) => {
  const [post, setPost] = useState({ title: "", contents: "" }); //useState 사용하여 상태 변수 초기화
  const [file, setFile] = useState(null); //file은 초기에 null로 설정
  const memberID = localStorage.getItem("memberID");
  const params = useParams();
  const id = params.happy;

  const changeValue = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }; //입력값 변화 처리하는 changeValue함수, 입력값이 변경 될 때마다 post상태에 새로운 값 업데이트

  const saveFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }; //파일 입력값 변호 처리하는 savefile함수. file 상태 설정하고 파일 입력값 재설정

  const submitPost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", file);
    formData.append("c_answer", post.contents);
    formData.append("t_answer", post.title);
    formData.append("memberID", memberID);
    formData.append("q_id", id);

    fetch("https://ll-api.jungsub.com/talk/mypage/answer", {
      method: "POST",
      body: formData,
      headers: {},
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.ok);
        if (!!json.ok) {
          window.location.reload();
        }
      });
  }; //폼 제출을 처리하는 submitPost 함수, 기본 제출 동작 막고 파일과 포스트 데이터 추가. 그리고 fetch사용하여 서버에 POST 요청
  const [recapData, setRecapData] = useState({});
  useEffect(() => {
    //처음 한번만 실행하기 위해
    fetch(`https://ll-api.jungsub.com/talk/mypage/get/${memberID}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ qid: id }),
    })
      .then((data) => data.json())
      .then((json) => setRecapData(json));
  }, [memberID, id]);

  return (
    <div>
      <div className={styles.header}>
        <h1>Profile page</h1>
      </div>
      {!!recapData.photo && (
        <div className={styles.upload}>
          <h2>{recapData.photo.t_answer}</h2>
          <h3>{recapData.photo.c_answer}</h3>
          <img
            src={"https://ll-api.jungsub.com" + recapData.photo.img_path}
            alt="img"
          />
        </div>
      )}
      <form onSubmit={submitPost} className="write-form">
        <label htmlFor="title">제목</label>
        <input type="text" id="title" name="title" onChange={changeValue} />

        <label htmlFor="contents">내용</label>
        <textarea
          id="contents"
          name="contents"
          onChange={changeValue}
        ></textarea>

        <label htmlFor="file">파일 선택</label>
        <input type="file" id="file" onChange={saveFile} />

        <button type="submit" className={styles.submitBtn}>
          등록
        </button>
        <button
          onClick={function () {
            // const url = "https://ll-api.jungsub.com/talk/mypage/delete/" + id;
            fetch(`https://ll-api.jungsub.com/talk/mypage/delete/${id}`, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ memberID: memberID }),
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json.ok);
                if (!!json.ok) {
                  window.location.reload();
                }
              });
          }}
          className={styles.DeleteBtn}
        >
          삭제
        </button>
      </form>
    </div>
  );
};

export default Write;
