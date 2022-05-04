import React from "react";
// import Pageable from "pageable";
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import Fourth from "./pages/fourth";

import { useEffect, useRef } from "react";

import "./App.css";

const DIVIDER_HEIGHT = 5; //페이지와 페이지 사이에 빈공간 (오차허용범위)

function App() {
  //리액트 useRef 훅 호출
  //이걸로 outer div 잡아줌
  const outerDivRef = useRef(); //스크롤제어

  useEffect(() => {
    const wheelHandler = (e) => {
      //마우스 휠 통작 캐치
      e.preventDefault();
      const { deltaY } = e; //이 값을 토대로 scrollTo 함수를 통해 스크롤을 움직임
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치

      //이벤트 발생시점 현재페이지 파악
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같음

      // ### 스크롤 내릴 때 #####
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //스크롤 위아래가 1페이지 범위에 속해 있으면
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT, //화면 세로 길이에 오차범위 더해주기 -> 다음 페이지로 넘어감
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //스크롤 위아래가 2페이지 범위에 속해 있으면
          //현재 2페이지
          outerDivRef.current.scrollTo({
            //스크롤 움직여주는 함수
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2, //현재페이지에서 *2 높이 하면 다음 화면으로 넘어감
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //스크롤 위아래가 2페이지 범위에 속해 있으면
          //현재 2페이지
          outerDivRef.current.scrollTo({
            //스크롤 움직여주는 함수
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3, //현재페이지에서 *2 높이 하면 다음 화면으로 넘어감
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            //스크롤 움직여주는 함수
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2, //마찬가지임
            left: 0,
            behavior: "smooth",
          });
        }
      }

      // ##### 스크롤 올릴 때 #######
      else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지");
          //현재 1페이지
          outerDivRef.current.scrollTo({
            //걍 그대로임
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지");
          //2번째 페이지 영역 벗어나면
          //현재 2페이지
          outerDivRef.current.scrollTo({
            //스크롤 움직여주는 함수
            top: pageHeight - DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지");
          //2번째 페이지 영역 벗어나면
          //현재 2페이지
          outerDivRef.current.scrollTo({
            //스크롤 움직여주는 함수
            top: pageHeight * 2 - DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 4페이지");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 - DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  });
  return (
    <div ref={outerDivRef} className="outer">
      <div className="inner">
        <First />
      </div>
      <div className="inner">
        <Second />
      </div>
      <div className="inner">
        <Third />
      </div>
      <div className="inner">
        <Fourth />
      </div>
    </div>
  );
}

export default App;
