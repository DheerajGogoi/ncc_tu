import {
    Button,
    Card, CardBody, CardFooter, CardHeader, Text
} from '@chakra-ui/react'
import React from 'react';

export default function AReport({ report }) {
    return (
        <Card>
            <CardBody>
                <Text fontWeight="bold">{report.year}</Text>
                <Button mt="5" variant="solid" onClick={() => window.open(report.href, '_blank', 'noreferrer')}>View Report</Button>
            </CardBody>
        </Card>
    )
}
