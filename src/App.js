import React, { useState, useEffect } from "react";

import "./css/style.css";
import "./css/itemlist.css";
import teslaimage from "./Assets/tesla 3.jpg";
import bmwimage from "./Assets/bmw 740.jpg";
import macbookimage from "./Assets/macbook pro.jpg";
import iphoneimage from "./Assets/iphone 15 pro.jpg";
import ipadimage from "./Assets/ipad 5gen.jpg";
import macbookairimage from "./Assets/macbook.jpg";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <header>
        <div className="info-bar">
          <div className="info-bar__time">{formatTime(currentTime)}</div>
          <div className="info-bar__icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="menu-bar">
          <div className="menu-bar__location">
            <div className="menu-bar__location-text">역삼1동</div>
            <div className="menu-bar__location-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="menu-bar__icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
        </div>
      </header>

      <main>
        <div className="items-list">
          <div className="item-list__img">
            <img src={teslaimage} alt="tesla model" />
          </div>
          <div className="item-list__info">
            <div className="item-list__info-title">Tesla Model X</div>
            <div className="item-list__info-meta">역삼동 20초전</div>
            <div className="item-list__info-price">142,000,000원</div>
          </div>
        </div>
        <div className="items-list">
          <div className="item-list__img">
            <img src={bmwimage} alt="bmw740 " />
          </div>
          <div className="item-list__info">
            <div className="item-list__info-title">BMW 740i X 드라이브</div>
            <div className="item-list__info-meta">청담동 15초전</div>
            <div className="item-list__info-price">174,900,000원</div>
          </div>
        </div>
        <div className="items-list">
          <div className="item-list__img">
            <img src={macbookimage} alt="macbook pro " />
          </div>
          <div className="item-list__info">
            <div className="item-list__info-title">맥북프로 팝니다</div>
            <div className="item-list__info-meta">대치동 37초전</div>
            <div className="item-list__info-price">270만원</div>
          </div>
        </div>
        <div className="items-list">
          <div className="item-list__img">
            <img src={iphoneimage} alt="iphone pro " />
          </div>

          <div className="item-list__info">
            <div className="item-list__info-title">아이폰 15프로 팝니다</div>
            <div className="item-list__info-meta">역삼1동 10초전</div>
            <div className="item-list__info-price">190만원</div>
          </div>
        </div>
        <div className="items-list">
          <div className="item-list__img">
            <img src={ipadimage} alt="ipad " />
          </div>
          <div className="item-list__info">
            <div className="item-list__info-title">아이패드 팝니다</div>
            <div className="item-list__info-meta">청담동 20초전</div>
            <div className="item-list__info-price">120만원</div>
          </div>
        </div>
        <div className="items-list">
          <div className="item-list__img">
            <img src={macbookairimage} alt="macbook air " />
          </div>
          <div className="item-list__info">
            <div className="item-list__info-title">
              맥북에어 팝니다 2024년형
            </div>
            <div className="item-list__info-meta">삼성동 50초전</div>
            <div className="item-list__info-price">180만원</div>
          </div>
        </div>
        <div className="write-btn">+ 글쓰기</div>
      </main>

      <footer>
        <div className="footer-block">
          <div className="footer-icons">
            <div className="footer-icons__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="footer-icons__desc">홈</div>
          </div>
          <div className="footer-icons">
            <div className="footer-icons__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </div>
            <div className="footer-icons__desc">동네 생활</div>
          </div>
          <div className="footer-icons">
            <div className="footer-icons__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div className="footer-icons__desc">내 근처</div>
          </div>
          <div className="footer-icons">
            <div className="footer-icons__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            </div>
            <div className="footer-icons__desc">채팅</div>
          </div>
          <div className="footer-icons">
            <div className="footer-icons__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="footer-icons__desc">나의 당근</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
