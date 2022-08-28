import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC, MouseEvent } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  return (
    <main>
      <nav className="flex justify-around py-4 mx-auto bg-white shadow-md">
        <div className="flex items-center">
          <h3 className="text-2xl font-medium text-blue-800">LOGO</h3>
        </div>
        {/*  left header section  */}
        <div className="items-center hidden space-x-8 lg:flex">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/protected">
            <a>Protected</a>
          </Link>
        </div>
        {/*  right header section  */}
        <div className="flex items-center space-x-2 relative">
          {status === "unauthenticated" ? (
            <>
              <Link href="/signin">
                <button className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                  Sign in
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 text-gray-200 bg-gray-400 rounded-md">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <>
              <a href="#" className="peer p-2 rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </a>
              <div
                className="absolute top-0 -left-1/2 w-40 hidden peer-hover:flex hover:flex 
           flex-col bg-white shadow-lg rounded-md"
              >
                <Link href="/me">
                  <a className="px-5 py-3 hover:bg-blue-100 rounded-t-md">
                    个人
                  </a>
                </Link>

                <a
                  className="px-5 py-3 hover:bg-blue-100 rounded-b-md"
                  href="#"
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                    // signOut({ callbackUrl: "/signin" });
                    signOut();
                  }}
                >
                  退出
                </a>
              </div>
            </>
          )}
        </div>
      </nav>

      <div className="bg-blue-100 py-8">{JSON.stringify(session)}</div>
    </main>
  );
};
export default Home;
