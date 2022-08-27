import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider refetchInterval={0} session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
