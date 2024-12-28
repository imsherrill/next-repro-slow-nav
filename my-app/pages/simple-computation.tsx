import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

export default function SimpleComputation() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < 1e6; i++) {
      sum += i;
    }
    setResult(sum);
  }, []);

  return (
    <div>
      <h1>Simple Computation</h1>
      <p>Computation result: {result}</p>
      <div>
        {Array.from({ length: 1000 }, (_, i) => (
          <div key={i}>Element {i}</div>
        ))}
      </div>
    </div>
  );
}

SimpleComputation.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
