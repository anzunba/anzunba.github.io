import { Box, Stack } from '@mantine/core';
import React from 'react';
import { Title, Text } from '../..';

interface FeatureCardProps {
  title: string;
  description: string;
}
const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Box bg="navy.8" sx={{ borderRadius: '4px' }} p={16}>
      <Stack>
        <Title size="h5">{title}</Title>
        <Text>{description}</Text>
      </Stack>
    </Box>
  );
};

export default FeatureCard;
