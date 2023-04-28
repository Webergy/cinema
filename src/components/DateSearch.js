
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

export const DateSearch = () => {
    return (
        <FormControl pb={6} color={'white'} >
            <FormLabel  color={'#FCFCFC'}>Search by day</FormLabel>
            <Input
                placeholder="Select Date"
                size="md"
                type="date"
                background={'gray'}
                border={'none'}
            />
        </FormControl>
    );
};
