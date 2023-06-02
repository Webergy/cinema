import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img1 from '../images/image1.png';
export const MainPoster = () => {
    return (
        <HStack >  
            <Box me={6} flexGrow={1} pt={1} w={'100%'} h={'100%'}>
                <Image
                    src={img1} alt='poster' 
                    objectFit={'cover'}
                />
            </Box>
            <Box color={"#FCFCFC"} pt={1} w={'100%'} h={'100%'}>
                <Text fontSize={'20px'} lineHeight={'24px'} textAlign={'left'} >Avatar: The Way of Water</Text>
                <Text fontSize={'13px'} lineHeight={'18px'} textAlign={'left'}>Jake Sully lives with his family and tries to...</Text>
            </Box>
        </HStack>
    );
};
