import styled from "styled-components";
import OtherFilter from "../about/otherFilter";
import PageCount from "../common/pageCount";
import PageGuide from "../common/pageGuide";
import CommonInput from "../common/commonInput";
import { useState } from "react";
import NextBtn from "../signup/nextBtn";

interface NextProps {
  onNext: () => void;
}

const AddRoutine1: React.FC<NextProps> = ({ onNext }) => {
  const [grade, setGrade] = useState("");

  return (
    <>
      <AddRoutine1Wrapper>
        <PageCount count="1" />
        <PageGuide text="누구를 위한 루틴인가요?" />
        <OtherFilter />
        <PageGuide text="몇개의 단계로 이루어져 있나요?" />
        <ItemGrade>제품 개수</ItemGrade>
        <CommonInput
          typeValue="text"
          placeholderValue="예) 3"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <NextBtn onClick={onNext} disabled={false} />
      </AddRoutine1Wrapper>
    </>
  );
};
export default AddRoutine1;

const AddRoutine1Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ItemGrade = styled.span`
  font-size: 14px;
  color: #848484;
  margin-bottom: 10px;
`;