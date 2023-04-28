import {  Text, Link,} from '@chakra-ui/react';
import React from 'react';

import { MainPoster } from '../components/MainPoster';
import { Slider } from '../components/Slider';
import { Search } from '../components/Search';
import { Events } from '../components/Events';
import { TicketsOffer } from '../components/TicketsOffer';
import { DropDownMenu } from '../components/DropDownMenu';
import Header from '../components/Header';

const HomePage = () => {

    return (
        <>
            <Header marginTop={20} />
            <MainPoster/>
            <Text color={'#F4C600'}  mt={6} size={'2xl'} textAlign={'left'} mb={2}>Now showing</Text>
            <Slider/>
            <Search/>

            <Text color={'#F4C600'}  mt={'18px'} mb={2} size={'xl'} textAlign={'left'}>Superhits</Text>

            <Events/>
            <Text color={'#F4C600'}  mt={8} mb={2} size={'xl'} textAlign={'left'}>Premiers</Text>
            <Events/>
            <Link color={'#F4C600'} textAlign={'left'} mt={8} mb={8} >See our full repetitory</Link>
  
            <Text color={'#F4C600'}  mb={2} size={'xl'} textAlign={'left'}>Events</Text>
            <Events/>
            <Link color={'#F4C600'} textAlign={'left'} mt={8} mb={8} >See our full repetitory</Link>
            <TicketsOffer/>
            
            <DropDownMenu/>
        </>
    );
};

export default HomePage;