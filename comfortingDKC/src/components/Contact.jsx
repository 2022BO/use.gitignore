import React from 'react';
import { Box, Text, Flex, ChakraProvider, VStack, Image, UnorderedList, ListItem, Heading, IconButton, Link } from '@chakra-ui/react';
import styles from '../pages/StylePage';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from './Footer';
import Header from './Header';

const InformationAndContactPage = () => {
  const contactGegevens = {
    bedrijfsnaam: "Digitale Kunst en Creativiteit",
    adres: "123 Hoofdstraat, Artvilla",
    email: "info@digitalekunstencreativiteit.nl",
    telefoon: "+31 12 345 6789",
  };

  return (
    <div>
        <Header/>
      <Box style={styles.pageContainer}>
        <Box style={styles.container}>
          <Heading as="h1" mb="4" fontSize="2xl">
            Informatie & Contact Pagina
          </Heading>
          <Box w={{ base: '20%', md: '30%' }} mb="4">
    <Image
      src="https://imgur.com/Tkt0x3R.jpg"
      alt="Twee vrouwen met witte ballen op hun hoofd"
      style={{
        width: '50%',
        objectFit: 'cover',
        borderRadius: '8px',
        border: '2px solid white',
        marginBottom: '16px',
      }}
    />
  </Box>
          <Text mb={4}>
            Op deze pagina kun je eenvoudig nieuwe cursussen toevoegen aan het Leren & Ontwikkelen in de GGZ-platform. Ontdek hier hoe je nieuwe cursussen kunt toevoegen en beheren op het platform voor Leren & Ontwikkelen in de GGZ. Leer hoe je eenvoudig relevante informatie invoert en je bijdrage levert aan een groeiende educatieve community!
          </Text>
          <Text mb={4}>
            Hier zijn de stappen om een cursus toe te voegen:
          </Text>
          <UnorderedList>
  <ListItem style={{ fontSize: '1em', fontWeight: 'bold' }}>
    Navigeer naar "Portfolio Aanmelden"
    <Text mb={2} style={{ fontWeight: 'normal', fontSize: 'inherit' }}>
      Klik op de knop "Portfolioformulier invullen" om te beginnen met het invoeren van gegevens voor je nieuwe kunstwerk.
    </Text>
  </ListItem>
  <ListItem style={{ fontSize: '1em', fontWeight: 'bold' }}>
    Vul de Portfolioformulier in
    <Text mb={2} style={{ fontWeight: 'normal', fontSize: 'inherit' }}>
      Voer de vereiste gegevens in, zoals titel, beschrijving, afmetingen, categorieën, artiestennaam en de verkoopprijs.
      Je kunt optionele velden ook invullen om meer details toe te voegen.
    </Text>
  </ListItem>
  <ListItem style={{ fontSize: '1em', fontWeight: 'bold' }}>
    Kies Categorieën"
    <Text mb={2} style={{ fontWeight: 'normal', fontSize: 'inherit' }}>
      Selecteer de relevante categorieën voor je inzending.
    </Text>
  </ListItem>
  <ListItem style={{ fontSize: '1em', fontWeight: 'bold' }}>
   Artiest informatie
    <Text mb={2} style={{ fontWeight: 'normal', fontSize: 'inherit' }}>
      Voer je artiestennaam in toe voor een persoonlijk touch.
    </Text>
  </ListItem>
  <ListItem style={{ fontSize: '1em', fontWeight: 'bold' }}>
    Bewaar je nieuwe inzending
    <Text mb={2} style={{ fontWeight: 'normal', fontSize: 'inherit' }}>
      Klik op "Opslaan" om je nieuwe inzending aan het platform toe te voegen.
    </Text>
  </ListItem>
  <ListItem style={{ fontSize: '1em', fontWeight: 'bold' }}>
    Bekijk je resultaat
    <Text mb={8} style={{ fontWeight: 'normal', fontSize: 'inherit' }}>
      Zodra opgeslagen, kun je de details van je nieuwe inzending bekijken op de hoofdpagina.
    </Text>
    <Text mb={8} fontStyle="italic" >
          Zodra je het portfolioformulier hebt ingevuld, nemen we zo snel mogelijk contact met je op om alle
          details met betrekking tot speciale wensen, prijs en om op website een inspirerende quote met je te bespreken.
        </Text>
        <ChakraProvider>
      <Text mb={5} fontFamily="'Pacifico', cursive" fontStyle="italic" fontSize="2xl" fontWeight="thin">
        {' '}
        We kijken ernaar uit om samen met jou aan je kunstreis te beginnen!
      </Text>
    </ChakraProvider>
  </ListItem>
</UnorderedList>
<Box w={{ base: '80%', md: '30%' }} mb={{ base: '4', md: '0' }}>
      <Image
        src="https://imgur.com/kGwrrwl.jpg"
        alt="Logo DK&C Teal"
        style={{
          width: '100%',
          maxWidth: '120px',  // Aanpassen naar gewenste breedte
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px',
          objectPosition: 'top',
        }}
      />
    </Box>
<Heading as="h2" mb="2" fontSize="lg">
            Contactgegevens:
          </Heading>
          <VStack spacing={2} align="flex-start" mb={4}>
            <Text>
              <strong>Bedrijfsnaam:</strong> {contactGegevens.bedrijfsnaam}
            </Text>
            <Text>
              <strong>Adres:</strong> {contactGegevens.adres}
            </Text>
            <Text>
              <strong>Email:</strong> {contactGegevens.email}
            </Text>
            <Text>
              <strong>Telefoon:</strong> {contactGegevens.telefoon}
            </Text>
          </VStack>
          <Flex
      flexDirection={{ base: 'row', md: 'row' }}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      alignItems="center"
      
    >
      <Link href="https://www.facebook.com" isExternal>
        <IconButton
          borderRadius='full'
          colorScheme='facebook'
          aria-label='Facebook'
          icon={<FaFacebook />}
          size='lg'
          borderColor="white"
          border="2px"
        />
      </Link>
      <Link href="https://www.instagram.com" isExternal>
        <IconButton
          borderRadius='full'
          colorScheme='pink'
          aria-label='Instagram'
          icon={<FaInstagram />}
          size='lg'
          borderColor="white"
          border="2px"
        />
      </Link>
      <Link href="https://www.linkedin.com" isExternal>
        <IconButton
          borderRadius='full'
          colorScheme='linkedin'
          aria-label='LinkedIn'
          icon={<FaLinkedin />}
          size='lg'
          borderColor="white"
          border="2px"
        />
      </Link>
    </Flex>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default InformationAndContactPage;