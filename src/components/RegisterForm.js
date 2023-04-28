import { Box, Button, Checkbox, FormControl, Input, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
export const RegisterForm = () => {

    const [error, setError] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rpassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(6, 'Email is too short')
                .max(255, 'Email is too long')
                .required('Enter email')
                .email("Enter email"),
            password: Yup.string()
                .max(50, 'Maximum 50 chars')
                .min(6, 'At least 6 chars')
                .required('Enter password')
                .matches(/^(?=.*[A-Z])/,"At least one big letter")
                .matches(  /^(?=.*[!@#\\$%\\^&\\*])/,"At least one special char")
                .matches(/^(?=.{6,20}$)\D*\d/, "At least one number"),
            rpassword: Yup.string()
                .required('Repeat password')
                .oneOf([Yup.ref('password')], 'Different passwords'),
        }),
        onSubmit: async values => {
            try {
                const  userData = {
                    email:values.email,
                    password:values.password
                };
                
                console.log(userData);
            } catch (err) {
               
                setError(err.message);
            } 
        },
    });

    return (
        <>
            <Box as='form' onSubmit={formik.handleSubmit} > 
                <FormControl  pt={4}>
                    <Input
                        color={'#FCFCFC'} border={'none'} background='#181C25'
                        type={'email'}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='Enter your Email'
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <Text mt={2} color={'red'} textAlign={'center'}>
                            {formik.errors.email}
                        </Text>
                    ) : null}
                </FormControl>

                <FormControl mt={4}>
                    <Input
                        color={'#FCFCFC'} border={'none'} background='#181C25'
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder='Enter your Password'
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <Text mt={2}  color={'red'} textAlign={'center'}>
                            {formik.errors.password}
                        </Text>
                    ) : null}
                </FormControl>
                <FormControl mt={4}>
                    <Input
                        color={'#FCFCFC'} border={'none'} background='#181C25'
                        type="password"
                        id="rpassword"
                        name="rpassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.rpassword}
                        placeholder='Repeat your Password'
                    />
                    {formik.touched.rpassword && formik.errors.rpassword ? (
                        <Text mt={2}  color={'red'} textAlign={'center'}>
                            {formik.errors.rpassword}
                        </Text>
                    ) : null}
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox  w={'100%'} defaultChecked="false">Remember me</Checkbox>
                </FormControl>
                <FormControl mt={5}>  
                    <Checkbox  w={'100%'} defaultChecked="false">Accept the website Terms and Conditions.</Checkbox>
                </FormControl>
                
                <Button type='submit' variant={'base'} mt={6} borderRadius={50} w={'100%'}>Register</Button>
                
            </Box>
            {error && (
                <Text color={'red'} textAlign="center" fontSize={'2xl'}>
                    {error}
                </Text>
            )}
        </>
    );
};
