export type SocialNetworks =
  | "Behance"
  | "Dribbble"
  | "Facebook"
  | "Github"
  | "Instagram"
  | "Linkedin"
  | "Twitter"
  | "Email"
  | "Info"
  | "Home";

export type TSocialMenuItem = {
  name: SocialNetworks | string;
  link: string;
  // type: "links" | "icons";
};

export type TSocialMenu = TSocialMenuItem[];

export interface SocialMenuProps {
  type: "links" | "icons";
  menu: TSocialMenu;
  itemProps?: SocialLinksProps | SocialIconsProps;
  [elemName: string]: any;
}

export interface ItemProps {
  name: string;
  size: number | string;
  color: string;
}

export interface SocialMenuItemProps extends ItemProps {
  type: "links" | "icons";
  item: TSocialMenuItem;
}

export interface SocialLinksProps extends ItemProps {
  [elemName: string]: any;
}

export interface SocialIconsProps extends ItemProps {
  [elemName: string]: any;
}

export interface SocialShareProps {
  url: string;
  round?: boolean;
  size?: number;
  [elem: string]: any;
}
