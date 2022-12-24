import { Container, Stack } from '@mantine/core';
import React, { forwardRef, ReactElement } from 'react';

interface TemplateProps {
  children: ReactElement[] | ReactElement;
}

const Template = forwardRef<HTMLDivElement, TemplateProps>((props, ref) => {
  return (
    <Container mih="100vh" w="calc(100% - 128px)" ref={ref}>
      <Stack justify="center" spacing={60} {...props} />
    </Container>
  );
});
Template.displayName = 'Template';
export default Template;
