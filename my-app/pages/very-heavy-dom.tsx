import { useRef } from "react";
import { Layout } from "../components/Layout";
import { useVirtualizer } from "@tanstack/react-virtual";
import { BIG_NUMBER } from "./_utils";

export default function VeryHeavy() {
  return (
    <div>
      {Array.from({ length: BIG_NUMBER }, (_, i) => (
        <div key={i} className={i % 2 ? "bg-gray-900" : "bg-blue-900"}>
          Row {i}
        </div>
      ))}
    </div>
  );
}

VeryHeavy.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
