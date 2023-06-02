import * as React from "react";
import {
    ChakraProvider,
    Box,
    SimpleGrid
} from "@chakra-ui/react";
import theme from "./components/theme";

import Page from "./Layout/Page";
import { Navigations } from "./Layout/Navigations";
import { AuthProvider } from "./context/AuthContext";

export const App = () => (
    <ChakraProvider theme={theme}>
        <AuthProvider>
            <Box background={'#070707'}  w={'375px'} m={'0 auto'}>
                <SimpleGrid minH="100vh" pe={6} ps={6} >
                    <Navigations/>
                    <Page/>
                </SimpleGrid>
            </Box>
        </AuthProvider>
    </ChakraProvider>
);
