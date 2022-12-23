import { RefObject, useRef } from 'react';
import { useIntersection, useScrollIntoView } from '@mantine/hooks';
import { Box, Paper, Text, useMantineTheme } from '@mantine/core';

import React from 'react';

const Test = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const theme = useMantineTheme();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
      <div style={{  height: '300vh' }}>
        <Box ref={ref} bg={entry?.isIntersecting ? 'red' : 'black'}>
          {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          <Box h="90vh" />
        </Box>
        <Box p="xl" bg={entry?.isIntersecting ? 'blue' : 'black'}>
          {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          <Box h="90vh" />
        </Box>
        <Box p="xl" bg={entry?.isIntersecting ? 'green' : 'black'}>
          {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          <Box h="90vh" />
        </Box>
      </div>
    </Paper>
  );
};

export default Test;
