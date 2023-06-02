import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const TicketsOffer = () => {
    return (
    
        <VStack bg={'#181C25'} mb={8}>
            <HStack width={'100%'} alignItems={'center'} alignContent={'center'}>
                <Text ps={4} pt={'30px'} pb={'30px'} flexGrow={1} size={'md'} textAlign={'left'} color={'#FCFCFC'}>Family tickets</Text>
                <Box >
                    <Button variant={'base'} fontSize={'17px'} me={4} >Check</Button>
                </Box>
            </HStack> 

            <HStack width={'100%'} alignItems={'center'} alignContent={'center'}>
                <Text ps={4} pt={'30px'} pb={'30px'} flexGrow={1} size={'md'} textAlign={'left'} color={'#FCFCFC'}>Group tickets</Text>
                <Box >
                    <Button variant={'base'} fontSize={'17px'} me={4} >Check</Button>
                </Box>
            </HStack> 

            <HStack width={'100%'} alignItems={'center'} alignContent={'center'}>
                <Text ps={4} pt={'30px'} pb={'30px'} flexGrow={1} size={'md'} textAlign={'left'} color={'#FCFCFC'}>Members tickets</Text>
                <Box >
                    <Button variant={'base'} fontSize={'17px'} me={4} >Check</Button>
                </Box>
            </HStack> 

        </VStack>
    );
};
