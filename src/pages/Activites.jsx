import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';
import Activity from '../components/Activity';
import { blog_list } from '../utils';

const Activities = () => {
    return (
        <Box>
            <Container maxW={'7xl'} p="12">
                <Text fontSize="xl" fontWeight="bold">Stories by NCC Tezpur University</Text>

                <Box mt="10">
                    {
                        blog_list.map((blog, idx) => {
                            return (
                                <Activity
                                    key={idx}
                                    blog={blog}
                                />
                            )
                        })
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Activities;