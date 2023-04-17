import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `SF Pro Display, sans-serif`,
        body: `'SF Pro Display', sans-serif`,
    },
    components: {
        Text:{
            sizes:{
                '2xl':{
                    fontSize:'34px',
                    lineHeight:'41px',
                    fontWeight:'700'
                },
                'xl':{
                    fontSize:'22px',
                    lineHeight:'28px',
                    fontWeight:'700'
                },
                'lg':{
                    fontSize:'20px',
                    lineHeight:'24px',
                    fontWeight:'700'
                },
                'md':{
                    fontSize:'17px',
                    lineHeight:'22px',
                    fontWeight:'400'
                },
                'md-bold':{
                    fontSize:'17px',
                    lineHeight:'22px',
                    fontWeight:'700'
                },
                'sm':{
                    fontSize:'13px',
                    lineHeight:'18px',
                    fontWeight:'500'
                },
                'sm-bold':{
                    fontSize:'13px',
                    lineHeight:'18px',
                    fontWeight:'700'
                },
            },
        }
        ,
        Button:{
            baseStyle: {
                fontWeight: '500',
                lineHeight:'22px',
                gap:'8px',
                borderRadius:'8px',
                padding: '14px 36px',
                h:'50px',
                w:'145px',
                color:'#070707'

            },
            variants: {
                base:
      {
          bg:'#F4C600'
      }
            }
        },

        FormLabel:{
            baseStyle: {
                fontWeight: '400',
                lineHeight:'22px',
                fontSize:'17px',
            },
        },
        Input:{
            baseStyle: {
                fontWeight: '400',
                lineHeight:'22px',
                fontSize:'17px',
                borderRadius:'8px',
            },
        },
        Link:{
            baseStyle: {
                fontWeight: '400',
                lineHeight:'18px',
                fontSize:'17px',
                borderRadius:'8px',
                textDecoration:'underline'
            },
        },

    }
});

export default theme;