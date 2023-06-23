import {
    Box,
    Center,
    Container,
    Flex,
    HStack,
    SimpleGrid,
    Text
} from '@chakra-ui/react'
import React from 'react'
import PeopleCard from '../components/PeopleCard';
import { people_list } from '../utils';

export default function People() {
    return (
        <Box>
            <Container maxW="1100px">
                <Box py="10">
                    <Box my="10">
                        <Text textAlign="center" fontWeight="bold" fontSize="3xl" mb="5" color="gray.600">Associate NCC Officer</Text>
                        {
                            people_list.map((person, idx) => {
                                if(person.designation === "Associate NCC Officer"){
                                    return (
                                        <Center key={idx}>
                                            <PeopleCard 
                                                person={person}    
                                            />
                                        </Center>
                                    )
                                }
                            })
                        }
                    </Box>
                    
                    <Box my="20">
                        <Text textAlign="center" fontWeight="bold" fontSize="3xl" mb="5" color="gray.600">Rank Holders</Text>
                        <Center>
                            <SimpleGrid columns={[1, null, 2, null, 3]} gap="10">
                            {
                                people_list.sort((a, b) => a.no - b.no).map((person, idx) => {
                                    if(person.designation !== "Associate NCC Officer"){
                                        return (
                                            <PeopleCard
                                                key={idx}
                                                person={person}    
                                            />
                                        )
                                    }
                                })
                            }
                            </SimpleGrid>
                        </Center>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
