import { ReactNode } from 'react';
import {
    Box,
    Container,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import tu_logo from "../media/logos/tu_logo.png"
import ncc_logo from "../media/logos/ncc_logo.png"

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Box>
                            <HStack>
                                <Image width="30px" src={ncc_logo} />
                                <Image width="40px" src={tu_logo} />
                                <Text>National Cadet Corps, Tezpur University</Text>
                            </HStack>
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2023 NCC TU. All rights reserved
                        </Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Downloads</ListHeader>
                        <Link href={'#'}>Cadets of Tezpur University</Link>
                        <Link href={'#'}>Cadet Handbook (Common Subject)</Link>
                        <Link href={'#'}>Cadet Handbook (Special Subject)</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Contact Us</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link target="_blank" href={'https://www.instagram.com/ncctezpuruniversity/'}>Instagram</Link>
                        <Link target="_blank" href={'https://www.youtube.com/@NCCTezpurUniversity/featured'}>Youtube</Link>
                        <Link href={'#'}>Facebook</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}