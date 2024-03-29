import "@/styles/styleguide.css";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/mobile.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
