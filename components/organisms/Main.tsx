import { Box, Flex, MediaQuery, Stack } from '@mantine/core';
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
  }, [isVisible, scrollIntoView]);
  return (
    <Stack h="100vh" justify="center" ref={targetRef}>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Stack>
          <Title size="h3">Hello, I&apos;m Anna.</Title>
          <Title size="h3">I&apos;m a full-stack web developer.</Title>
        </Stack>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Stack>
          <Title>Hello, I&apos;m Anna.</Title>
          <Title>I&apos;m a full-stack web developer.</Title>
        </Stack>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Flex gap="xs" align="center">
          <Icon icon="mapPin" />
          <Text size="md">Hawaii / Osaka</Text>
        </Flex>
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Flex gap="xs" align="center">
          <Icon icon="mapPin" />
          <Text size="lg">Hawaii / Osaka</Text>
        </Flex>
      </MediaQuery>
    </Stack>
  );
});
Main.displayName = 'Main';
export default Main;
