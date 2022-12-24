import { Flex, Box, Divider } from '@mantine/core';
import React, { forwardRef } from 'react';
import { Title } from '../..';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ title }, ref) => {
    return (
      <Flex align="center" gap="sm" ref={ref}>
        <Box sx={{ minWidth: 'max-content' }}>
          <Title color="white">{title}</Title>
        </Box>
        <Divider size="sm" sx={{ width: '100%' }} color='gray.0'/>
      </Flex>
    );
  }
);

export default SectionTitle;
