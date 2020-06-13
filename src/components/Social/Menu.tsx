import React from "react";
import { Div, Icon, Text, Anchor } from "atomize";
// import { styled } from "styletron-react";

import type {
  SocialMenuProps,
  SocialMenuItemProps,
  SocialIconsProps,
  SocialLinksProps,
} from "./types";

// const StyledMenuLink = styled("a", (props: ) =>
//   props.iconsOnly
//     ? {
//         padding: ".5rem",
//         height: "2.5rem",
//         width: "2.5rem",
//         backgroundColor: "black",
//         margin: ".25rem",
//       }
//     : {
//         display: "block",
//         lineHeight: "1.5rem",
//       }
// );

// const SocialMenu = props: SocialMenuProps => {
//   const iconProps = {
//     size: iconsOnly ? "1.5rem" : "1rem",
//     color: iconsOnly ? "white" : "black",
//   };

// }

const SocialIcon = (iconProps: SocialIconsProps) => <Icon {...iconProps} />;

export const SocialLink: React.FC<SocialLinksProps> = ({
  name,
  size,
  color,
  ...textProps
}) => (
  <Text tag="span" textSize={size} textColor={color} {...textProps}>
    {name}
  </Text>
);

const SocialMenuItem: React.FC<SocialMenuItemProps> = ({
  type,
  item,
  ...props
}) => {
  const formatLink = (s: string) => {
    if (s.includes("http")) return s;
    if (s.includes("@")) return "mailto:" + s;
    return "tel:+39" + s;
  };

  const checkLength = (string) => (string && string.length > 7 ? true : false);

  const linkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const itemProps = {
    name: item.name,
    color: props.color ? props.color : "inherit",
    size: props.size ? props.size + "px" : undefined,
    ...props,
  };

  return (
    <li>
      <Anchor
        href={item.link}
        aria-label={`Link contatto ${item.name}`}
        {...linkProps}
      >
        {type === "icons" ? (
          <SocialIcon {...itemProps} />
        ) : (
          <SocialLink {...itemProps} />
        )}
      </Anchor>
    </li>
  );
};

export const SocialMenu: React.FC<SocialMenuProps> = (props) => {
  const { menu, type, itemProps, ...listProps } = props;

  return (
    <Div tag="ul" {...listProps}>
      {menu.map((item, idx) => (
        <SocialMenuItem key={idx} type={type} item={item} {...itemProps} />
      ))}
    </Div>
  );
};
