import { Box, Flex, Stack } from '@mantine/core';
import React, { ReactNode } from 'react';
import { Title, Text } from '../..';
import Image from 'next/image';
interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  vertical?: boolean;
}
const FeatureCard = ({
  title,
  description,
  image,
  children,
  vertical,
}: FeatureCardProps) => {
  return (
    <Box
      bg="navy.8"
      h="100%"
      sx={(theme) => ({
        borderRadius: '4px',
        borderLeft: '5px solid',
        borderColor: theme.colors.navy[6],
      })}
      p={16}
    >
      <Flex
        direction={vertical ? 'column' : 'row'}
        justify="space-between"
        h="100%"
      >
        <Stack spacing={8} mb="auto">
          <Title size="h5">{title}</Title>
          <Text>{description}</Text>
        </Stack>
        {image && <Image src={image} alt="" width={100} height={100} />}
        {children}
      </Flex>
    </Box>
  );
};

export default FeatureCard;
