import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import { ApolloClientProvider } from './provider/apollo-client-provider.tsx';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

// eslint-disable-next-line import/order
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloClientProvider>
      <ChakraProvider>
        <ToasterConfig />
        <Routes />
      </ChakraProvider>
    </ApolloClientProvider>
  </React.StrictMode>,
);
