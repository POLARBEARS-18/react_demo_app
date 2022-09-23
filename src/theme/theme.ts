import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.800',
        width: '100%',
        minHeight: '100vh',
      },
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: true,
});
