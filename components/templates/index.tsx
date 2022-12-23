import { Stack } from '@mantine/core';
import React, { forwardRef, ReactElement } from 'react';

interface TemplateProps {
  children: ReactElement[] | ReactElement;
}

const Template = forwardRef<HTMLDivElement, TemplateProps>((props, ref) => {
  return (
    <Stack
      sx={{ height: '100vh', width: 'calc(100% - 128px)', padding: '64px' }}
      justify="center"
      spacing={60}
      {...props}
      ref={ref}
    />
  );
});

export default Template;
