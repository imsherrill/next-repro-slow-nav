import { useEffect, useId, useState } from "react";
import { Layout } from "../components/Layout";
import { useQuery } from "@tanstack/react-query";

export default function VeryHeavyDOM() {
  const id = useId();
  const { isLoading, data } = useQuery({
    queryKey: ["heavy-dom-async", id],
    queryFn: async () => {
      return 1e5;
    },
    initialData: 1,
  });

  return (
    <div>
      <h1>Very Heavy DOM</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          Not loading. The number of elements to render is{" "}
          {data.toLocaleString()}
        </p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Array.from({ length: data }, (_, i) => (
            <div key={i}>Element {i}</div>
          ))}
        </div>
      )}
    </div>
  );
}

VeryHeavyDOM.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
