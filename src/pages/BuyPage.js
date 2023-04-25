import { Box, Button, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

export const BuyPage = () => {

    const row = <>
        <Box w={5} h={5} bg={'gray'} _hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
        <Box w={5} h={5} bg={'gray'}_hover={{bgColor:'orange'}}></Box>
    </>;

    return (
        <Box color={'#FCFCFC'} >
            <Text mt={16} textAlign={'left'} size={'lg'}>Choose you seat</Text>
            <HStack mt={10}>
                <Text size={'sm'}>Today, 23.12.2022</Text>
                <Text size={'sm'}>01:15 pm</Text>
                <Text size={'sm'}>2D, subtitles</Text>
            </HStack>
            <Box mt={6}>
                <Box ms={9} me={10} bg={'gray'}><Text size={'md'}>Screen</Text></Box>
            </Box>
            <SimpleGrid ms={5} me={5} mt={4} columns={11} spacingX={'2px'} spacingY={'4px'} >
                {row}
                {row}
                {row}
                {row}
            </SimpleGrid>
            <Text  size={'md'} textAlign={'left'} mt={6}>
            Your tickets
            </Text>
               
            <HStack mt={4}>
                <Box display={'flex'} flexDirection={'row'} me={'5'} >
                    <Box alignSelf={'flex-start'} w={6} h={6} bg={'orange'}></Box>
                    <Box ms={2}>
                        <Text textAlign={'left'} size={'sm'}>Row: 2</Text>
                        <Text textAlign={'left'} size={'sm'}>Column: 1</Text>
                    </Box>
                </Box>
                
                <Box display={'flex'} >
                    <Box alignSelf={'flex-start'} w={6} h={6} bg={'orange'}></Box>
                    <Box ms={2}>
                        <Text textAlign={'left'} size={'sm'}>Row: 2</Text>
                        <Text textAlign={'left'} size={'sm'}>Column: 1</Text>
                    </Box>
                </Box>
            </HStack>
            <Text size={'md'} textAlign={'left'} mt={6}>
                Total
            </Text>
            <Text size={'md'} textAlign={'left'} mt={6}>
                $ 17.50
            </Text>
            <Button w={'100%'} borderRadius={50} mt={8}>
                Ready to buy
            </Button>   
        </Box>
    );
};
