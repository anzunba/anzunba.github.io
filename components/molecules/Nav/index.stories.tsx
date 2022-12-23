import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Nav from '.';

export default {
  title: 'molecules/Nav',
  component: Nav,
  parameters: {
    layout: 'padded',
  },
  args:{
    w: '100px',
    h: '100vh',
    pos: 'fixed'
  }
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (args) => {
  return <Nav {...args} />;
};
