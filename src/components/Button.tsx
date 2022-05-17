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

function Button(props:any) {
    return (
        <ButtonBox onClick={props.click}>
            <span>{props.mode === 'dark' ? '🌚' : '🌝'}</span>
        </ButtonBox>
    );
};

export default Button;