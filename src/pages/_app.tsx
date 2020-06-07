import App from "next/app";
import Router from "next/router";

// Data & Constants
import { defaultMetaTags } from "../core/constants";

// Global Components
import { SiteLayout } from "../layouts";
import { MetaTags } from "../components/MetaTags";
import { trackPageView } from "../core/gtag";

// Style & Animation Providers
import { AnimatePresence } from "framer-motion";
import { Provider as StyletronProvider } from "styletron-react";
import { engine, debug } from "../styletron";
// import "../styles/app.sass";
import "../styles/reset.css";
// Carousel styles
import "@brainhubeu/react-carousel/lib/style.css";

// Typings
import { Page } from "../interfaces";

/**
 * Application, Error & User Tracking Systems
 * Senty, Google Analytics & GDPR Compliant Cookie Banner
 */
Router.events.on("routeChangeComplete", (url) => trackPageView(url));

// TODO : Implement Sentry for error tracking
// Sentry.init({
//   dsn: process.env.APP_SENTRY_DSN
//   // enabled: process.env.NODE_ENV === "production"
// });

export default class GreeNEETwork extends App {
  // componentDidMount() {}

  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout = (Component as Page).getLayout
      ? (Component as Page).getLayout
      : (page) => <SiteLayout>{page}</SiteLayout>;

    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <MetaTags tags={defaultMetaTags} />
        {getLayout(
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        )}
      </StyletronProvider>
    );
  }
}
