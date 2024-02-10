import React from 'react';
import { Box, Heading, Flex, Spacer, HStack, Image } from '@chakra-ui/react';



const Header = () => {
  return (
  <Box bg="#176B87" p={4} color="#EEF5FF">
  <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }} textAlign="center" justifyContent="center">
   

    <Heading as="h1" size="lg" my={{ base: '4', md: '0' }} mx={{ base: '0', md: '4' }} textAlign={{ base: 'center', md: 'left' }}>
      Digitale Kunst & Creativiteit
    </Heading>

    <Box w={{ base: '80%', md: '30%' }} mb={{ base: '4', md: '0' }}>
      <Image
        src="https://imgur.com/yJaLPA0.jpg"
        alt="Logo DK&C"
        style={{
          width: '100%',
          maxWidth: '150px',  // Aanpassen naar gewenste breedte
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px',
          objectPosition: 'top',
          marginLeft: 'auto',
          marginRight: 'auto', // Centreren van de afbeelding
        }}
      />
    </Box>
  </Flex>
</Box>








  );
};

export default Header;