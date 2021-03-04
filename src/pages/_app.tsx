// System Elements
import { Page } from "@types";
// import Router from "next/router";

// Data & Constants
// import { defaultMetaTags } from "core/constants";

// Global Components
import { Vertical } from "layouts";
// import { MetaTags } from "components/MetaTags";
// import { trackPageView, trackVitals } from "core/gtag";

// Style & Animation Providers
import { AnimatePresence } from "framer-motion";

// App Styles
import "styles/app.scss";
import "inter-ui/Inter (web)/inter.css";

/**
 * Application, Error & User Tracking Systems
 * Senty, Google Analytics & GDPR Compliant Cookie Banner
 */
// Router.events.on("routeChangeComplete", (url) => trackPageView(url));

// TODO : Implement Sentry for error tracking
// Sentry.init({
//   dsn: process.env.APP_SENTRY_DSN
//   // enabled: process.env.NODE_ENV === "production"
// });

export function reportWebVitals({ id, name, label, value }) {
  // trackVitals({ id, name, label, value });
  console.warn("Metrics : ", { id, name, label, value });
}

function greeNEETwork({ Component, pageProps, router }) {
  const getLayout = (Component as Page).getLayout
    ? (Component as Page).getLayout
    : (page) => (
        <Vertical noFooter={(Component as Page).noFooter}>{page}</Vertical>
      );

  return (
    <AnimatePresence exitBeforeEnter>
      {getLayout(<Component {...pageProps} key={router.route} />)}
    </AnimatePresence>
  );
}
export default greeNEETwork;
