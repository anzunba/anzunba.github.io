import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  args: {
    size: 'xl',
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
