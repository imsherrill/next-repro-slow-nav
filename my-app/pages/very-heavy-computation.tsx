import { Layout } from "@/components/Layout";
import { expensiveFn } from "../_utils";

export default function VeryHeavyComputation() {
  const computationResult = expensiveFn();
  return (
    <div>
      <h1>Very Heavy Computation</h1>
      <p>Computation result: {computationResult}</p>
      <div>
        <p>loaded</p>
      </div>
    </div>
  );
}

VeryHeavyComputation.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
