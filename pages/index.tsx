import Head from 'next/head';
import {
  VerticalNav,
  HorizontalNav,
  Main,
  Projects,
  Others,
  Footer,
} from '../components';
import { Container, Stack } from '@mantine/core';
import React, { useState } from 'react';

const Index = () => {
  const [section, setSection] = useState<number>(0);
  return (
    <>
      <Head>
        <title>Anna / anzunba</title>
        <meta name="description" content="Hello world! :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Container fluid bg="primary" px={0}>
        <VerticalNav
          setSection={setSection}
          display={{ base: 'none', md: 'flex' }}
        />
        <HorizontalNav
          setSection={setSection}
          display={{ base: 'block', md: 'none' }}
        />
        <Stack
          align="center"
          justify="center"
          spacing={128}
          ml={{ base: 0, md: '100px' }}
          w={{ base: '100%', md: 'calc(100vw - 150px)' }}
        >
          <Main isVisible={section === 0} />
          <Projects isVisible={section === 2} />
          <Others isVisible={section === 3} />
        </Stack>
        <Footer />
      </Container>
    </>
  );
};

export default Index;
