import { AmpCustomElement } from "./CustomElement";

export function AmpAnalytics(props) {
  return (
    <>
      <AmpCustomElement name="amp-analytics" version="0.1" />
      {/*
        // @ts-ignore */}
      <amp-analytics type={props.type}>
        {props.script && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(props.script),
            }}
          />
        )}
        {/*
        // @ts-ignore */}
      </amp-analytics>
    </>
  );
}
