import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <Box textAlign="center" py={10} px={6}>
            <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                404
            </Heading>
            <Heading as="h4" size="md" mb={2}>
                Page Not Found
            </Heading>
            <Text color={'gray.500'}>
                Page you requested, does not exist.
            </Text>

            <Button colorScheme="blue" mt="10" onClick={() => navigate(-1)}>Go Back</Button>
        </Box>
    );
}