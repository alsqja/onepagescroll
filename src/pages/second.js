import React, { forwardRef } from "react";
import { PageContainer, TextDiv } from "../style/Style";
import { useRecoilValue } from "recoil";
import { page } from "../store/recoil";
const second = forwardRef((props, ref) => {
  const current = useRecoilValue(page);
  return (
    <PageContainer ref={ref}>
      <TextDiv className={current === 2 ? "action " : null}>Second</TextDiv>
    </PageContainer>
  );
});

export default second;
