import { ActionIcon, ActionIconProps } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandNotion,
  IconBrandLinkedin,
  IconMapPin,
} from '@tabler/icons';
import React from 'react';

interface IconProps extends ActionIconProps {
  icon: 'github' | 'notion' | 'linkedin' | 'mapPin';
}

const icons = {
  github: <IconBrandGithub />,
  notion: <IconBrandNotion />,
  linkedin: <IconBrandLinkedin />,
  mapPin: <IconMapPin />,
};

const Icon = (props: IconProps) => (
  <ActionIcon {...props}>{icons[props.icon]}</ActionIcon>
);

export default Icon;
