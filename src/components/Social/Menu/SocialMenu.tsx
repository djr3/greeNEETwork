import React from "react";
import { Anchor, Div, Icon, Text } from "atomize";

import {
  SocialMenuProps,
  SocialMenuItemProps,
  SocialIconsProps,
  SocialLinksProps,
} from "../types";

export const SocialIcon = (iconProps: SocialIconsProps) => (
  <Icon {...iconProps} />
);
export const SocialLink = ({
  name,
  size,
  color,
  ...textProps
}: SocialLinksProps) => (
  <Text tag="span" textSize={size} textColor={color} {...textProps}>
    {name}
  </Text>
);

export const SocialMenuItem: React.FC<SocialMenuItemProps> = ({
  type,
  item,
  ...props
}) => {
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
        aria-label={`Visit my ${item.name} page`}
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
