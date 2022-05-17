import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useMediaQuery } from 'react-responsive'
import Button from "./components/Button";
import Desktop from "./components/Desktop";
import { lighttheme, darktheme } from "./theme";
import { ThemeProvider } from "styled-components";
import React, {useState} from 'react';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
  }
  a{
    color:inherit;
    text-decoration: none;
  }
`;

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 820px)' })
  const [themeMode, setThemeMode] = useState<string>('dark'); // 테마 모드 세팅
  const theme = themeMode === 'dark' ? darktheme : lighttheme; 
  const toggleTheme = () => setThemeMode(themeMode === 'dark' ? 'light' : 'dark'); // 테마 변경하기 이벤트

  return (
    <ThemeProvider theme={theme}> 
    <>  
      <GlobalStyle />
      { !isTabletOrMobile && <Desktop/>}
      { isTabletOrMobile && <Button click={toggleTheme} mode={themeMode}/>}
      { isTabletOrMobile && <Router mode={themeMode}/> }
      <ReactQueryDevtools initialIsOpen={true} />
    </>
    </ThemeProvider>
  );
}

export default App;