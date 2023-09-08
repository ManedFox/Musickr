import {defineStyleConfig, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    Heading: {
      variants: {
        playlist: {
          size:"xl",
          bgGradient:'linear(to-l, #7928CA, #FF0080)',
          bgClip:'text',
          userSelect:'none',
          _hover:{
          }
        }
      }
    },
    Link: {
      variants: {
        playlistArtist: {
          color: 'gray.400',
          transitionDuration:'100ms',
          fontFamily: ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif'],
          _hover:{
            color:'gray.800',
            textDecoration:''
          }
        },
        playlistTitle: {
          color: 'gray.600',
          transitionDuration: '50ms',
          fontFamily: ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif'],
          _hover: {
            color: 'gray.800',
            textDecoration:''
          }
        },
      }
    },
    Button: {
      variants: {
        export: {
          bg: 'orange.400',
          color: 'orange.600',
          fontsize:'50px',
          fontFamily: ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif'],
          _active:{
            bg: '#dddfe2',
            borderColor: '#bec3c9',
          }
        }
      }
    },
    Tooltip: {
      variants: {
        playlistTitle: {  // Title.tsx
          bg: 'gray.700',
          color: 'gray.200',
          fontsize:'50px',
          fontFamily: ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif']
        }
      }
    },
    
    
  }
})

export default theme;