import {
    Box,
    Container,
    HStack,
    SimpleGrid,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    IconButton,
    useBreakpointValue,
    Stack,
    Image,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Home() {
    

    return (
        <Box>
            <Box padding="5">
                <Container maxW="1100px">
                    <Text>National Cadet Corps, Tezpur University</Text>
                    <HStack gap="4">
                        <Box>
                            <Image src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" />
                        </Box>
                        <Box width="500px" alignSelf="flex-start">
                            <Card width="100%">
                                <CardHeader bg="#d9edf7" color="#31708f">
                                    <Text>What's New</Text>
                                </CardHeader>

                                <CardBody>
                                    <Box>
                                        
                                    </Box>
                                </CardBody>
                            </Card>
                        </Box>
                    </HStack>
                </Container>
            </Box>
        </Box>
    )
}
