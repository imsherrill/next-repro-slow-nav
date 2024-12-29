import { Layout } from "@/components/Layout";

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  console.log({ context });
  return {
    props: {
      data: 123,
    }, // Will be passed to the page component as props
  };
};

export default function StaticPage({ data }) {
  console.log({ data });
  return (
    <div>
      <h1>Static Page</h1>
      <p>data: {data}</p>
    </div>
  );
}

StaticPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
