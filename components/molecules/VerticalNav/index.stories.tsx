import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import VerticalNav from '.';

export default {
  title: 'molecules/VerticalVerticalNav',
  component: VerticalNav,
  parameters: {
    layout: 'padded',
  },
  args:{
    w: '100px',
    h: '100vh',
    pos: 'fixed'
  }
} as ComponentMeta<typeof VerticalNav>;

export const Default: ComponentStory<typeof VerticalNav> = (args) => {
  return <VerticalNav {...args} />;
};
