import { Layout } from "@/components/Layout";

export default function VeryHeavyDOM() {
  return (
    <div>
      <h1>Very Heavy DOM</h1>
      <div>
        {Array.from({ length: 1e6 }, (_, i) => (
          <div key={i}>Element {i}</div>
        ))}
      </div>
    </div>
  );
}

VeryHeavyDOM.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
