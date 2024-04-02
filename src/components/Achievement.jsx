import React from 'react';
import {
    Box,
    Avatar,
    VStack,
    Text,
    ButtonGroup,
    HStack,
    IconButton 
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AttachmentIcon } from "@chakra-ui/icons"

const Achievement = ({ achievement }) => {
    //functions
    const handleSocial = (url) => {
        window.open(url, "_blank")
    }

    return (
        <Box
            // height='80px'
            p="5"
            borderColor="#ebebeb"
            borderWidth="1px"
            transition="0.3s ease"
            _hover={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Add slight shadow on hover
                transform: "translateY(-4px)" // Elevate the box on hover
            }}
        >
            <VStack gap={5}>
                <Avatar
                    size='lg'
                    src={achievement.photo ? achievement.photo : null}
                />
                <VStack my="-2">
                    <Text>{achievement.rank}</Text>
                    <Text my="-3" fontWeight="bolder" fontSize="xl">{achievement.name}</Text>
                </VStack>
                <VStack my="3" gap="1">
                    {
                        achievement.events.map((event) => {
                            return <Text textDecoration="underline">{event.name} {event.year}</Text>
                        })
                    }
                </VStack>
                <Text textAlign="center">{achievement.description}</Text>
                <HStack>
                    <IconButton
                        isRound={true}
                        colorScheme='twitter'
                        aria-label='Search database'
                        icon={<AttachmentIcon />}
                        onClick={() => handleSocial(achievement.link)}
                    />
                    {
                        achievement.socials.map((social, idx) => {
                            return <IconButton
                            key={idx}
                            isRound={true}
                            colorScheme='twitter'
                            aria-label='Search database'
                            onClick={() => handleSocial(social.link)}
                            icon={social.name === "Instagram" ? <FaInstagram /> : <FaFacebook />} />
                        })
                    }
                </HStack>
            </VStack>
        </Box>
    )
}

export default Achievement;