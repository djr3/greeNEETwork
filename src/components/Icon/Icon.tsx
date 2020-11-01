import Home from "@geist-ui/react-icons/home";
import Phone from "@geist-ui/react-icons/phone";
import Mail from "@geist-ui/react-icons/mail";
import Facebook from "@geist-ui/react-icons/facebook";
import Instagram from "@geist-ui/react-icons/instagram";
import Menu from "@geist-ui/react-icons/menu";
import ChevronLeft from "@geist-ui/react-icons/chevronLeft";
import ChevronRight from "@geist-ui/react-icons/chevronRight";
import ChevronDown from "@geist-ui/react-icons/chevronDown";
import ChevronUp from "@geist-ui/react-icons/chevronUp";
import Clock from "@geist-ui/react-icons/clock";
import Globe from "@geist-ui/react-icons/globe";
import X from "@geist-ui/react-icons/x";

import { Props } from "@geist-ui/react-icons";

interface IconProps extends Props, React.ComponentProps<any> {
  name:
    | "Home"
    | "Phone"
    | "Mail"
    | "Facebook"
    | "Instagram"
    | "Menu"
    | "X"
    | "Clock"
    | "Globe"
    | "ChevronUp"
    | "ChevronDown"
    | "ChevronLeft"
    | "ChevronRight";
}

const Icons = {
  Home,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Menu,
  X,
  Clock,
  Globe,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
};

export default function Icon({ name, ...props }: IconProps) {
  const IconX = Icons[name];
  return <IconX {...props} />;
}
