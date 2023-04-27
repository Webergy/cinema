import { Box, Button,  HStack, Text } from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {

    return (
        <>
            <Box mt={8} color={'#F4C600'}>
                <Text textAlign={'left'}  size="lg">
            Register account
                </Text>
                <HStack pt={6}>
                    <Button variant={'base'} w={'100%'}>Facebook</Button>
                    <Button  variant={'base'} w={'100%'}>Google</Button>
                </HStack>
                <Text pt={6}  size="lg">
            OR
                </Text>
                <RegisterForm/>
                <Text mt={4} width={'100%'}  size="sm">
                Are you with us already? Log into your account.<br/>
                   
                </Text>
                <Link to={'/login'} color='gray'><Button variant={'base'} mt={6}>Log in</Button></Link>
                
            </Box>

        </>
    );
};
