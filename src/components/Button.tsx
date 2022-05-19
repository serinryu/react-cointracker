import React from 'react';
import styled from 'styled-components';

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

interface IButtonProps {
  click: () => void; //인자로 아무것도 받지 않고, 아무것도 return 하지 않는다.
  mode: string;
}

function Button({ click, mode}: IButtonProps) {
    return (
        <ButtonBox onClick={click}>
            <span>{mode === 'dark' ? '🌚' : '🌝'}</span>
        </ButtonBox>
    );
};

export default Button;