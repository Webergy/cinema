import React from 'react';
import { Search } from '../components/Search';
import { Slider } from '../components/Slider';
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { DateSearch } from '../components/DateSearch';
import { DropDownMenu } from '../components/DropDownMenu';

export const RepetitoryPage = () => {
    return (
        <>
            <Search/>
            <Tabs pt={6} variant='unstyled'>
                <TabList color={'#FCFCFC'}>
                    <Tab _selected>Showing</Tab>
                    <Tab _selected>Soon</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <Slider/>
                    </TabPanel>
                    <TabPanel>
                        <Slider/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <DateSearch/>

            <Tabs pt={6} variant='unstyled'>
                <TabList color={'#FCFCFC'}>
                    <Tab _selected>Alphabet</Tab>
                    <Tab _selected>Time</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <Text>Films by Alphabet</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text>Film by Time</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
            <DropDownMenu/>
        </>
    );
};
