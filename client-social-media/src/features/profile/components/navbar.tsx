import { Box, Button } from '@chakra-ui/react';

const navBarDatas = [
  {
    name: 'Post',
  },
  {
    name: 'About',
  },
  {
    name: 'Friends',
  },
  {
    name: 'Photo',
  },
  {
    name: 'Event',
  },
  {
    name: 'Other',
  },
];

export const Navbar = () => {
  return (
    <Box className="w-full bg-white flex justify-center items-center gap-1 py-2 border-2 rounded-lg md:rounded-none">
      {navBarDatas.map((item) => (
        <Button
          key={item.name}
          colorScheme="teal"
          variant="ghost"
          size={{ base: 'xs', lg: 'md' }}
          className="lg:ml-10 xl:ml-0"
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );
};
