import { Box, Button, Checkbox, FormControl, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

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
                <FormControl pt={4}>
                    <Input color={'#FCFCFC'}  border={'none'} type='email'  background='#181C25' placeholder='Enter your Email' />   
                </FormControl>
                <FormControl mt={4}>  
                    <Input color={'#FCFCFC'}  border={'none'} type='password'  background='#181C25' placeholder='Enter your Password' />   
                </FormControl>
                <FormControl mt={4}>  
                    <Input   border={'none'} type='password'  background='#181C25' placeholder='Repeat your Password' />   
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox  w={'100%'} defaultChecked="false">Remember me</Checkbox>
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox  w={'100%'} defaultChecked="false">Accept the website Terms and Conditions.</Checkbox>
                </FormControl>
                <Button variant={'base'} mt={6} borderRadius={50} w={'100%'}>Register</Button>
                
                <Text mt={4} width={'100%'}  size="sm">
                Are you with us already? Log into your account.<br/>
                   
                </Text>
                <Link to={'/login'} color='gray'><Button variant={'base'} mt={6}>Log in</Button></Link>
                
            </Box>

        </>
    );
};
