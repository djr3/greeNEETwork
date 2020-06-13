import { useAmp } from "next/amp";

type AmpWrapperProps = {
  ampOnly?: any;
  nonAmp?: any;
};

export function AmpWrapper({ ampOnly, nonAmp }: AmpWrapperProps) {
  const isAmp = useAmp();
  return (
    <>
      {isAmp && ampOnly ? ampOnly : null}
      {!isAmp && nonAmp ? nonAmp : null}
    </>
  );
}
