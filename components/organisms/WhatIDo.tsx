import { Box, Center, Divider, Flex, Stack } from '@mantine/core';
import React from 'react';
import { Icon, Title, Text } from '..';

const WhatIDo = () => {
  return (
    <Stack
      sx={{ height: '100vh', width: 'calc(100% - 128px)', padding: '64px' }}
      justify="center"
    >
      <Flex align='center' gap='sm'>
        <Box sx={{  minWidth: 'max-content' }}>
          <Title color="white">What I do</Title>
        </Box>
        <Divider size='sm' sx={{width: '100%'}} />
      </Flex>
      <Flex gap="xs" align="center">
        <Icon icon="mapPin" />
        <Text size="lg">Hawaii / Osaka</Text>
      </Flex>
    </Stack>
  );
};

export default WhatIDo;
