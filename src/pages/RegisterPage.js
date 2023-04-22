import { Box, Button, Checkbox, FormControl, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <>
            <Box mt={8}>
                <Text textAlign={'left'} color={'#FCFCFC'} size="lg">
            Register account
                </Text>
                <HStack pt={6}>
                    <Button w={'100%'}>Facebook</Button>
                    <Button w={'100%'}>Google</Button>
                </HStack>
                <Text pt={6} color={'#FCFCFC'} size="lg">
            OR
                </Text>
                <FormControl pt={4}>
                    <Input color={'#FCFCFC'}  border={'none'} type='email'  background='#181C25' placeholder='Enter your Email' />   
                </FormControl>
                <FormControl mt={4}>  
                    <Input color={'#FCFCFC'}  border={'none'} type='password'  background='#181C25' placeholder='Enter your Password' />   
                </FormControl>
                <FormControl mt={4}>  
                    <Input color={'#FCFCFC'}  border={'none'} type='password'  background='#181C25' placeholder='Repeat your Password' />   
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox color={'#FCFCFC'} w={'100%'} defaultChecked="false">Remember me</Checkbox>
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox color={'#FCFCFC'} w={'100%'} defaultChecked="false">Accept the website Terms and Conditions.</Checkbox>
                </FormControl>
                <Button mt={6} borderRadius={50} w={'100%'}>Register</Button>
                
                <Text mt={2} width={'100%'} color={'#FCFCFC'} size="xs">
                Are you with us already? Log into your account.<br/>
                    <Link to={'/register'} color='gray'>Log in</Link>
                </Text>
                
            </Box>

        </>
    );
};
