import "@/styles/globals.css";
import Wrapper from "@/wrapper/wrapper";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { initGA, logPageView } from "@/libs/Analytics/ga";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const GA_MEASUREMENT_ID = "G-TJLXDG9HFW";
  const router = useRouter();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Initialize Google Analytics
    initGA(GA_MEASUREMENT_ID);

    // Log initial page load
    logPageView(window.location.pathname);

    // Log route changes
    const handleRouteChange = (url: any) => logPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // ⭐ Register Service Worker (Added part)
useEffect(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("SW registered", reg))
      .catch((err) => console.log("SW registration failed", err));
  }
}, []);

  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
        <ToastContainer className="z-[8000000]" />
      </Wrapper>
    </>
  );
}
