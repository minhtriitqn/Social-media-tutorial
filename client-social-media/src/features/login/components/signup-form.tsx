import { useState, ChangeEvent } from 'react';

import {
  Box,
  Input,
  Text,
  Checkbox,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  Divider,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import ErrorShow from '../../form/error-show/error-show';
import { RegisterInput, useSignUpMutation } from '@/features/auth';

export const SignUpForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gender, setGender] = useState(Number);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [other, setOther] = useState(false);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '1') {
      setMale(true);
      setFemale(false);
      setOther(false);
      setGender(1);
    } else if (value == '2') {
      setMale(false);
      setFemale(true);
      setOther(false);
      setGender(2);
    } else {
      setMale(false);
      setFemale(false);
      setOther(true);
      setGender(3);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterInput>();

  const [signup] = useSignUpMutation();

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    data.gender = gender;
    void signup({
      variables: { body: data },
      onCompleted: () => {
        toast.success('Sign up is successfully');
        onClose();
        reset();
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  return (
    <Box>
      <Text className="text-[#7F265B] cursor-pointer" onClick={onOpen}>
        Create an account
      </Text>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <Box className="flex flex-col gap-2">
                <Input
                  id="fullname"
                  placeholder="Full Name"
                  {...register('fullname', {
                    required: 'What is your fullname',
                    maxLength: {
                      value: 50,
                      message: 'Fullname cannot exceed 50 characters',
                    },
                  })}
                />
                {errors?.fullname && (
                  <ErrorShow message={errors.fullname.message as string} />
                )}
                <Input
                  placeholder="Phone"
                  {...register('phone', {
                    required: 'Please input your phone number',
                    pattern: {
                      value: /^[0-9]{10,}$/i,
                      message: 'Invalid phone number',
                    },
                    minLength: {
                      value: 5,
                      message:
                        'The minimum and maximum phone number is ten digits',
                    },
                    maxLength: {
                      value: 100,
                      message:
                        'The minimum and maximum phone number is ten digits',
                    },
                  })}
                />
                {errors?.phone && (
                  <ErrorShow message={errors.phone.message as string} />
                )}
                <Input
                  placeholder="Email"
                  {...register('email', {
                    required: 'Please input your email',
                    pattern: {
                      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/,
                      message: 'Invalid email',
                    },
                  })}
                />
                {errors?.email && (
                  <ErrorShow message={errors.email.message as string} />
                )}
                <Input
                  id="username"
                  placeholder="Username"
                  {...register('username', {
                    required: 'What is your username',
                    maxLength: {
                      value: 50,
                      message: 'User cannot exceed 50 characters',
                    },
                    minLength: {
                      value: 5,
                      message: 'Username cannot be less than 5 characters',
                    },
                  })}
                />
                {errors?.username && (
                  <ErrorShow message={errors.username.message as string} />
                )}
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  {...register('password', {
                    required: 'Please input your password',
                    maxLength: {
                      value: 50,
                      message: 'Password cannot exceed 50 characters',
                    },
                    minLength: {
                      value: 5,
                      message: 'Password cannot be less than 5 characters',
                    },
                  })}
                />
                {errors?.password && (
                  <ErrorShow message={errors.password.message as string} />
                )}
                <Box className="my-4">
                  <Text className="text-gray-500">Gender</Text>
                  <Box className="flex justify-between">
                    <Checkbox
                      value="1"
                      isChecked={male}
                      onChange={handleCheckboxChange}
                    >
                      Male
                    </Checkbox>
                    <Checkbox
                      value="2"
                      isChecked={female}
                      onChange={handleCheckboxChange}
                    >
                      Female
                    </Checkbox>
                    <Checkbox
                      value="3"
                      isChecked={other}
                      onChange={handleCheckboxChange}
                    >
                      Other
                    </Checkbox>
                  </Box>
                  {errors?.gender && (
                    <ErrorShow message="Please chooose your gender" />
                  )}
                </Box>
                <Text className="text-gray-500" fontSize="xs">
                  People who use our service may have uploaded your contact
                  information to Facebook.
                </Text>
                <Text className="text-gray-500" fontSize="xs">
                  By clicking Sign Up, you agree to our Terms, Privacy Policy
                  and Cookies Policy. You may receive SMS notifications from us
                  and can opt out at any time.
                </Text>
                <Input
                  type="submit"
                  colorScheme="whatsapp"
                  className="my-4 cursor-pointer !bg-green-500"
                />
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
