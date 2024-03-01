import { Suspense } from 'react';

import { Box, Text } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import fallbackRender from './error-boundary/fallbackRender';
import HeaderComponent from './header';

const LayoutComponent = () => {
  return (
    <Box className="w-full">
      <HeaderComponent />
      <Box className="bg-[#F6F6F7] py-16 flex flex-col">
        <ErrorBoundary fallbackRender={fallbackRender}>
          <Suspense
            fallback={
              <Box className="w-full h-full flex justify-center items-center">
                <Text>Loading...</Text>
              </Box>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Box>
  );
};

export default LayoutComponent;
