import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

export default function VeryHeavyComputation() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < 4e6; i++) {
      sum += i;
    }
    setResult(sum);
  }, []);

  return (
    <div>
      <h1>Very Heavy Computation</h1>
      <p>Computation result: {result}</p>
      <div>
        {Array.from({ length: 4000 }, (_, i) => (
          <div key={i}>Element {i}</div>
        ))}
      </div>
    </div>
  );
}

VeryHeavyComputation.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
