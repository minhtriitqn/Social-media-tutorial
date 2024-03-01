import { Box, Grid, Text } from '@chakra-ui/react';

import NavbarLayout from '../layout/navbar-layout/index';
import { avatar1 } from '@/assets';
import { Category, CartSideBar } from '@/features';

const categoriesDatas = [
  {
    id: 1,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
  {
    id: 2,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
  {
    id: 3,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },

  {
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
  {
    id: 4,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
  {
    id: 5,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
  {
    id: 6,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
  {
    id: 7,
    thumb: avatar1,
    name: 'Iphone 12',
    price: 999.99,
    location: 'Da Nang',
  },
];

export const Market = () => {
  return (
    <NavbarLayout navBarChildren={<CartSideBar />}>
      <Box className="w-ful mx-10 mt-4">
        <Text className="text-2xl font-bold my-4">Suggested to you</Text>
        <Grid
          templateColumns={{
            sm: 'repeat(2,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(4,1fr)',
            xl: 'repeat(6, 1fr)',
          }}
          gap={6}
        >
          {categoriesDatas.map((item) => (
            <Category
              name={item.name}
              key={item.id}
              thumb={item.thumb}
              location={item.location}
              price={item.price}
            />
          ))}
        </Grid>
      </Box>
    </NavbarLayout>
  );
};
