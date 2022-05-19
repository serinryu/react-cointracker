import { useOutletContext } from 'react-router-dom';
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
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

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  const isDark = useRecoilValue(isDarkAtom);
return (
    <>
       {isLoading ? (
        "Loading chart..."
      ) : (
        <>
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close)!, //! means never null
              //data?.map((price => price.close)) ?? []  also works (consider undefined)
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            title: {
              text: 'Line Chart',
              align: 'left'
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              decimalsInFloat: 0,
            },
            xaxis: {
              axisBorder: { show: true },
              axisTicks: { show: true },
              labels: { show: true },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />

        <ApexChart
          type="candlestick"
          height={350} 
          series={[
            {
            data: data?.map((price) => {
              return{
              x: price.time_close,
              y: [price.open.toFixed(3), price.high.toFixed(3), price.low.toFixed(3), price.close.toFixed(3)]
              }
            })
            },
            ] as any}
          options= {{
            chart: {
              type: 'candlestick',
              height: 350,
              background: "transparent",
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              tooltip: {
                enabled: true
              },
              decimalsInFloat: 0,
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            colors: ["#0fbcf9"],
          }}
        />

        

      </>


    )} 
    </>
  );
}

export default Chart;