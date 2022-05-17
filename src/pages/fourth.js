import React, { forwardRef } from "react";
import { PageContainer, TextDiv } from "../style/Style";
import { useRecoilValue } from "recoil";
import { page } from "../store/recoil";
const fourth = forwardRef((props, ref) => {
  const current = useRecoilValue(page);
  return (
    <PageContainer ref={ref}>
      <TextDiv className={current === 4 ? "action fourth" : null}>
        fourth
      </TextDiv>
    </PageContainer>
  );
});

export default fourth;
