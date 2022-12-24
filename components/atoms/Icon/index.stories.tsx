import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Icon from '.';

export default {
  title: 'atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  args: {
    size: 'xl',
    disabled: false,
    icon: 'github'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'transparent',
        'subtle',
        'filled',
        'light',
        'outline',
        'default',
      ],
      control: { type: 'select' },
    },
    icon: {
      options: ['github', 'notion', 'linkedin', 'mapPin', 'chevronRight', 'home', 'planet', 'rocket', 'stars'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};
