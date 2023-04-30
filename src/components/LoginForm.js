import { Box, Button, Checkbox, FormControl, Input } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export const LoginForm = () => {
   
    let {loginUser} = useContext(AuthContext);
   
    return (
        <Box as='form' onSubmit={loginUser}>
            <FormControl pt={4} isRequired> 
                <Input color={'#FCFCFC'}  border={'none'} type='email' name='email' background='#181C25' placeholder='Enter your Email' />   
            </FormControl>
            <FormControl mt={4} isRequired>  
                <Input color={'#FCFCFC'}  border={'none'} type='password' name='password' background='#181C25' placeholder='Enter your Password' />   
            </FormControl>
            <FormControl mt={5}>  
                <Checkbox  w={'100%'} defaultChecked="false">Remember me</Checkbox>
            </FormControl>
            <FormControl mt={5}>  
                <Checkbox  w={'100%'} defaultChecked="false">Accept the website Terms and Conditions.</Checkbox>
            </FormControl>
        
            <Button type='submit' variant={'base'} mt={6} borderRadius={50} w={'100%'}>Log into</Button>
        </Box>
    );
};
