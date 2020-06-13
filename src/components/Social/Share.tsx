import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import type { SocialShareProps } from "./types";

export function SocialShare({
  url,
  round = true,
  size = 32,
  ...rest
}: SocialShareProps) {
  return (
    <div {...rest}>
      <EmailShareButton url={url}>
        <EmailIcon size={size} round={round} />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} round={round} />
      </FacebookShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={size} round={round} />
      </TelegramShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} round={round} />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={size} round={round} />
      </WhatsappShareButton>
    </div>
  );
}
