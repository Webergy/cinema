import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img3 from '../images/image3.png';
import img4 from '../images/image4.png';
export const Events = () => {
    
    return (
        <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
            <Box w={'100%'} h={'100%'} color={'white'} > 
                <Image
                    src={img3} alt='poster' 
                    objectFit={'cover'}
                />

                <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
            </Box>
            <Box w={'100%'} h={'100%'} color={'white'} > 
                <Image
                    src={img4} alt='poster' 
                    objectFit={'cover'}
                />
                <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
            </Box>
        </HStack>
    );
};
