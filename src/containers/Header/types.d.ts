import { TSocialMenu } from "components/Social";
import { menuItem } from "interfaces";

export type PageHeaderProps = {
  navMenu: menuItem[];
  socialMenu?: TSocialMenu;
  onClick?: Function;
  className?: string | undefined;
  style?: any;
};
