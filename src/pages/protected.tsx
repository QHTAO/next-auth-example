import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import Protected from "../views/Protected";

export default Protected;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
