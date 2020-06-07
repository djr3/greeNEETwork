import ProgressiveImage from "react-progressive-image";
import { Image as AImage } from "atomize";

import { useAmp } from "next/amp";

export const Image = ({ src, alt, ...other }) => {
  const isAmp = useAmp();

  return (
    <ProgressiveImage
      src={src}
      placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
    >
      {(currentSrc, loading) =>
        isAmp ? (
          //@ts-ignore
          <amp-img
            width="300"
            height="300"
            src={src}
            alt={alt}
            layout="responsive"
          />
        ) : (
          <>
            <AImage src={currentSrc} alt={alt} {...other} />
            <noscript>
              <AImage src={src} alt={alt} {...other} />
            </noscript>
          </>
        )
      }
    </ProgressiveImage>
  );
};
