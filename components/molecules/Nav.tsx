import { Stack } from '@mantine/core';
import React from 'react';
import { Logo } from '..';
import Icon from '../atoms/Icon';

const Header = () => {
  return (
    <Stack
      sx={{
        backgroundColor: 'rgba(0, 34, 99, .5)',
        width: '100px',
        height: 'calc(100vh - 112px)',
        paddingTop: '48px',
        paddingBottom: '64px',
        position: 'fixed'
      }}
      justify="space-between"
      align="center"
    >
      <Logo height="80px" />
      <Stack spacing="xl">
        <Icon icon="github" />
        <Icon icon="linkedin" />
        <Icon icon="notion" />
      </Stack>
    </Stack>
  );
};

export default Header;
