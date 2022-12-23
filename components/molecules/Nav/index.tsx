import { Box, Stack, MantineStyleSystemProps, ActionIcon } from '@mantine/core';
import React from 'react';
import { Logo } from '../..';
import Icon from '../../atoms/Icon';
import { IconHome, IconPlanet, IconRocket, IconStars } from '@tabler/icons';

interface NavProps extends MantineStyleSystemProps {
  setSection: React.Dispatch<React.SetStateAction<number>>;
}
const Header = ({ setSection, ...props }: NavProps) => {
  return (
    <Stack
      bg="navy.8"
      pt="48px"
      justify="space-between"
      align="center"
      {...props}
    >
      <Logo height="80px" />
      <Stack spacing="xl" align="center">
        <ActionIcon variant="light" onClick={() => setSection(0)}>
          <IconHome />
        </ActionIcon>
        <ActionIcon
          variant="light"
          onClick={() => setSection(1)}
        >
          <IconPlanet />
        </ActionIcon>
        <ActionIcon
          variant="light"
          onClick={() => setSection(2)}
        >
          <IconRocket />
        </ActionIcon>
        <ActionIcon
          variant="light"
          onClick={() => setSection(3)}
        >
          <IconStars />
        </ActionIcon>
      </Stack>
      <Stack spacing="xl" align="center">
        <Icon icon="github" />
        <Icon icon="linkedin" />
        <Icon icon="notion" />
        <Box bg="gray.0" w="1px" h="100px" opacity={0.25} />
      </Stack>
    </Stack>
  );
};

export default Header;
