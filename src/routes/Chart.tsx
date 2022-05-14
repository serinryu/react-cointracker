import { useOutletContext } from 'react-router-dom';
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<ChartProps>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  return (
    <>
    </>
  );
}

export default Chart;