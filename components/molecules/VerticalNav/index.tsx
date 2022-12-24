import {
  Box,
  Stack,
  MantineStyleSystemProps,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import React from 'react';
import { Logo } from '../..';
import {
  IconBrandLinkedin,
  IconHome,
  IconRocket,
  IconStars,
  IconBrandGithub,
} from '@tabler/icons';
import Link from 'next/link';

interface NavProps extends MantineStyleSystemProps {
  setSection: React.Dispatch<React.SetStateAction<number>>;
}
const VerticalNav = ({ setSection, ...props }: NavProps) => {
  return (
    <Stack
      h="100vh"
      w="100px"
      pos="fixed"
      bg="navy.8"
      pt="48px"
      justify="space-between"
      align="center"
      {...props}
    >
      <Logo />
      <Stack spacing="xl" align="center">
        <Tooltip label="Home" position="right">
          <ActionIcon variant="light" onClick={() => setSection(0)}>
            <IconHome />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Projects" position="right">
          <ActionIcon variant="light" onClick={() => setSection(2)}>
            <IconRocket />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Others" position="right">
          <ActionIcon variant="light" onClick={() => setSection(3)}>
            <IconStars />
          </ActionIcon>
        </Tooltip>
      </Stack>
      <Stack spacing="xl" align="center">
        <Tooltip label="GitHub" position="right">
          <Link href="https://github.com/anzunba">
            <ActionIcon variant="light">
              <IconBrandGithub />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip label="LinkedIn" position="right">
          <Link href="https://www.linkedin.com/in/anna-n-a2500911a/">
            <ActionIcon variant="light">
              <IconBrandLinkedin />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Box bg="gray.0" w="1px" h="100px" opacity={0.25} />
      </Stack>
    </Stack>
  );
};

export default VerticalNav;
