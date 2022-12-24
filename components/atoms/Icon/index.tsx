import { ActionIcon, ActionIconProps } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandNotion,
  IconBrandLinkedin,
  IconMapPin,
  IconChevronRight,
  IconHome,
  IconPlanet,
  IconRocket,
  IconStars,
} from '@tabler/icons';
import React from 'react';

interface IconProps extends ActionIconProps {
  icon: 'github' | 'notion' | 'linkedin' | 'mapPin' | 'chevronRight' | "home" | "planet" | "rocket" | "stars";
}

const icons = {
  github: <IconBrandGithub />,
  notion: <IconBrandNotion />,
  linkedin: <IconBrandLinkedin />,
  mapPin: <IconMapPin />,
  chevronRight: <IconChevronRight />,
  home: <IconHome />,
  planet: <IconPlanet />,
  rocket: <IconRocket />,
  stars: <IconStars />
};

const Icon = (props: IconProps) => (
  <ActionIcon {...props}>{icons[props.icon]}</ActionIcon>
);

export default Icon;
