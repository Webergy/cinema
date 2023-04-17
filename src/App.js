import * as React from "react";
import {
    ChakraProvider,
    Box,
    Grid
} from "@chakra-ui/react";
import Header from "./components/Header";
import theme from "./components/theme";
import Main from "./components/Main";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl" background={'#070707'}  w={'376px'} m={'0 auto'}>
            <Grid minH="100vh" pe={6} ps={6} >
                <Header/>
                <Main/>
        
            </Grid>
        </Box>
    </ChakraProvider>
);
