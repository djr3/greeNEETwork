import React from "react";
import { Text, Link as Anchor } from "@geist-ui/react";
import Icon from "components/Icon";

import type {
  SocialMenuProps,
  SocialMenuItemProps,
  SocialIconsProps,
  SocialLinksProps,
} from "./types";

const SocialIcon = ({ name, color, size, ...props }: SocialIconsProps) => {
  return <Icon name={name} color={color} size={size} {...props} />;
};

export const SocialLink: React.FC<SocialLinksProps> = ({
  name,
  size,
  color,
  ...textProps
}) => (
  <Text span style={{ fontSize: size, color }} {...textProps}>
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
    size: props.size,
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
    <ul {...listProps}>
      {menu.map((item, idx) => (
        <SocialMenuItem key={idx} type={type} item={item} {...itemProps} />
      ))}
    </ul>
  );
};
