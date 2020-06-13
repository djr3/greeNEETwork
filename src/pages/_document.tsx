/**
 * NextJS Core
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Google Analytics
 */
import { GoogleTags, setGoogleTagsAMP } from "core/gtag";

/**
 * AMP - Accelerated Mobile Pages
 */
import { AmpWrapper, AmpAnalytics } from "core/amp";

/**
 * Styletron
 */
import { Provider as StyletronProvider } from "styletron-react";
import { Server } from "styletron-engine-atomic";
import { engine } from "../styletron";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stylesheets: any;
  isProduction: boolean;
};

export default class extends Document<Props> {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV.toLowerCase() === "production";
    const app = ctx.renderPage((App) => (props) => (
      <StyletronProvider value={engine}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = (engine as Server).getStylesheets
      ? (engine as Server).getStylesheets()
      : [];
    // const stylesheets = engine.renderStyle() || [];
    // const initialProps = await Document.getInitialProps(ctx);
    return {
      ...app,
      isProduction,
      stylesheets,
    };
  }

  // setGoogleTags(NEXT_PUBLIC_GA_TRACKING_ID) {
  //   return {
  //     __html: `
  //               window.dataLayer = window.dataLayer || [];
  //               function gtag(){dataLayer.push(arguments);}
  //               gtag('js', new Date());
  //               gtag('config', '${NEXT_PUBLIC_GA_TRACKING_ID}');
  //           `,
  //   };
  // }

  render() {
    const language = "it";
    const { isProduction, stylesheets } = this.props;

    return (
      <Html lang={language}>
        <Head>
          {/*Global meta tags*/}
          <base href="/" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

          {/** FavIcon & PWA MetaTags */}
          {isProduction && (
            <>
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/assets/icons/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/assets/icons/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/assets/icons/favicon-16x16.png"
              />
              <link rel="manifest" href="/assets/icons/site.webmanifest" />
              <link
                rel="mask-icon"
                href="/assets/icons/safari-pinned-tab.svg"
                color="#799d43"
              />
              <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
              <meta name="msapplication-TileColor" content="#000000" />
              <meta
                name="msapplication-config"
                content="/assets/icons/browserconfig.xml"
              />
              <meta name="theme-color" content="#ffffff" />
            </>
          )}

          {/* Google Analytics - Tag Manager (gtag.js)*/}
          {/* We only want to add the scripts if in production */}
          {isProduction && <GoogleTags />}

          {/* Styletron SSR Styles */}
          {stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}

          {/* Progressive Web App Meta */}
          {/* <link key="manifest" rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192.png" />
          <meta name="theme-color" content="#72B340" /> */}

          {/* Service Worker Registration */}
          {/* {isProduction &&
            typeof window !== "undefined" &&
            "serviceWorker" in navigator &&
            navigator.serviceWorker
              .register("/sw.js")
              .then((registration) => {
                console.log(
                  "Service Worker registered successfully",
                  registration
                );
              })
              .catch((err) => {
                console.warn("Service Worker registration failed", err.message);
              })} */}

          {/** Apple iOS / IE Debugging */}
          {/* {!isProduction && (
            <script src="http://localhost:8080/target/target-script-min.js#anonymous" />
          )} */}

          {/* Google Fonts */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/** Google Analytics AMP  */}
          {isProduction && (
            <AmpWrapper
              ampOnly={
                <AmpAnalytics
                  type="googleanalytics"
                  script={setGoogleTagsAMP()}
                />
              }
            />
          )}
          {/** Google AdSense */}
          {/* {isProduction && (
            <script
              data-ad-client="ca-pub-2627096600549585"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
          )} */}
        </body>
      </Html>
    );
  }
}
