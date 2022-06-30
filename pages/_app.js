import '../scss/styles.scss';
import '../scss/pages.scss';
import Script from 'next/script';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-HMB95Q5EXV`}
    />

    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HMB95Q5EXV', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
    <Component {...pageProps} />
  </>
}