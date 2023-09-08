import {defineStyleConfig, extendTheme} from '@chakra-ui/react'

const soundCloudfonts = ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif'];

const VStack = defineStyleConfig({
  variants: {
    playlist: {
      bg: 'gray.700',
      color: 'gray.200',
      fontFamily: soundCloudfonts
    }
  }
})

const Heading = defineStyleConfig({
  variants: {
    playlist: {
      size:"xl",
      color:'gray.300', // bgGradient:linear(to-l, #7928CA, #FF0080), bgClip:'text',
      userSelect:'none',
      _hover:{
        color:'gray.500',
        transitionDuration: '200ms',
      }
    }
  }
})

const Tooltip = defineStyleConfig({
  variants: {
    playlistTitle: {  // Title.tsx
      bg: 'gray.700',
      color: 'gray.200',
      fontFamily: soundCloudfonts
    }
  }
})

const Link = defineStyleConfig({
  variants: {
    playlistTitle: {
      fontSize: 'lg',
      color: 'gray.600',
      transitionDuration: '50ms',
      fontFamily: soundCloudfonts,
      _hover: {
        color: 'gray.800',
        textDecoration: ''
      }
    },
    playlistArtist: {
      size:'lg',
      color: 'gray.400',
      transitionDuration:'100ms',
      fontFamily: soundCloudfonts,
      _hover:{
        color:'gray.800',
        textDecoration:''
      }
    }
  }
})

const Button = defineStyleConfig({
  variants: {
    playlistExport: {
      size:'md',
      colorScheme:'blue',
      fontFamily: soundCloudfonts,
      _active:{
      }
    }
  }
})

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    VStack,
    Heading,
    Link,
    Button,
    Tooltip
  }
})

export default theme;