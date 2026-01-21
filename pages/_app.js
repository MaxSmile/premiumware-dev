import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-animate]'));
    if (!('IntersectionObserver' in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute('data-animate-delay');
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('animate-in');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <title>PREMIUMWARE.DEV – Premium software development</title>
    </Head>
    <Component {...pageProps} />
  </>
}
