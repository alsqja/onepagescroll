import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import Pageable from "pageable";
import FirstPage from "./pages/first";
import SecondPage from "./pages/second";
import ThirdPage from "./pages/third";
import FourthPage from "./pages/fourth";

import "./App.css";

const View = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh; //100%로 하면 휠 이벤트 안됨
  overflow-y: auto;
  background-color: rgb(255, 255, 252);
`;

const DIVIDER_HEIGHT = 5; //페이지와 페이지 사이에 빈공간 (오차허용범위)

function App() {
  const firstPage = useRef();
  const secondPage = useRef();
  const thirdPage = useRef();
  const fourthPage = useRef();
  const footer = useRef();
  const outerDivRef = useRef(); //스크롤제어
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(firstPage);
  // const [topValues, setTopValues] = useState({});
  // const [loading, setLoading] = useState(false);
  let wheel_timer = 0;
  const wheelHandler = (e) => {
    clearTimeout(wheel_timer);
    wheel_timer = setTimeout(() => {
      // if (loading) return;
      // setLoading(true);
      //마우스 휠 통작 캐치
      console.log(e);
      // e.preventDefault();
      // e.stopPropagation();

      const { deltaY } = e; //이 값을 토대로 scrollTo 함수를 통해 스크롤을 움직임
      // ##### 스크롤 내릴 때 #######
      if (deltaY > 1) {
        // console.log("++", currentPage.current);

        if (currentPage === firstPage) {
          setCurrentPage(secondPage);
        }
        if (currentPage === secondPage) {
          setCurrentPage(thirdPage);
        }
        if (currentPage === thirdPage) {
          setCurrentPage(fourthPage);
        }
        if (currentPage === fourthPage) {
          setCurrentPage(fourthPage);
        }
      }

      // ##### 스크롤 올릴 때 #######
      else if (deltaY < 0) {
        // console.log("--", currentPage.current);

        if (currentPage === fourthPage) {
          setCurrentPage(thirdPage);
        }
        if (currentPage === thirdPage) {
          setCurrentPage(secondPage);
        }
        if (currentPage === secondPage) {
          setCurrentPage(firstPage);
        }
        if (currentPage === firstPage) {
          setCurrentPage(firstPage);
        }
      }
    }, 50);
    // setLoading(false);
  };

  useEffect(() => {
    // console.log("useEffect ", currentPage.current.offsetTop);
    outerDivRef.current.scrollTo({
      top: currentPage.current.offsetTop,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <>
      <View ref={outerDivRef} onWheel={wheelHandler}>
        <div ref={firstPage}>
          <FirstPage pageNum={pageNum} />
        </div>
        <div ref={secondPage}>
          <SecondPage pageNum={pageNum} />
        </div>
        <div ref={thirdPage}>
          <ThirdPage pageNum={pageNum} />
        </div>
        <div ref={fourthPage}>
          <FourthPage pageNum={fourthPage} />
        </div>
      </View>
    </>
  );
}

export default App;
