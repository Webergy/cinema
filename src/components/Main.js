import { Box, Button, FormControl, FormLabel, HStack, Image, InputGroup, InputRightElement, Text,Input, Link, VStack, Accordion, AccordionItem, AccordionIcon, AccordionPanel, AccordionButton, Icon, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton,  DrawerBody, DrawerFooter, DrawerHeader, Divider  } from '@chakra-ui/react';
import React from 'react';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img4 from '../images/image4.png';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChatIcon, CloseIcon, HamburgerIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { ImFacebook} from 'react-icons/im';
import { FaInstagramSquare} from 'react-icons/fa';

const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button position={'fixed'} padding={0} zIndex={999} right={6} bottom={12} background={'#F4C600'} w={14} h={14} borderRadius={'100%'} ref={btnRef} variantColor="teal" onClick={onOpen}>
                <HamburgerIcon w={8} h={8}/>
            </Button>
            <HStack >
                
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    size={'full'}
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent ps={'64px'} pe={'64px'} color={'#F4C600'} background={'#181C25'}>
                        <DrawerHeader ps={0} pe={0} pt={'118px'}>
                            <Text size={'lg'}>See.it</Text>
                            <Divider borderColor={'#F4C600'} pt={8} />
                        </DrawerHeader>

                        <DrawerBody ps={0} pe={0} >
                            <HStack mt={8} size='md'>
                                <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={4}/> 
                                <Text>Main</Text>
                            </HStack>

                            <HStack mt={8} size='md'>
                                <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={4}/> 
                                <Text>Repetitory</Text>
                            </HStack>

                            <HStack mt={8} size='md'>
                                <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={4}/> 
                                <Text>Events</Text>
                            </HStack>

                            <HStack mt={8} size='md'>
                                <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={4}/> 
                                <Text>Offers</Text>
                            </HStack>

                            <HStack mt={8} size='md'>
                                <Icon as={FaInstagramSquare} background={'#6A45BE'} w={6} h={6} me={4}/> 
                                <Text>Contact</Text>
                            </HStack>
                            
                        </DrawerBody>

                        <DrawerFooter>
                      
                        </DrawerFooter>
                        <DrawerCloseButton
                            color={'#070707'}
                            borderRadius={'100%'}
                            background={'#F4C600'}
                            position={'fixed'}
                            top={'unset'}
                            right={'50%'}
                            transform={'translate(50%,0%)'}
                            bottom={12} w={14} h={14}>
                            <CloseIcon w={8} h={8}/>
                        </DrawerCloseButton>
                    </DrawerContent>
                </Drawer>
                <Box me={6} flexGrow={1} pt={1} w={'100%'} h={'100%'}>
                    <Image
                        src={img1} alt='poster' 
                        objectFit={'cover'}
                    />
                </Box>
                <Box color={"#FCFCFC"} pt={1} w={'100%'} h={'100%'}>
                    <Text fontSize={'20px'} lineHeight={'24px'} textAlign={'left'} >Avatar: The Way of Water</Text>
                    <Text fontSize={'13px'} lineHeight={'18px'} textAlign={'left'}>Jake Sully lives with his family and tries to...</Text>
                </Box>
            </HStack>
            <Text color={'#F4C600'}  mt={6} size={'2xl'} textAlign={'left'} mb={2}>Now showing</Text>
    
            <Carousel infiniteLoop >
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Button variant={'base'} fontSize={'17px'} >Check</Button>

                    </Box>
   
                    <Image
                        src={img2} alt='slider' 
                        objectFit={'cover'}
                    />
        
                </Box>
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Button variant={'base'} fontSize={'17px'} >Check</Button>

                    </Box>
   
                    <Image
                        src={img2} alt='slider' 
                        objectFit={'cover'}
                    />
        
                </Box>
                <Box w={'100%'} h={'100%'} flexGrow={1} position={'relative'}> 
                    <Box position={'absolute'} bottom={'16px'} left={'16px'}>
                        <Button variant={'base'} fontSize={'17px'} >Check</Button>

                    </Box>
   
                    <Image
                        src={img2} alt='slider' 
                        objectFit={'cover'}
                    />
        
                </Box>
            </Carousel>
  
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

            <Text color={'#F4C600'}  mt={'18px'} mb={2} size={'xl'} textAlign={'left'}>Superhits</Text>

            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
 
            <Text color={'#F4C600'}  mt={8} mb={2} size={'xl'} textAlign={'left'}>Premiers</Text>

            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>

            <Link color={'#F4C600'} textAlign={'left'} mt={8} mb={8} >See our full repetitory</Link>
  
            <Text color={'#F4C600'}  mb={2} size={'xl'} textAlign={'left'}>Events</Text>

            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>
            <HStack mt={6} alignContent={'space-around'} alignItems={'center'}>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img3} alt='poster' 
                        objectFit={'cover'}
                    />
    
                    <Text size={'sm'} textAlign={'left'} mt={2}>Avatar: The Way of Water</Text>
                </Box>
                <Box w={'100%'} h={'100%'} color={'white'} > 
                    <Image
                        src={img4} alt='poster' 
                        objectFit={'cover'}
                    />
                    <Text size={'sm'} textAlign={'left'} mt={2}>Puss in Boots</Text>
                </Box>
            </HStack>

            <Link color={'#F4C600'} textAlign={'left'} mt={8} mb={8} >See our full repetitory</Link>

            <VStack bg={'#181C25'} mb={8}>
                <HStack width={'100%'} alignItems={'center'} alignContent={'center'}>
                    <Text ps={4} pt={'30px'} pb={'30px'} flexGrow={1} size={'md'} textAlign={'left'} color={'#FCFCFC'}>Family tickets</Text>
                    <Box >
                        <Button variant={'base'} fontSize={'17px'} me={4} >Check</Button>
                    </Box>
                </HStack> 

                <HStack width={'100%'} alignItems={'center'} alignContent={'center'}>
                    <Text ps={4} pt={'30px'} pb={'30px'} flexGrow={1} size={'md'} textAlign={'left'} color={'#FCFCFC'}>Family tickets</Text>
                    <Box >
                        <Button variant={'base'} fontSize={'17px'} me={4} >Check</Button>
                    </Box>
                </HStack> 
      
                <HStack width={'100%'} alignItems={'center'} alignContent={'center'}>
                    <Text ps={4} pt={'30px'} pb={'30px'} flexGrow={1} size={'md'} textAlign={'left'} color={'#FCFCFC'}>Family tickets</Text>
                    <Box >
                        <Button variant={'base'} fontSize={'17px'} me={4} >Check</Button>
                    </Box>
                </HStack> 

            </VStack>

            <Accordion allowMultiple color={'#FCFCFC'}>
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

        </>
    );
};

export default Main;