import React, { useEffect, useRef, useState } from "react";
// import Pageable from "pageable";
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import Fourth from "./pages/fourth";

import "./App.css";

const DIVIDER_HEIGHT = 5; //페이지와 페이지 사이에 빈공간 (오차허용범위)

function App() {
  return (
    // <div ref={outerDivRef} className="outer">
    <article className="scroller">
      <section>
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "gold" }}
        ></div>
      </section>
      <section>
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "orange" }}
        ></div>
      </section>
      <section>
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "dodgerblue",
          }}
        ></div>
      </section>
      <section>
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "yellowgreen",
          }}
        ></div>
      </section>
      <section>
        <div
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "skyblue",
          }}
        ></div>
      </section>
    </article>
    // </div>
  );
}

export default App;
