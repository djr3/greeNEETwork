import React from "react";
import { isProduction } from "./utils";

export const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;

export function setGoogleTags() {
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${TRACKING_ID}');
    `,
  };
}

export function setGoogleTagsAMP() {
  return {
    vars: {
      account: TRACKING_ID,
      gtag_id: TRACKING_ID,
      config: {
        [TRACKING_ID]: { groups: "default" },
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
    window.gtag("config", TRACKING_ID, {
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
        label === "web-vital" ? "Web Vitals" : "NextJS Custom Metrics",
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
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        key="gtag"
      />
      <script dangerouslySetInnerHTML={setGoogleTags()} />
    </React.Fragment>
  );
};
