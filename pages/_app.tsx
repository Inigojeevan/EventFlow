import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageLayout from "@/components/layouts/PageLayout";
import { AuthProvider } from "@/components/layouts/AuthContext";

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <AuthProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
    </AuthProvider>
  );
}
