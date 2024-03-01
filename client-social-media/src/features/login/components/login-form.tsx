import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  FormLabel,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import ErrorShow from '../../form/error-show/error-show';
import { LoginValues, useAuthStore, useLoginMutation } from '@/features/auth';

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();

  const tokenLocal = localStorage.getItem('token');

  const { token, loginUser } = useAuthStore((state) => ({
    token: state.token,
    loginUser: state.loginUser,
  }));

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    void login({
      variables: { body: data },
      onCompleted: (data) => {
        void loginUser(data.login);
        void toast.success('Login successfully');
      },
      onError: () => {
        void toast.error('Username or password invalid');
      },
    });
  };

  useEffect(() => {
    if (token || tokenLocal) {
      navigate('/home', { replace: true });
    }
  }, [navigate, token, tokenLocal]);

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <Box className="mb-6">
        <FormLabel>Username</FormLabel>
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
      </Box>
      <Box>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? 'text' : 'password'}
            id="password"
            placeholder="Password"
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
          <InputRightElement width="3rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors?.password && (
          <ErrorShow message={errors.password.message as string} />
        )}
      </Box>
      <Box className="text-sm flex justify-between items-center my-2 text-[#7F265B]">
        <Checkbox defaultChecked>Remember me</Checkbox>
        <Link to="">
          <Text>Forgot Password?</Text>
        </Link>
      </Box>
      <Input
        type="submit"
        className="cursor-pointer !bg-[#7F265B] text-white mt-6"
      />
    </form>
  );
};
