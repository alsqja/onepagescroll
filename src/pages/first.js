import React, { forwardRef } from "react";
import { PageContainer, TextDiv } from "../style/Style";
import { useRecoilValue } from "recoil";
import { page } from "../store/recoil";

const first = forwardRef((props, ref) => {
  const current = useRecoilValue(page);
  return (
    <PageContainer ref={ref}>
      <TextDiv className={current === 1 ? "action " : null}>First</TextDiv>
    </PageContainer>
  );
});

export default first;
