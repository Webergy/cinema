import { SmallAddIcon } from '@chakra-ui/icons';
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Icon, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';

export const Navigations = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <Button position={'fixed'} padding={0} zIndex={999} right={6} bottom={12} background={'#F4C600'} w={14} h={14} borderRadius={'100%'} ref={btnRef} variantColor="teal" onClick={onOpen}>
                <SmallAddIcon w={10} h={10}/>
            </Button>
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
                        <SmallAddIcon w={10} h={10}  
                            transform={'rotate(45deg)'}
                        />
                    </DrawerCloseButton>
                </DrawerContent>
            </Drawer>
        </>

    );
};
