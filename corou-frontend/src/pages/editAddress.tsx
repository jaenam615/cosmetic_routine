import { useNavigate, useParams } from "react-router-dom";
import AboutHeader from "../components/common/aboutHeader";
import CompleteBtn from "../components/common/completeBtn";
import { useEffect, useState } from "react";
import axios from "axios";
import MainFooter from "../components/common/mainFooter";
import styled from "styled-components";

interface addressData {
  address_name: string;
  name: string;
  addr: string;
  addr_detail: string;
  zip: string;
  tel: string;
  request: string;
  is_default: string;
}

const EditAddress: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userKey = sessionStorage.getItem("userKey");
  const backPort = process.env.REACT_APP_BACKEND_PORT;
  const token = sessionStorage.getItem("authToken");
  const [addressData, setAddressData] = useState<addressData>({
    address_name: "",
    name: "",
    addr: "",
    addr_detail: "",
    zip: "",
    tel: "",
    request: "",
    is_default: "N",
  });

  useEffect(() => {
    const fetchAddressData = async (address_key: string) => {
      try {
        const response = await axios.get(
          `${backPort}/api/user/${userKey}/address/${address_key}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("해당 배송지", response.data);
        setAddressData(response.data);
      } catch {
        console.error("특정 배송지를 가져오지 못했습니다.");
      }
    };

    if (id) {
      fetchAddressData(id);
    }
  }, [id, userKey, token, backPort]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setAddressData({
      ...addressData,
      [name]: type === "checkbox" ? (checked ? "Y" : "N") : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userKey = sessionStorage.getItem("userKey");
      console.log("수정된 주소", addressData);
      const response = await axios.put(
        `${backPort}/api/user/${userKey}/address/${id}`,
        addressData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("주소 수정 성공:", response.data);
      navigate("/mypage/setAddress");
    } catch (error) {
      console.error("주소 수정 중 오류 발생:", error);
    }
  };

  const renderInputField = (
    label: string,
    name: keyof addressData,
    placeholder: string
  ) => (
    <div>
      <InputTitle>{label}</InputTitle>
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        value={addressData[name]}
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <>
      <AboutHeader Title="배송지 수정" onBack={handleBack} />
      <form onSubmit={handleSubmit}>
        <EditAddressWrapper>
          {renderInputField("배송지 이름", "address_name", "예) 우리 집")}
          {renderInputField("성함", "name", "예) 문미새")}
          {renderInputField("주소", "addr", "예) 서울특별시 강남구 역삼동")}
          {renderInputField(
            "상세 주소",
            "addr_detail",
            "예) 미새아파트 101동 101호"
          )}
          {renderInputField("우편번호", "zip", "예) 12345")}
          {renderInputField("전화번호", "tel", "예) 01012345678")}
          {renderInputField("요청", "request", "예) 문 앞에 놓아주세요.")}
          <DefaultAddressCheck>
            <span>기본 배송지로 설정</span>
            <input
              type="checkbox"
              name="is_default"
              checked={addressData.is_default === "Y"}
              onChange={handleInputChange}
            />
          </DefaultAddressCheck>
          <CompleteBtn
            text="저장"
            onClick={() => handleSubmit}
            disabled={false}
          />
        </EditAddressWrapper>
      </form>
      <MainFooter />
    </>
  );
};
export default EditAddress;

const Input = styled.input`
  width: 90%;
  border: 3px solid rgba(255, 164, 228, 0.5);
  border-radius: 13px;
  padding: 10px 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
`;

const EditAddressWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const InputTitle = styled.span`
  font-weight: 700;
`;

const DefaultAddressCheck = styled.div`
  display: flex;
  justify-content: flex-start;

  span {
    font-weight: 700;
    margin-right: 10px;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid lightgray;
    cursor: pointer;
    margin-right: 10px;

    &:checked {
      background-color: rgba(255, 164, 228, 0.5);
      border-color: rgba(255, 164, 228, 0.5);
    }

    &:checked::after {
      content: "✓";
      display: block;
      color: black;
      text-align: center;
      line-height: 13px;
      font-size: 15px;
    }
  }
`;
