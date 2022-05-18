import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import Fourth from "./pages/fourth";
import { RecoilRoot, useRecoilState } from "recoil";
import { page } from "./store/recoil";
import "./App.css";

const Wraper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

function App() {
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();

  const [, setCurrent] = useRecoilState(page);
  const scrollHandle = () => {
    const returnY = (el) => el.current.getBoundingClientRect().y;
    if (returnY(first) >= -100 && returnY(first) <= 100) setCurrent(1);
    if (returnY(second) && returnY(second) <= 100) setCurrent(2);
    if (returnY(third) >= -100 && returnY(third) <= 100) setCurrent(3);
    if (returnY(fourth) >= -100 && returnY(fourth) <= 100) setCurrent(4);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle, true);
    return () => {
      window.removeEventListener("scroll", scrollHandle, true);
    };
  }, []);

  return (
    <>
      <Wraper>
        <First ref={first} />
        <Second ref={second} />
        <Third ref={third} />
        <Fourth ref={fourth} />
      </Wraper>
    </>
  );
}

export default App;
