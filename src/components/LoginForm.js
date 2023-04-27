import { Box, Button, Checkbox, FormControl, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

export const LoginForm = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
   
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
    
        try {
            const  userData = {
                email:email,
                password:password
            };
    
            await axios.post("url",userData);
            
        } catch (err) {
            console.log(err);
        } 
    
    };
    return (
        <Box as='form' onSubmit={handleSubmit}>
            <FormControl pt={4} isRequired> 
                <Input color={'#FCFCFC'}  border={'none'} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  background='#181C25' placeholder='Enter your Email' />   
            </FormControl>
            <FormControl mt={4} isRequired>  
                <Input color={'#FCFCFC'}  border={'none'} type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  background='#181C25' placeholder='Enter your Password' />   
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
