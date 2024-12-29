import Link from "next/link";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-2 row-start-2">
        <Link href="/very-heavy-computation">Very Heavy Computation</Link>
        <Link href="/very-heavy-dom">Very Heavy DOM</Link>
        <Link href="/async-heavy-dom">Async Heavy DOM</Link>
        <Link href="/very-heavy-dom-virtual">Very Heavy DOM Virtual</Link>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
