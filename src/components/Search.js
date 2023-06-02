import { SearchIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

export const Search = () => {
    return (
        <>
            <FormControl>
                <FormLabel  color={'#FCFCFC'}>Choose a city</FormLabel>
                <InputGroup>
                    <Input color={'#FCFCFC'}  border={'none'}  background='#181C25' placeholder='Gdańsk' />
                    <InputRightElement me={2} >
                        <SearchIcon color={'#566684'} />
                    </InputRightElement> 
                </InputGroup>
            </FormControl>

            <FormControl mt={6}>
                <FormLabel  color={'#FCFCFC'}>Search by title</FormLabel>
                <InputGroup>
                    <Input color={'#FCFCFC'}  border={'none'}  background='#181C25' placeholder='Avatar' />
           
                    <InputRightElement me={2} >
                        <SearchIcon color={'#566684'} />
                    </InputRightElement> 
                </InputGroup>
            </FormControl>
        </>
    );
};
