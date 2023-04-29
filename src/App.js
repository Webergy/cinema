import * as React from "react";
import {
    ChakraProvider,
    Box,
    SimpleGrid
} from "@chakra-ui/react";
import theme from "./components/theme";

import Page from "./Layout/Page";
import { Navigations } from "./Layout/Navigations";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box background={'#070707'}  w={'375px'} m={'0 auto'}>
            <SimpleGrid minH="100vh" pe={6} ps={6} >
                <Navigations/>
                <Page/>
            </SimpleGrid>
        </Box>
    </ChakraProvider>
);
