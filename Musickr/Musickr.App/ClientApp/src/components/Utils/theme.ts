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
    Text: {
      variants: {
        artist: {
          border: '2px solid',
          borderColor: 'purple.500',
          color: 'rgb(153,153,153)',
          _hover:{
            color:'teal.600'
          }
        }
      }
    },
    Tooltip: {
      variants: {
        socials: {
          bg: 'gray.700',
          color: 'gray.200',
          fontsize:'50px',
          fontFamily: ['Interstate', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Garuda', 'Verdana', 'Tahoma', 'sans-serif']
        }
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
    
  }
})

export default theme;