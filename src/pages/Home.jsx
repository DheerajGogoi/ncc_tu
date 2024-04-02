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
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";

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
    //hooks
    const navigate = useNavigate();

    //functions
    const ano_read_more = () => {
        window.open("https://www.tezu.ernet.in/dedu/faculty/doc/Dr_Hitesh_Sharma.pdf", "_blank");
    }

    return (
        <Box>
            <Box>
                <Box>
                    {/* <Image src={sample} width="100%" /> */}
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel>
                            <img src={sample} alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src={sample} alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src={sample} alt="..." />
                        </Carousel>
                    </div>
                </Box>

                <Container maxW="1200px">
                    <SimpleGrid my="5" columns={[1, null, 2, null, 2]} gap="5">
                        <Box>
                            <Card width="100%">
                                <CardHeader bg="#d9edf7" color="#31708f">
                                    <Link href="/ncc/react/notifications">Notifications</Link>
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
                                    <Link href="/ncc/react/activities">What's New?</Link>
                                </CardHeader>

                                <CardBody>
                                    <Box>
                                        <UnorderedList>
                                            {
                                                blog_list.map((blog, idx) => {
                                                    if(idx < 4){
                                                        return <ListItem key={idx}>{blog.name} <Link color={"blue.500"} href={`/ncc/react/activities/${blog.id}`}>(Know More)</Link></ListItem>
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

                                <Button variant="outline" colorScheme="blue" onClick={() => navigate("/ncc/react/about")}>Read more</Button>
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
                                                Completed NCC Direct Commission Course [D-35] with Grade 'A' from NCC OTA, Kamptee. Commissioned in Rank of Lieutenant in National Cadet Corps.
                                            </Text>

                                            <Button variant="outline" maxW="100px" size="sm" colorScheme="blue" onClick={ano_read_more}>Read more</Button>
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
