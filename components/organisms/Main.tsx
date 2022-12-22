import { Flex, Stack } from '@mantine/core';
import React from 'react';
import { Icon, Title, Text } from '..';

const Main = () => {
  return (
    <Stack sx={{ height: '100vh' }} justify='center'>
      <Title>Hello, I'm Anna.</Title>
      <Title>I'm a full-stack web developer.</Title>
      <Flex gap="xs" align="center">
        <Icon icon="mapPin" />
        <Text size="lg">Hawaii / Osaka</Text>
      </Flex>
    </Stack>
  );
};

export default Main;
