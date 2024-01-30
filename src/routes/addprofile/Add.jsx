import React, { useState } from "react";
import styles from "./Add.module.css";

const Write = (props) => {
  const [post, setPost] = useState({ title: "", contents: "" }); //useState 사용하여 상태 변수 초기화
  const [file, setFile] = useState(null); //file은 초기에 null로 설정

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

    formData.append("file", file);
    formData.append("post", JSON.stringify(post));
    //stringify 메소드는 json 객체를 String 객체로 변환시켜 줌

    fetch("https://ll-api.jungsub.com/create", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => props.history.push("/"));
  }; //폼 제출을 처리하는 submitPost 함수, 기본 제출 동작 막고 파일과 포스트 데이터 추가. 그리고 fetch사용하여 서버에 POST 요청

  return (
    <div>
      <div className={styles.header}>
        <h1>Profile page</h1>
      </div>
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

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default Write;