import React from 'react';
import Header from '../components/Header';
import { Box, HStack, Icon, Text, } from '@chakra-ui/react';
import { FaInstagramSquare } from 'react-icons/fa';

export const UserPage = () => {
    return (
        <Box color={'#FCFCFC'}>
            <Header marginTop={25} />
            <Box mt={4} width={'100%'}>
                <Text textAlign={'left'} size={'lg'}>
                Hello,
                </Text>
                <Text mt={4} textAlign={'left'} size={'md'}>
                    User user
                </Text>
                <Box alignItems={'flex-start'}>
                    <HStack mt={7} size='md'>
                        <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={2}/> 
                        <Text size={'md'}>My tickets</Text>
                    </HStack>

                    <HStack mt={8} size='md'>
                        <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={2}/> 
                        <Text size={'md'}>My collections</Text>
                    </HStack>

                    <HStack mt={8} size='md'>
                        <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={2}/> 
                        <Text size={'md'}>My discounts</Text>
                    </HStack>

                    <HStack mt={8} size='md'>
                        <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={2}/> 
                        <Text size={'md'}>Accounts settings</Text>
                    </HStack>

                    <HStack mt={12} size='md'>
                        <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={2}/> 
                        <Text size={'md'}>Logout</Text>
                    </HStack>
                </Box>
                
            </Box>
        </Box>
    );
};
