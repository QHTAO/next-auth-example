import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      Home
      <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white">
        button
      </button>
      <div className="bg-blue-100 ">{JSON.stringify(session)}</div>
    </div>
  );
};

export default Home;
