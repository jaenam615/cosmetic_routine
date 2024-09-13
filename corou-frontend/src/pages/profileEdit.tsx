import { useNavigate } from "react-router-dom";
import AboutHeader from "../components/common/aboutHeader";
import styled from "styled-components";
import "../scss/mypage/edit.scss";

const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ProfileEditWrapper>
        <AboutHeader Title="프로필 수정" onBack={handleBack} />
        {/* 프로필이미지 */}
        <div className="editWrapper">
          <div className="profileEdit">
            <div>
              <img src="프로필이미지" alt="" />
            </div>
            {/* 유저이름 */}
            <span>닉네임</span>
          </div>
          {/* 읽기전용 이메일 */}
          <div>이메일</div>
          {/* 비밀번호 변경 버튼 */}
          <button>비밀번호 변경</button>
          {/* 트러블 특성 변경 버튼 */}
          <button>트러블 특성 변경(회원가입 3페이지)</button>
          {/* 변경 완료 버튼 */}
          <button>완료</button>
        </div>
      </ProfileEditWrapper>
    </>
  );
};
export default ProfileEdit;

const ProfileEditWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;