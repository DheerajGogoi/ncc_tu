import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function PeopleCard({ person }) {
    return (
        <Box py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Avatar
                    size={'xl'}
                    src={person.image}
                    alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                />
                <Text fontWeight="bold" fontSize={'xl'}>
                    {person.name}
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} mb={4}>
                    {person.designation}
                </Text>
                <Text
                    textAlign={'justify'}
                    fontSize="sm"
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                >
                    {person.about}
                </Text>
    
                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}
                        onClick={(e) => {
                            window.location.href = `tel:+91${person.phone}`;
                            e.preventDefault();
                        }}
                    >
                        Contact
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}
                        onClick={(e) => {
                            window.location.href = `mailto:${person.email}`;
                            e.preventDefault();
                        }}
                    >
                        Mail
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
  }