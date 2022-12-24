import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import  FeatureCard  from '.';

export default {
  title: 'molecules/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    "title": "Pharmacists",
    "description": "Azurill can be seen bouncing and playing on its big, rubbery tail"
  },
} as ComponentMeta<typeof FeatureCard>;

export const Default: ComponentStory<typeof FeatureCard> = (args) => {
  return <FeatureCard {...args} />;
};
