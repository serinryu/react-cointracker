# React Cointracker
   
### Web App with React 

<p align='center'>
    <a href="https://serinryu.github.io/react-cointracker/">Published Webpage</a>
</p>



## 🛠 Using Skill

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





## 💁‍♂️ Introducing Project

#### 🔎 Check real-time coin exchange rate

> - You can check important coin information and real-time exchange rate





## 🤸‍ How To Use?

#### start

```
npm install
npm start
```

#### build

```
npm run build
```



## 🤸‍ Features
`/`
시가총액 순으로 정렬된 암호화폐 목록 표시 

`/:id`
암호화폐 정보를 표시

`/:id/chart`
14일치 데이터(시가, 고가, 저가, 종가)를 candlestick 차트로 시각화

`/:id/price`
14일치 데이터(종가)를 전일대비 퍼센트로 계산하여 표시




## Note
#### 1. react query
query key를 바탕으로 데이터를 캐싱하여 관리
isLoading, data, retch

#### 2. styled-components
ThemeProvider -> component에서 props로 접근 가능 (styled.d.ts 필수)
state와 연동하여 theme 변경 -> 라이트/다크 모드 구현

#### 3. react-router-dom
<Outlet /> -> nested UI 구현
