import {
  Button,
  Grid,
  GridItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  WrapItem,
} from '@chakra-ui/react';
import { MdWindow } from 'react-icons/md';
const Menu = () => {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button px="0">
          <WrapItem className="bg-gray-500 p-2 rounded-full">
            <MdWindow className="text-md lg:text-xl text-white" />
          </WrapItem>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Menu</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Grid gap={2} templateColumns="repeat(2, 1fr)">
            <GridItem w="70%" bg="blue.500">
              sdfhsdkjn
            </GridItem>
            <GridItem w="30%">sdfhsdkjn</GridItem>
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Menu;
