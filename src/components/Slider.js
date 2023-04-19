import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img2 from '../images/image2.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const Slider = () => {
    return (
        <>
            <Text color={'#F4C600'}  mt={6} size={'2xl'} textAlign={'left'} mb={2}>Now showing</Text>
            <Carousel infiniteLoop >
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Button variant={'base'} fontSize={'17px'} >Check</Button>

                    </Box>

                    <Image
                        src={img2} alt='slider' 
                        objectFit={'cover'}
                    />

                </Box>
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Button variant={'base'} fontSize={'17px'} >Check</Button>

                    </Box>

                    <Image
                        src={img2} alt='slider' 
                        objectFit={'cover'}
                    />

                </Box>
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Button variant={'base'} fontSize={'17px'} >Check</Button>

                    </Box>

                    <Image
                        src={img2} alt='slider' 
                        objectFit={'cover'}
                    />

                </Box>
            </Carousel>
        </>
    );
};
