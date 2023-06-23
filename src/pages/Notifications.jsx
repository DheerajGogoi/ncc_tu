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
    SimpleGrid,
    Center,
    useMediaQuery,
} from '@chakra-ui/react';
import { notifications } from '../utils';

const Notifications = () => {
    //hooks
    const [isSmallerThan765] = useMediaQuery('(max-width: 765px)');

    return (
        <Box>
            <Container maxW={'2xl'} p={isSmallerThan765 ? "5" : "10"}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center" mb="10">Archives by NCC Tezpur University</Text>

                <Box>
                    {
                        notifications.map((notif, idx) => (
                            <Box my="5">
                                <Text fontStyle="italic">{notif.title}</Text>
                                <Text>({notif.date.toLocaleDateString()}) <Link target="_blank" href={notif.link} color="blue.500">Learn More</Link></Text>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Notifications;