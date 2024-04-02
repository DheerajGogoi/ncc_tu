import React, { useEffect, useState } from 'react';
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
    IconButton,
    Button,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { blog_list } from '../utils';
import { ArrowBackIcon } from '@chakra-ui/icons';

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                    {tag}
                </Tag>
                );
            })}
        </HStack>
    );
};

export const BlogAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const ActivityDetails = () => {
    //hooks
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params);

    //value states
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const foundObject = blog_list.find(obj => obj.id === params.blog_id);
        console.log(foundObject);
        setActivity(foundObject);
    }, [])

    return (
        <Box>
            <Container maxW={'7xl'} p="12">
                <HStack>
                    <IconButton aria-label='Search database' icon={<ArrowBackIcon />} onClick={() => navigate(-1)} />
                    <Text fontSize="xl" fontWeight="bold">Activities</Text>
                </HStack>

                {
                    activity && <>
                        <Box my="10">
                            <BlogTags tags={activity.tags} />
                            <Text fontWeight="bold" fontSize="5xl">{activity.name}</Text>
                            <BlogAuthor name={activity.author} date={activity.dated} />
                            <Text
                                fontSize="lg"
                                mt="7"
                                textAlign="justify"
                                dangerouslySetInnerHTML={{ __html:activity.body }}
                            />
                            {
                                activity.link && <Button variant="solid" my="5" onClick={() => window.location.href = activity.link}>View Report</Button>
                            }
                        </Box>
                    </>
                }
            </Container>
        </Box>
    );
};

export default ActivityDetails;