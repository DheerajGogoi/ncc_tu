import React from 'react'
import {
    Box,
    Container,
    Text,
    Grid,
    GridItem,
    SimpleGrid,
    useMediaQuery 
} from "@chakra-ui/react";
import { achievements } from '../utils';
import Achievement from '../components/Achievement';
import Footer from '../components/Footer';

const Achievements = () => {
    //hooks
    const [isLessThan600] = useMediaQuery('(max-width: 600px)')

    return (
        <Box>
            <Container maxW={'7xl'} p={isLessThan600 ? '5' : "12"}>
                <Text fontSize="xl" fontWeight="bold">Achievements by NCC Tezpur University 🎉</Text>

                <Box mt="10">
                    <SimpleGrid columns={[1, null, 2]} spacing={5}>
                        {
                            achievements.map((ach, idx) => {
                                return <Achievement key={idx} achievement={ach} />
                            })
                        }
                    </SimpleGrid>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
}

export default Achievements;