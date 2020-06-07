// Add your GA tracking id in the .env file or hardcode it here
export const { GA_TRACKING_ID } = process.env;

const isProduction = process.env.NODE_ENV.toLowerCase() === "production";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageView = (url) => {
  if (isProduction) {
    // @ts-ignore
    window.gtag("config", GA_TRACKING_ID, {
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
