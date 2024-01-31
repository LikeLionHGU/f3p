import React from "react";
import "./Mainpage.css";
import LoginDialog from "../login/logindialog";

const Mainpage = () => {
  return (
    <div className="app">
      <nav className="header">
        <div className="header__logo">
          <a href="#">FTHREEP</a>
        </div>

        <ul className="header__menu">
          <li>
            <a href="#likelionContact-footer" className="profile-link">
              <LoginDialog />
              <span className="profile-image">
                <img
                  src={`${process.env.PUBLIC_URL}/image/image02.png`}
                  width="60"
                  height="60"
                />
              </span>
            </a>
          </li>
        </ul>

        <a href="#" className="header__toggleBtn">
          <i className="fa-solid fa-bars"></i>
        </a>
      </nav>
      <nav className="header2">
        <ul className="header2__menu">
          <li>
            <b href="#likelion-banner">Home</b>
          </li>
          <li>
            <b href="#likelion-members">What?</b>
          </li>
          <li>
            <b href="#likelionContact-footer">Function</b>
          </li>
          <li>
            <b href="#likelionContact-footer">Introduction</b>
          </li>
          <li>
            <b href="#likelionContact-footer">Contact</b>
          </li>
        </ul>

        <a href="#" className="header2__toggleBtn">
          <i className="fa-solid fa-bars"></i>
        </a>
      </nav>
      <div class="container">
        <div className="video-background">
          <video
            src={`${process.env.PUBLIC_URL}/videos/video.mp4`}
            muted
            autoPlay
            loop
          ></video>
          <div className="text1">" interesting</div>
          <div className="text2"> and smooth </div>
          <div className="text3"> conversation "</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <marquee
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "650px",
              fontSize: "80px",
              display: "inline-block",
            }}
            direction="left"
            loop="infinite" // 끊어지지 않고 계속 이어지도록 설정
            scrollAmount="10"
          >
            A good plan, violently executed now, is better than a perfect plan
            next week. - George S. Patton. If you would win a man to your cause,
            first convince him that you are his sincere friend. - Abraham
            Lincoln.{" "}
          </marquee>
        </div>
      </div>

      <div class="footer">
        <span id="title-footer">FTHREEP</span>

        <div id="likelionAddress-footer">
          <p>
            <span>(주)멋쟁이사자처럼</span>|<span>한동대학교</span>|
            <span>Front-End</span>
          </p>
          <p>경상북도 포항시 북구 흥해읍 한동로 558</p>
        </div>

        <div id="likelionContact-footer">
          <ul>
            <li id="github">
              <a
                href="https://github.com/LikeLionHGU"
                title="멋쟁이사자처럼 Github"
              ></a>
            </li>
            <li id="instargram">
              <a
                href="https://www.instagram.com/likelion_hgu/"
                title="멋쟁이사자처럼 instargram"
              ></a>
            </li>
            <li id="web-official">
              <a
                href="https://hgulikelion.web.app/"
                title="멋쟁이사자처럼 공식 홈페이지"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
