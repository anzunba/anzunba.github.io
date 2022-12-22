import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Title from '.';

export default {
  title: 'atoms/Title',
  component: Title,
  parameters: {
    layout: 'padded',
  },
  args: {
    text: 'サンプルテキスト',
    size: 'h1',
    weight: 'default',
    align: 'center',
  },
  argTypes: {
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
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
      options: ['underline', 'italic'],
      control: { type: 'select' },
    },
    color: {
      options: ['white', 'dimmed'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />;
};
