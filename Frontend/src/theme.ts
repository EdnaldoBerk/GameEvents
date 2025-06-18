import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      100: '#e2e8f0',
      200: '#cbd5e1',
      300: '#a0aec0',
      400: '#718096',
      500: '#4a5568',
      600: '#2d3748',
      700: '#1a202c',
      800: '#111',
      900: '#000',
    },
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'black' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'white' : 'black',
          color: props.colorMode === 'dark' ? 'black' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.200' : 'gray.800',
          },
        }),
        ghost: (props: any) => ({
          bg: 'transparent',
          color: props.colorMode === 'dark' ? 'white' : 'black',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
          },
        }),
      },
    },
    Heading: {
      baseStyle: (props: any) => ({
        fontWeight: 'bold',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      }),
    },
    Link: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'white' : 'black',
        _hover: {
          color: props.colorMode === 'dark' ? 'gray.200' : 'gray.700',
        },
      }),
    },
    Card: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
        color: props.colorMode === 'dark' ? 'white' : 'black',
        borderRadius: 'md',
        boxShadow: 'md',
      }),
    },
  },
}); 