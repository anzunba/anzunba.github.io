import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ImageCard from '.';

export default {
  title: 'molecules/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    image:
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Plan & save',
    description:
      'Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific',
  },
} as ComponentMeta<typeof ImageCard>;

export const Default: ComponentStory<typeof ImageCard> = (args) => {
  return <ImageCard {...args} />;
};
