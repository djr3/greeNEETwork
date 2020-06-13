import { useAmp } from "next/amp";

export function AmpWrapper({ ampOnly, nonAmp }) {
  const isAmp = useAmp();
  return (
    <>
      {isAmp && ampOnly ? ampOnly : null}
      {!isAmp && nonAmp ? nonAmp : null}
    </>
  );
}
