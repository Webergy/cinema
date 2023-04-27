import * as React from "react";
import {
    ChakraProvider,
    Box,
    Grid
} from "@chakra-ui/react";
import theme from "./components/theme";

import Page from "./Layout/Page";
import { Navigations } from "./Layout/Navigations";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box fontSize="xl" background={'#070707'}  w={'375px'} m={'0 auto'}>
            <Grid minH="100vh" pe={6} ps={6} >
                <Navigations/>
                <Page/>
            </Grid>
        </Box>
    </ChakraProvider>
);
