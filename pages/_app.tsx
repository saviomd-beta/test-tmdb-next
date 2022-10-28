import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container max-w-xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
