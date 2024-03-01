import { Box, Text, Button, Avatar } from '@chakra-ui/react';
import { AiOutlineMessage } from 'react-icons/ai';
type Props = {
  thumb: string;
  name: string;
  isFriend: true | false;
};

export const Friend = ({ thumb, name, isFriend }: Props) => {
  return (
    <Box className="bg-white rounded-lg p-4 flex flex-col justify-center items-center gap-4">
      <Avatar src={thumb} size="2xl" />
      <Text className="text-xl font-bold cursor-pointer">{name}</Text>
      {isFriend == true ? (
        <Button
          leftIcon={<AiOutlineMessage />}
          colorScheme="blue"
          variant="outline"
          className="w-full"
        >
          Call us
        </Button>
      ) : (
        <Box className="flex flex-col gap-2 w-full">
          <Button colorScheme="blue" variant="solid">
            Confirm
          </Button>
          <Button colorScheme="blue" variant="outline">
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};
