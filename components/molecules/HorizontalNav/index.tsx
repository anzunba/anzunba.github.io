import {
  MantineStyleSystemProps,
  Header,
  Group,
  Burger,
  Menu,
} from '@mantine/core';
import React, { useState } from 'react';
import { Logo } from '../..';
import {
  IconHome,
  IconPlanet,
  IconRocket,
  IconStars,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNotion,
} from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

interface HorizontalNavProps extends MantineStyleSystemProps {
  setSection: React.Dispatch<React.SetStateAction<number>>;
}
const HorizontalNav = ({ setSection, ...props }: HorizontalNavProps) => {
  const [opened, setUserMenuOpened] = useState(false);
  return (
    <Header height={68} pos="fixed" bg="navy.7" w="100%" {...props}>
      <Group position="apart" px="md" py="4px">
        <Logo height="60px" />
        <Menu
          width={260}
          position="bottom-end"
          transition="pop-top-right"
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          shadow="md"
        >
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={() => setUserMenuOpened(true)}
              size="sm"
            />
          </Menu.Target>
          <Menu.Dropdown bg="navy.9">
            <Menu.Label color="gray.5">Pages</Menu.Label>
            <Menu.Item
              icon={<IconHome size={14} />}
              color="gray.5"
              onClick={() => setSection(0)}
            >
              Home
            </Menu.Item>
            <Menu.Item
              icon={<IconRocket size={14} />}
              color="gray.5"
              onClick={() => setSection(2)}
            >
              Projects
            </Menu.Item>
            <Menu.Item
              icon={<IconStars size={14} />}
              color="gray.5"
              onClick={() => setSection(3)}
            >
              Others
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label color="gray.5">Links</Menu.Label>
            <Link href="https://github.com/anzunba">
              <Menu.Item icon={<IconBrandGithub size={14} />} color="gray.5">
                GitHub
              </Menu.Item>
            </Link>

            <Link href="https://www.linkedin.com/in/anna-n-a2500911a/">
              <Menu.Item icon={<IconBrandLinkedin size={14} />} color="gray.5">
                LinkedIn
              </Menu.Item>
            </Link>

            {/* <Menu.Item icon={<IconBrandNotion size={14} />} color="gray.5">
              Notion
            </Menu.Item> */}
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Header>
  );
};

export default HorizontalNav;
