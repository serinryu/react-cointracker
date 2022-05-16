import { useOutletContext } from 'react-router-dom';
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";

const PriceBoxes = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PriceBox = styled.span`
  text-align: center;
  margin: 10px;
  padding: 13px;
  font-size: 18px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  span:first-child { 
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

interface PriceProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price() {
  const { coinId } = useOutletContext<PriceProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

  return (
    <>
    {isLoading ? "Loading.." : (
      <PriceBoxes>
        <PriceBox>
          <span>open</span>
          <span>${data?.slice(14).map((d)=>d.open.toFixed(2))}</span>
        </PriceBox>
        <PriceBox>
        <span>high</span>
        <span>${data?.slice(14).map((d)=>d.high.toFixed(2))}</span>
        </PriceBox>
          <PriceBox>
          <span>low</span>
          <span>${data?.slice(14).map((d)=>d.low.toFixed(2))}</span>
        </PriceBox>
          <PriceBox>
          <span>close</span>
          <span>${data?.slice(14).map((d)=>d.close.toFixed(2))}</span>
        </PriceBox>
    </PriceBoxes>
    )}
    </>
  );
}

export default Price;