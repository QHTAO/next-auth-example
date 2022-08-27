import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      Home
      <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white">
        button
      </button>
    </div>
  );
};

export default Home;
