# React Cointracker
   
### Web App with React 

<p align='center'>
    <a href="https://serinryu.github.io/react-cointracker/">Published Webpage</a>
</p>



## ๐  Using Skill

<p align='center'>
      <img src="https://img.shields.io/badge/typescript-^4.6.4-yellow?logo=typescript"/>
    <img src="https://img.shields.io/badge/React-^18.1.0-blue?logo=React"/>
    <img src="https://img.shields.io/badge/react_dom-^18.1.0-blueviolet?logo=ReactOS"/>
    <img src="https://img.shields.io/badge/react_router_dom-^6.3.0-critical?logo=React Table"/>
    <img src="https://img.shields.io/badge/react_apexcharts-^1.4.0-critical?logo=apexcharts"/>
    <img src="https://img.shields.io/badge/react_helmet-^3.39.0-critical?logo=React"/>
    <img src="https://img.shields.io/badge/react_query-^5.0.1-critical?logo=React"/>
    <img src="https://img.shields.io/badge/react_scripts-^5.0.1-critical?logo=React"/>
    <img src="https://img.shields.io/badge/recoil-^0.7.3-yellow?logo=React"/>
    <img src="https://img.shields.io/badge/styledcomponents-^5.3.5-yellow?logo=styled-components"/>
    <img src="https://img.shields.io/badge/gh__pages-%5E3.2.3-%23222222?logo=github pages"/>
</p>





## ๐โโ๏ธ Introducing Project

#### ๐ Check real-time coin exchange rate

> - You can check important coin information and real-time exchange rate





## ๐คธโ How To Use?

#### start

```
npm install
npm start
```

#### build

```
npm run build
```



## ๐คธโ Features
`/`
์๊ฐ์ด์ก ์์ผ๋ก ์ ๋ ฌ๋ ์ํธํํ ๋ชฉ๋ก ํ์ 

`/:id`
์ํธํํ ์ ๋ณด๋ฅผ ํ์

`/:id/chart`
14์ผ์น ๋ฐ์ดํฐ(์๊ฐ, ๊ณ ๊ฐ, ์ ๊ฐ, ์ข๊ฐ)๋ฅผ candlestick ์ฐจํธ๋ก ์๊ฐํ

`/:id/price`
14์ผ์น ๋ฐ์ดํฐ(์ข๊ฐ)๋ฅผ ์ ์ผ๋๋น ํผ์ผํธ๋ก ๊ณ์ฐํ์ฌ ํ์




## Note
#### 1. react query
query key๋ฅผ ๋ฐํ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์บ์ฑํ์ฌ ๊ด๋ฆฌ
isLoading, data, retch

#### 2. styled-components
ThemeProvider -> component์์ props๋ก ์ ๊ทผ ๊ฐ๋ฅ (styled.d.ts ํ์)
state์ ์ฐ๋ํ์ฌ theme ๋ณ๊ฒฝ -> ๋ผ์ดํธ/๋คํฌ ๋ชจ๋ ๊ตฌํ

#### 3. react-router-dom
<Outlet /> -> nested UI ๊ตฌํ
