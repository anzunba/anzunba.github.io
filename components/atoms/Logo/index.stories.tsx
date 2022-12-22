import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Logo } from '.';

export default {
  title: 'atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'padded',
  },
  args: {
    height: '100%'
  }
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => {
  return <Logo />;
};
