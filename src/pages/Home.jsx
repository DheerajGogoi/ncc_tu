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
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Link,
    Button,
    Flex,
    VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import sample from "../media/photos/sample.jpg"
import ano from "../media/photos/ano.jpg"
import Footer from '../components/Footer';
import { blog_list, notifications } from '../utils';

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
            <Box>
                <Box>
                    <Image src={sample} width="100%" />
                </Box>

                <Container maxW="1200px">
                    <SimpleGrid my="5" columns={[1, null, 2, null, 2]} gap="5">
                        <Box>
                            <Card width="100%">
                                <CardHeader bg="#d9edf7" color="#31708f">
                                    <Link href="/notifications">Notifications</Link>
                                </CardHeader>

                                <CardBody overflow={"hidden"}>
                                    <Box>
                                        <marquee direction="up" scrollamount="3">
                                            <UnorderedList>
                                                {
                                                    notifications.map((notif, idx) => {
                                                        if(idx < 5){
                                                            return <ListItem key={idx}>{notif.title} <Link color={"blue.500"} target="_black" href={notif.link}>(Click here)</Link></ListItem>
                                                        }
                                                    })
                                                }
                                            </UnorderedList>
                                        </marquee>
                                    </Box>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card width="100%">
                                <CardHeader bg="#d9edf7" color="#31708f">
                                    <Link href="/activities">What's New?</Link>
                                </CardHeader>

                                <CardBody>
                                    <Box>
                                        <UnorderedList>
                                            {
                                                blog_list.map((blog, idx) => {
                                                    if(idx < 4){
                                                        return <ListItem key={idx}>{blog.name} <Link color={"blue.500"} href={`/activities/${blog.id}`}>(Know More)</Link></ListItem>
                                                    }
                                                })
                                            }
                                        </UnorderedList>
                                    </Box>
                                </CardBody>
                            </Card>
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid my="10" columns={[1, null, 2, null, 2]} gap="5">
                        <Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="1.5rem">AIM OF NCC</Text>
                                <Text my="5">
                                    The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit.
                                </Text>

                                <Button variant="outline" colorScheme="blue">Read more</Button>
                            </Box>
                            <Box mt="10">
                                <Text fontWeight="bold" fontSize="1.5rem">PLEDGE</Text>
                                <Text my="5">
                                    We the cadets of the National Cadet Corps,<br />
                                    do solemnly pledge that we shall always uphold the unity of India.<br />
                                    We resolve to be disciplined and responsible citizens of our nation.<br />
                                    We shall undertake positive community service in the spirit of selflessness<br />
                                    and concern for our fellow beings.<br />
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <Card>
                                <CardBody>
                                    <Text fontWeight="bold" fontSize="2xl">Associate NCC Officer</Text>
                                    <HStack gap="7" mt="7">
                                        <Image src={ano} maxW="140px" alignSelf="flex-start" boxShadow="sm" borderRadius="5px" />
                                        <Flex flexDirection="column" alignSelf="flex-start" gap="3">
                                            <Text fontWeight="bold" fontSize="xl">Dr (Lt) Hitesh Sharma</Text>
                                            <Text fontSize="sm">
                                                Lieutenant General Gurbirpal Singh, AVSM, VSM was commissioned into The PARACHUTE REGIMENT in 1987. An alumnus of the National Defence Academy, Khadakvasla and the Indian Military Academy, Dehradun.
                                            </Text>

                                            <Button variant="outline" maxW="100px" size="sm" colorScheme="blue">Read more</Button>
                                        </Flex>
                                    </HStack>
                                </CardBody>
                            </Card>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            <Footer />
        </Box>
    )
}
