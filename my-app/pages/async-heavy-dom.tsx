import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

export default function VeryHeavyDOM() {
  const [length, setLength] = useState(1);

  useEffect(() => {
    // Example effect that could change the length state
    const timer = setTimeout(() => {
      setLength(1e5); // Change the length after 5 seconds
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Very Heavy DOM</h1>
      <div>
        {Array.from({ length }, (_, i) => (
          <div key={i}>Element {i}</div>
        ))}
      </div>
    </div>
  );
}

VeryHeavyDOM.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
