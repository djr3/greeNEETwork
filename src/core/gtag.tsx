import React from "react";
// import Head from "next/head";

// Add your GA tracking id in the .env file or hardcode it here
export const { NEXT_PUBLIC_GA_TRACKING_ID } = process.env;

const isProduction = process.env.NODE_ENV.toLowerCase() === "production";

export function setGoogleTags() {
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${NEXT_PUBLIC_GA_TRACKING_ID}');
    `,
  };
}

export function setGoogleTagsAMP() {
  return {
    vars: {
      account: NEXT_PUBLIC_GA_TRACKING_ID,
      gtag_id: NEXT_PUBLIC_GA_TRACKING_ID,
      config: {
        [NEXT_PUBLIC_GA_TRACKING_ID]: { groups: "default" },
      },
    },
    triggers: {
      trackPageview: {
        on: "visible",
        request: "pageview",
      },
    },
  };
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageView = (url) => {
  if (isProduction) {
    // @ts-ignore
    window.gtag("config", NEXT_PUBLIC_GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({ action, category, label, value }) => {
  if (isProduction) {
    // @ts-ignore
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackVitals = ({ id, name, label, value }) => {
  if (isProduction) {
    // @ts-ignore
    window.gtag("event", name, {
      event_category:
        label === "web-vital" ? "Web Vital" : "NextJS Custom Metric",
      event_action: name,
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  }
};

export const GoogleTags = () => {
  return (
    <React.Fragment key="googletags">
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_TRACKING_ID}`}
        key="gtag"
      />
      <script dangerouslySetInnerHTML={setGoogleTags()} />
    </React.Fragment>
  );
};
