import { Box, FormErrorMessage, Input, Select, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormType = {
  groupName: string;
  privacyGroup: 'public' | 'private';
};

const CreateGroup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    alert(JSON.stringify(data));
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <Box className="mb-6">
        <Text>Group Name</Text>
        <Input
          id="groupName"
          {...register('groupName', {
            required: 'The group name invalid',
            minLength: {
              value: 5,
              message: 'Group name minimum five characters',
            },
            maxLength: {
              value: 50,
              message: 'Group name maximum fivety character',
            },
          })}
        />
        {errors?.groupName && (
          <FormErrorMessage>{errors.groupName.message}</FormErrorMessage>
        )}
      </Box>
      <Text>Privacy</Text>
      <Select
        variant="outline"
        {...register('privacyGroup', {
          required: 'The group privacy is required',
        })}
      >
        <option value="private">Private</option>
        <option value="public">Public</option>
      </Select>
      <Input type="submit" placeholder="Submit" className="cursor-pointer" />
    </form>
  );
};

export default CreateGroup;
