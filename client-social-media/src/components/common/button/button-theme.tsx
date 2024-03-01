import { Button, extendTheme, useColorMode } from '@chakra-ui/react';

const theme = extendTheme({
  color: {
    brand: {
      900: '#1a202c',
      50: '#f7fafc',
    },
  },
  config: {
    intialColorMode: 'dark',
    useSystemColorMode: true,
  },
  style: {
    global: {
      body: {
        margin: 0,
      },
      code: {},
    },
  },
});

const ButtonTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'dark' : 'light'}
    </Button>
  );
};

export default { theme, ButtonTheme };
