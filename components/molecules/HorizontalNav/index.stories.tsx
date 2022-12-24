import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import HorizontalNav from '.';

export default {
  title: 'molecules/HorizontalNav',
  component: HorizontalNav,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof HorizontalNav>;

export const Default: ComponentStory<typeof HorizontalNav> = (args) => {
  return <HorizontalNav {...args} />;
};
