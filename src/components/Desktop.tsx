import React from 'react';
import styled from 'styled-components';

const Warning = styled.div`
margin-top: 150px;
text-align: center;
font-size: 30px;
`

function Desktop(){
  return(
      <Warning> Sorry, ONLY mobile versions are supported.📱 </Warning>
  )
}

export default Desktop;