import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageLayout from "@/components/layouts/PageLayout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SessionProvider>
  );
}
