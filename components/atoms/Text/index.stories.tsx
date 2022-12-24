import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Text from '.';

export default {
  title: 'atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  args: {
    text: 'サンプルテキスト',
    size: 'md',
    weight: 'default',
    align: 'center',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    weight: {
      options: ['semibold', 'bold', 'default'],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    style: {
      options: ['underline', 'italic', 'line-through'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => {
  return <Text {...args} />;
};
