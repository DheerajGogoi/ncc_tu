import React, { useState } from 'react';
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Container, Text, Center } from '@chakra-ui/react';

const images = [
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Image 1',
    },
    {
      src: 'https://via.placeholder.com/600',
      alt: 'Image 2',
    },
    {
      src: 'https://via.placeholder.com/600',
      alt: 'Image 2',
    },
    {
      src: 'https://via.placeholder.com/600',
      alt: 'Image 2',
    },
    {
      src: 'https://via.placeholder.com/600',
      alt: 'Image 2',
    },
    {
      src: 'https://via.placeholder.com/600',
      alt: 'Image 2',
    },
    {
      src: 'https://via.placeholder.com/600',
      alt: 'Image 2',
    },
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <Box>
            <Container maxW={'7xl'} p="10">
                    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openImageModal(image)}
                                cursor="pointer"
                            />
                        ))}
                    </Grid>

                {selectedImage && (
                    <Modal isOpen={true} onClose={closeImageModal} size="4xl">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody p="10">
                                <Center>
                                    <Image src={selectedImage.src} alt={selectedImage.alt} />
                                </Center>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </Container>
        </Box>
    );
};

export default ImageGallery;
