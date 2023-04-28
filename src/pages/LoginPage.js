import { Box, Button, HStack, Text } from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
   
    return (

        <>
            <Box mt={8} color={'#F4C600'}>
                <Text textAlign={'left'}  size="lg">
            Log into your account
                </Text>
                <HStack pt={6}>
                    <Button variant={'base'}  w={'100%'}>Facebook</Button>
                    <Button variant={'base'} w={'100%'}>Google</Button>
                </HStack>
                <Text pt={6}  size="lg">
            OR
                </Text>
                <LoginForm/>
                <Text mt={4} width={'100%'}  size="sm">
                Are you new? Creating an account is quick.<br/>
               
                </Text>
                <Box w={'100%'}> <Link to={'/register'}><Button variant={'base'} mt={6}>Create an account</Button></Link></Box>
               
            </Box>

        </>
    );
};
