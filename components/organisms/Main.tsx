import { Flex, Stack } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { forwardRef, useEffect } from 'react';
import { Icon, Text, Title } from '..';

interface MainProps {
  isVisible?: boolean;
}
const Main = forwardRef<HTMLDivElement, MainProps>(({ isVisible }, _) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
  useEffect(() => {
    {
      if (isVisible) {
        scrollIntoView({ alignment: 'start' });
      }
    }
  }, [isVisible]);
  return (
    <Stack h="100vh" justify="center" ref={targetRef}>
      <Title>Hello, I'm Anna.</Title>
      <Title>I'm a full-stack web developer.</Title>
      <Flex gap="xs" align="center">
        <Icon icon="mapPin" />
        <Text size="lg">Hawaii / Osaka</Text>
      </Flex>
    </Stack>
  );
});

export default Main;
