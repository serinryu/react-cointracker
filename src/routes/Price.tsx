import { useOutletContext } from 'react-router-dom';

interface PriceProps {
  coinId: string;
}

function Price() {
  const {coinId} = useOutletContext<PriceProps>();
  return <h1>{coinId}</h1>;
}

export default Price;