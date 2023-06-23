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
} from '@chakra-ui/react';
import { annual_reports } from '../utils';
import AReport from '../components/AReport';

const AnnualReport = () => {
    return (
        <Box>
            <Container maxW={'7xl'} p="10">
                <Text fontSize="xl" fontWeight="bold">Annual Reports</Text>
                <SimpleGrid gap="5" columns={[1, null, 3, null, 5]} my="10">
                    {
                        annual_reports.map((report, idx) => {
                            return <AReport key={idx} report={report} />
                        })
                    }
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default AnnualReport;