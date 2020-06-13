import Head from "next/head";

/**
 * Inject the AMP script in the head tag of the HTML document
 */
export function AmpCustomElement(props) {
  return (
    <Head>
      <script
        async
        custom-element={props.name}
        src={
          "https://cdn.ampproject.org/v0/" +
          props.name +
          "-" +
          props.version +
          ".js"
        }
        key={props.name}
      />
    </Head>
  );
}
