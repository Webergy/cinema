import { Box, Button, Image} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img2 from '../images/image2.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
export const Slider = () => {
    return (
        <>
           
            <Carousel infiniteLoop >
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Link to='/buy'> <Button variant={'base'} fontSize={'17px'} >Check</Button></Link>

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
