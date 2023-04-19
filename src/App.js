import * as React from "react";
import {
    ChakraProvider,
    Box,
    Grid
} from "@chakra-ui/react";
import theme from "./components/theme";

import Header from "./Layout/Header";
import Page from "./Layout/Page";
import { Navigations } from "./Layout/Navigations";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl" background={'#070707'}  w={'376px'} m={'0 auto'}>
            <Grid minH="100vh" pe={6} ps={6} >
                <Navigations/>
                <Header/>
                <Page/>
            </Grid>
        </Box>
    </ChakraProvider>
);
