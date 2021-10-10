import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D94',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
    primaryBlue: '#5BA8F5',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        color: '#0C3048',
        fontSize: '21px',
        // background: '#0D1117',
        background: '#F8F8FF',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        cursor: 'pointer',
      },
    },
  },
});
