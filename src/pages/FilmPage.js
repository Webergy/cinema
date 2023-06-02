import React from 'react';
import Header from '../components/Header';
import { Box, Text } from '@chakra-ui/react';
import { Film } from '../components/Film';
import { DateSearch } from '../components/DateSearch';
import { Slider } from '../components/Slider';
import { DropDownMenu } from '../components/DropDownMenu';

export const FilmPage = () => {
    return (
        <Box color={'#FCFCFC'}>
            <Header marginTop={25}/>
            <Text mt={8} size={'lg'} textAlign={'left'}>
                Repertory and cinemas
            </Text>
            <Film/>
            <DateSearch/>
            <Text mb={6} size={'lg'}>Photos and Trailers</Text>
            <Slider/>
            <DropDownMenu/>
        </Box>
       
    );
};
