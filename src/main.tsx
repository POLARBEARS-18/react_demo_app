import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { config, theme } from 'theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
