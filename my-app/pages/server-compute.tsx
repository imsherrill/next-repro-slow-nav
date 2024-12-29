import { expensiveFn } from "@/_utils";
import { Layout } from "@/components/Layout";

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log({ context });
  expensiveFn();
  return {
    props: {
      data: 123,
    }, // Will be passed to the page component as props
  };
};

export default function ServerSide({ data }) {
  console.log({ data });
  return (
    <div>
      <h1>Server Side</h1>
      <p>data: {data}</p>
    </div>
  );
}

ServerSide.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
