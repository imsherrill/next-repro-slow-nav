import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

export default function ModerateDOM() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < 7e6; i++) {
      sum += i;
    }
    setResult(sum);
  }, []);

  return (
    <div>
      <h1>Moderate DOM</h1>
      <p>Computation result: {result}</p>
      <div>
        {Array.from({ length: 7000 }, (_, i) => (
          <div key={i}>Element {i}</div>
        ))}
      </div>
    </div>
  );
}

ModerateDOM.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
