import { Box, Button, Checkbox, FormControl, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

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
                <FormControl pt={4}>
                    <Input color={'#FCFCFC'}  border={'none'} type='email'  background='#181C25' placeholder='Enter your Email' />   
                </FormControl>
                <FormControl mt={4}>  
                    <Input color={'#FCFCFC'}   border={'none'} type='password'  background='#181C25' placeholder='Enter your Password' />   
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox  w={'100%'} defaultChecked="false">Remember me</Checkbox>
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox  w={'100%'} defaultChecked="false">Accept the website Terms and Conditions.</Checkbox>
                </FormControl>
                <Link to={'/user'}> <Button variant={'base'} mt={6} borderRadius={50} w={'100%'}>Log into</Button></Link>
                
                <Text mt={4} width={'100%'}  size="sm">
                Are you new? Creating an account is quick.<br/>
                </Text>
                <Link to={'/register'}><Button variant={'base'} mt={6}>Create an account</Button></Link>
                
            </Box>

        </>
    );
};
