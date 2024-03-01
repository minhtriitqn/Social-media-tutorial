import { ChangeEvent, ChangeEventHandler, useMemo, useState } from 'react';

import {
  Box,
  Text,
  Input,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Divider,
  Select,
  Avatar,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiCamera } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

import { useUpdateProfile } from '../hooks/use-update-profile';
import { UpdateInput } from '../service/type';
import { useQueryInfoUser } from '@/features/auth';
import ErrorShow from '@/features/form/error-show/error-show';
import { converDateToString } from '@/utils';

export const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRelationship, setSelectedRelationship] = useState<number>();
  const [selectedDayOfBirth, setSelectedDayOfBirth] = useState<Date>();

  const handleChooseRelationship = (
    e: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedRelationship(selectedValue);
  };

  const handleChooseDayOfBirth = (e: ChangeEvent<HTMLImageElement>) => {
    setSelectedDayOfBirth(e.target.value);
  };

  const { data: infoUser } = useQueryInfoUser();
  const editProfileValue = useMemo(() => {
    if (infoUser) {
      const result = [
        {
          name: 'Full name',
          value: infoUser.getInfoUser.fullname,
          id: uuidv4(),
          field: 'fullname',
          maxlength: {
            value: 50,
            message: 'The maximum length of fullname is 50 characters',
          },
          minLength: {
            value: 5,
            message: 'The minimum length of fullname is 5 characters',
          },
        },
        {
          name: 'Work',
          value: infoUser?.getInfoUser.company,
          id: uuidv4(),
          field: 'company',
        },
        {
          name: 'Study',
          value: infoUser?.getInfoUser.university,
          id: uuidv4(),
          field: 'university',
        },
        {
          name: 'Address',
          value: infoUser?.getInfoUser.address,
          id: uuidv4(),
          field: 'address',
        },

        {
          name: 'Phone',
          value: infoUser?.getInfoUser.phone,
          id: uuidv4(),
          field: 'phone',
        },
        {
          name: 'email',
          value: infoUser?.getInfoUser.email,
          id: uuidv4(),
          field: 'email',
        },
      ];
      return result;
    }
  }, [infoUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateInput>();
  const [update] = useUpdateProfile();

  const onSubmit: SubmitHandler<UpdateInput> = (data) => {
    data.relationship = selectedRelationship;
    data.dayOfBirth = converDateToString(selectedDayOfBirth);
    void update({
      variables: { body: data, id: infoUser?.getInfoUser.id },
      onCompleted: () => {
        toast.success('Update is successfully!');
        onClose();
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box>
      <Text
        className="text-green-900 font-bold cursor-pointer"
        onClick={onOpen}
      >
        Edit
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">Edit Profile</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody className="h-screen">
            <Box>
              <Text>Change your Avartar</Text>
              <Box className="">
                <Avatar size="2xl" />
                <Box className="absolute text-2xl bg-gray-500 p-1 rounded-full text-white bottom-0 right-0 -translate-x-1/2 -translate-y-1/2">
                  <BiCamera />
                </Box>
              </Box>
            </Box>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <Text className="text-xl my-2">Your Biography</Text>
              <Input
                placeholder={infoUser?.getInfoUser.description}
                id="description"
                {...register('description')}
              />
              <Text className="text-xl mt-6 mb-2">Edit Your Information</Text>
              {editProfileValue?.map((item) => (
                <Box key={item.id} className="my-2">
                  <Text>{item.name}</Text>
                  <Input
                    id={item.field}
                    placeholder={item.value}
                    {...register(item.field, {
                      required: false,
                      maxLength: {
                        value: item.maxlength?.value,
                        message: item.maxlength?.message,
                      },
                    })}
                  />
                  {errors?.[item.field as string] && (
                    <ErrorShow
                      message={errors?.[item.field as string]?.message}
                    />
                  )}
                </Box>
              ))}
              <Text>Your birthday</Text>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                onChange={() => handleChooseDayOfBirth}
                value={selectedDayOfBirth}
                className="mb-2"
              />
              <Select
                placeholder="Relationship"
                onChange={() => handleChooseRelationship}
                value={selectedRelationship}
                className="!my-4"
              >
                <option value="0">Single</option>
                <option value="1">Dating</option>
                <option value="2">Maried</option>
              </Select>

              <Input type="submit" className="cursor-pointer !bg-green-500" />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
