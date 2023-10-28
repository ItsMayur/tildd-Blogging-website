import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  <Script
    id="Adsense-id"
    data-ad-client="ca-pub-8665093697259399"
    async="true"
    strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />;
  return <Component {...pageProps} />;
}
export default MyApp;
