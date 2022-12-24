import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          dark: ['#00113A', '#002263'],
          navy: [
            '#9BB1ED',
            '#7C9AE8',
            '#5E82E2',
            '#406ADD',
            '#2555D4',
            '#1F48B6',
            '#1A3C97',
            '#153079',
            '#0F245B',
            '#0A183C',
          ],
        },
        primaryColor: 'navy',
        primaryShade: { light: 2, dark: 8 }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
