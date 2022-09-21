import { extendTheme } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
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
});
