import {BrowserRouter, Routes, Route} from "react-router-dom"
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

function Router(props:any) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}>
            <Route path="price" element={<Price/>} />
            <Route path="chart" element={<Chart mode={props.mode}/>} />
        </Route>
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;