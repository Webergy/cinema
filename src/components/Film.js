import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
export const Film = () => {
    const [readMore,setReadMore]=useState(false);

    const short = <><Text noOfLines={6} mt={4}  size={'sm'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium eaque tenetur cupiditate enim quisquam nobis ullam, deserunt molestias unde, qui laborum incidunt, assumenda corporis odio optio voluptatem itaque repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium eaque tenetur cupiditate enim quisquam nobis ullam, deserunt molestias unde, qui laborum incidunt, assumenda corporis odio optio voluptatem itaque repudiandae. </Text><Text textDecoration={'underline'} onClick={()=>setReadMore(prev=> !prev)}>Read more</Text></>;

    const long = <Text mt={4}  size={'sm'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium eaque tenetur cupiditate enim quisquam nobis ullam, deserunt molestias unde, qui laborum incidunt, assumenda corporis odio optio voluptatem itaque repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium eaque tenetur cupiditate enim quisquam nobis ullam, deserunt molestias unde, qui laborum incidunt, assumenda corporis odio optio voluptatem itaque repudiandae. </Text>; 

    return (
        <Box  mt={6} mb={10}>
            <Text mb={2} size={'md'}>Minions</Text>
            
            <Box w={'100%'} h={'100%'}> 

                <Image
                    src={img2} alt='slider' 
                    objectFit={'cover'}
                />

            </Box>

            <HStack mt={6} justifyContent={'space-between'} alignItems={'flex-start'}>
                <Box flexBasis={'40%'}>
                    <Box w={'100%'} h={'100%'} color={'white'} >
                
                        <Image
                            src={img3} alt='poster' 
                            objectFit={'cover'}
                        />
                    </Box>
                    <Text mt={2} textAlign={'right'} size={'sm-bold'}>Premiere</Text>
                    <Text mt={2} textAlign={'right'} size={'sm'}>16 June, 2015</Text>
                    <Text mt={2} textAlign={'right'} size={'sm-bold'}>Production</Text>
                    <Text mt={2} textAlign={'right'} size={'sm'}>USA</Text>
                    <Text mt={2} textAlign={'right'} size={'sm-bold'}>Director</Text>
                    <Text mt={2} textAlign={'right'} size={'sm'}>James Cameron</Text>
                </Box>
                <Box flexBasis={'55%'}>
                    <Text mb={2} size={'md'}>Minions</Text>
                    <Text size={'sm'}>Humorous  Comedy</Text>
                    <HStack>
                        <Text size={'sm'}>14 years</Text>
                        <Text size={'sm'}>80 min</Text>
                        <Text size={'sm'}>2D, subtitles</Text>
                    </HStack>
                    {
                        readMore?long:short
                    }
                    
                </Box>
            </HStack>

        </Box>
    );
};
