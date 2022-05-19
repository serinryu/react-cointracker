import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const ButtonBox = styled.button`
  position: fixed;
  z-index: 999999;
  right: 2%;
  margin: 10px;
  width: 30px;
  height: 20px;
  border: none;
  background-color: ${props => props.theme.boxColor};
  color: ${props => props.theme.textColor}; // 테마 변경 컬러 지정
  border-radius: 8px;
  cursor: pointer;
  font-size: 10px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  span{
    width: 10px;
  }
`;

function Button() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev); // 테마 변경하기 이벤트
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <ButtonBox onClick={toggleDarkAtom}>
            <span>{isDark ? '🌚' : '🌝'}</span>
        </ButtonBox>
    );
};

export default Button;