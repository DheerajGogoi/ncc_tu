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
    useMediaQuery
} from '@chakra-ui/react';
import { annual_reports } from '../utils';
import AReport from '../components/AReport';
import ncc_logo from "../media/logos/ncc_logo.png"
import tu_logo from "../media/logos/tu_logo.png"

const About = () => {
    //hooks
    const [isSmallerThan765] = useMediaQuery('(max-width: 765px)');

    return (
        <Box>
            <Container maxW={'7xl'} p={isSmallerThan765 ? "5" : "10"}>
                <HStack justifyContent={isSmallerThan765 ? "center" : "space-between"}>
                    <Image src={ncc_logo} maxH="187px" display={isSmallerThan765 ? "none" : "block"} />
                    <Box>
                        <Text fontSize={isSmallerThan765 ? "2xl" : "4xl"} fontWeight="bold" textAlign="center">National Cadet Corps</Text>
                        <Text fontSize={isSmallerThan765 ? "2xl" : "4xl"} fontWeight="bold" textAlign="center">Tezpur University</Text>
                    </Box>
                    <Image float="right" src={tu_logo} maxH="187px" display={isSmallerThan765 ? "none" : "block"} />
                </HStack>

                <Box my="10">
                    <Text textAlign="justify">
                        The National Cadet Corps is the Indian military cadet corps with its Headquarters at New Delhi, Delhi, India. It is open to school and college students on voluntary basis. National Cadet Corps is a Tri-Services Organization, comprising the Army, Navy and Air Force, engaged in grooming the youth of the country into disciplined and patriotic citizens. The National Cadet Corps in India is a voluntary organization which recruits cadets from high schools, colleges and universities all over India. The Cadets are given basic military training in small arms and parades. The officers and cadets have no liability for active military service once they complete their course but are given preference over normal candidates during selections based on the achievements in the corps.
                    </Text>
                </Box>

                <Box my="10">
                    <Text fontWeight="bold" fontSize="2xl" mb="3">
                        About NCC TU
                    </Text>
                    <Text textAlign="justify">
                        NCC Tezpur University was established on September 1, 2011 under 5 Assam Bn Tezpur C/O HQ 4 Corps and NCC NER Directorate, Shillong. Tezpur University NCC Unit has been allotted 60 vacancies and at present 60 cadets(SD and SW)s are getting NCC training in University campus, NCC Camps and other sites like police firing range etc. Tezpur University has successfully organized two national integration camps in university campus during 2013 and 2014. Uniform and NCC kit to cadets were provided by 5 Assam Bn.
                    </Text>
                </Box>

                <Box my="10">
                    <Text fontWeight="bold" fontSize="2xl" mb="3">
                        Administration
                    </Text>
                    <Text textAlign="justify">
                        Presently NCC office is available in room no. 210 in the first floor of academic building, Tezpur University regular classes of NCC are conducted. Theory classes have been conducting at department of education and practical classes are conducting at university playground. For practical classes instructors are provided by 5 Assam Bn.
                    </Text>
                </Box>

                <Box my="10">
                    <Text fontWeight="bold" fontSize="2xl" mb="3">
                        NCC ANO
                    </Text>
                    <Text>
                        NCC TU Unit is led by Dr. Hitesh Sharma, Assoicate NCC Officer and Assistant Professor, Department of Education, Tezpur University. Dr. Hitesh Sharma is a NCC C certificate holder with Grade B from 9 MP Battalion NCC Indore (Madhya Pradesh). He has attended three CATC and one Army attachment camp during his student life.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default About;