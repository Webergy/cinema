import { ChatIcon, PhoneIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const DropDownMenu = () => {
    return (
        <Accordion allowMultiple color={'#FCFCFC'} pb={10}>
            <AccordionItem>
                <Text>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
Cinemas
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Text>
                <AccordionPanel p={0}>
                    <Text size={'md'} textAlign={'left'} p={'14px 24px'} >Warsaw</Text>
                    <Text size={'md'} textAlign={'left'} p={'14px 24px'} >Kraków</Text>
                    <Text size={'md'} textAlign={'left'} p={'14px 24px'} >Łódź</Text>
                    <Text size={'md'} textAlign={'left'} p={'14px 24px'} >Wrocław</Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <Text>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
Contact
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Text>
                <AccordionPanel p={0}>
                    <VStack mb={8}>

                        <HStack wrap={'nowrap'}>
                            <Box alignSelf={'flex-start'} pt={6}>  <ChatIcon color={'#F4C600'} width={6} height={6}/></Box>

                            <Box ps={10} pe={12} flexGrow={1} display={'flex'} flexDirection={'column'} alignSelf={'flex-start'} pt={6} >
                                <Text  textAlign={'left'} size={'sm'}>If you have any questions, send us a message. We will get back to you as soon as possible.</Text>
                                <Button  background={'none'} color={'#FCFCFC'} border={'1px solid #EABE00'} mt={6}>Message us</Button>     
                            </Box>
                        </HStack>

                        <HStack  wrap={'nowrap'} mt={0} mb={8}>
                            <Box alignSelf={'flex-start'} pt={6}  >  <PhoneIcon color={'#F4C600'} width={6} height={6}/></Box>

                            <Box mb={6} ps={10} pe={12} flexGrow={1} display={'flex'} flexDirection={'column'} alignSelf={'flex-start'} pt={6} >
                                <Text  textAlign={'left'} size={'sm'}>We are available on the phone from 8 a.m to 6 p.m. We are more than happy to help you.</Text>
                                <Button  background={'none'} color={'#FCFCFC'} border={'1px solid #EABE00'} mt={6}>Call us</Button>     
                            </Box >
                        </HStack>

                    </VStack>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Text>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
Information
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Text>
                <AccordionPanel p={0}>
                    <VStack pb={8} alignItems={'flex-start'}>
                        <Text pt={6} color={'#F4C600'} size={'2xl'}>see.it</Text>
                        <Text pt={4} textAlign={'left'} size={'sm'} pe={'95px'}>See.it is an innovative cinema with impeccable service,  brand new crispy seats, and plenty of snacks to choose from. Our cinemas are located in all major Polish cities and we are branching out to the small towns asw ell.</Text>
                        <Link pt={6}>Privacy Policy</Link>
                        <Link pt={4}>About Us</Link>
                    </VStack>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <Text>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
Social media
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Text>
                <AccordionPanel p={0}>
                    <Box ms={6} mt={6} >
                        <Text width={'100%'} mb={6}   textAlign={'left'} size={'sm'}>Follow us</Text>
                        <Box mb={5} width={'100%'} display={'flex'} alignItems={'center'} alignContent={'center'}> 
                            <Icon as={ImFacebook} background={'#4460A0'} w={6} h={6} me={4}/> 
                            <Text textAlign={'left'} size={'sm'}>Facebook</Text>

                        </Box>
                        <Box mt={5} mb={8}  width={'100%'} display={'flex'} alignItems={'center'} alignContent={'center'}> 
                            <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={4}/> 
                            <Text textAlign={'left'} size={'sm'}>Instagram</Text>

                        </Box>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
