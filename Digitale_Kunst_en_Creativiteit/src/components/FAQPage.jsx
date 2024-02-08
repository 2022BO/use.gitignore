import React from 'react';
import { Box, Heading, Text, VStack, Image, UnorderedList, ListItem, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from './Footer';
import styles from '../pages/StylePage';
import Header from './Header';

const FAQPage = () => {
  return (
    <div>
       <Header/>
      <Box style={styles.pageContainer}>
        <Box style={styles.container}>
          <Heading as="h1" mb="4" fontSize="2xl">
            FAQ - Digitale Kunst en Creativiteit
          </Heading>

          {/* Add FAQ items below */}
          <VStack align="start" spacing={4} mb={8}>
            <Box w="100%">
              <Heading as="h2" fontSize="lg">
                Wat is het doel van deze website?
              </Heading>
              <Text>
                Ons doel is om digitale kunstenaars en creatieve geesten te verbinden, inspireren en ondersteunen door middel van interviews, tutorials en online kunsttentoonstellingen.
              </Text>
            </Box>

            <Box w="100%">
              <Heading as="h2" fontSize="lg">
                Hoe kan ik deelnemen aan een online kunsttentoonstelling?
              </Heading>
              <Text>
                Om deel te nemen, bezoek onze 'Deel je Werk' pagina en volg de instructies om je digitale kunstwerk in te zenden. We selecteren regelmatig werken voor tentoonstellingen.
              </Text>
            </Box>
            <Box w="100%">
    <Heading as="h2" fontSize="lg">
      Wat zijn de vereisten voor deelname aan een tentoonstelling?
    </Heading>
    <Text>
      Om deel te nemen aan een tentoonstelling, moet je een geregistreerde gebruiker zijn en voldoen aan de specifieke criteria vermeld op onze 'Deel je Werk' pagina.
    </Text>
  </Box>

  <Box w="100%">
    <Heading as="h2" fontSize="lg">
      Hoe lang duurt het voordat mijn ingezonden werk wordt beoordeeld?
    </Heading>
    <Text>
      De beoordelingstijd varieert, maar we streven ernaar om alle ingezonden werken zo snel mogelijk te bekijken. Je ontvangt een melding zodra je werk is beoordeeld.
    </Text>
  </Box>
  <Box w="100%">
    <Heading as="h2" fontSize="lg">
      Kan ik meerdere werken tegelijk indienen?
    </Heading>
    <Text>
      Ja, je kunt meerdere werken indienen, maar we raden aan om elk werk afzonderlijk in te dienen voor een betere beoordeling en tentoonstellingskansen.
    </Text>
  </Box>

  <Box w="100%">
    <Heading as="h2" fontSize="lg">
      Zijn er kosten verbonden aan deelname aan tentoonstellingen?
    </Heading>
    <Text>
      Nee, deelname aan onze tentoonstellingen is gratis voor geregistreerde gebruikers. We geloven in het ondersteunen van de digitale kunstgemeenschap zonder extra kosten.
    </Text>
  </Box>

  <Box w="100%">
    <Heading as="h2" fontSize="lg">
      Hoe kan ik mijn accountgegevens bijwerken?
    </Heading>
    <Text>
      Je kunt je accountgegevens bijwerken door in te loggen op je account en naar de 'Accountinstellingen' pagina te gaan. Hier kun je je profielinformatie en wachtwoord bijwerken.
    </Text>
  </Box>

  <Box w="100%">
    <Heading as="h2" fontSize="lg">
      Kan ik mijn ingezonden werk later verwijderen?
    </Heading>
    <Text>
      Ja, je kunt je ingezonden werk verwijderen door naar de 'Mijn Werken' pagina te gaan en de optie 'Verwijderen' te selecteren naast het specifieke werk dat je wilt verwijderen.
    </Text>
    </Box>
    <Box w="100%">
  <Heading as="h2" fontSize="lg">
    Op welke sociale media is Digitale Kunst en Creativiteit actief?
  </Heading>
  <Text>
    Digitale Kunst en Creativiteit is actief op verschillende sociale mediaplatforms om de gemeenschap te betrekken en op de hoogte te blijven van nieuws, evenementen en inspirerende inhoud. Je kunt ons volgen op de volgende platforms:
  </Text>
  <VStack align="start" spacing={2} mt={4}>
    
    <Text>
    <Link href="https://www.facebook.com" isExternal>
    
    <IconButton
            borderRadius='full'
            colorScheme='facebook'
            aria-label='Facebook'
            icon={<FaFacebook />}
            size='lg'
            borderColor="white"
            border="2px"
          /> Klik om ons te volgen</Link>
    </Text>
    <Text>
    <Link href="https://www.instagram.com" isExternal>
    <IconButton
            borderRadius='full'
            colorScheme='pink'
            aria-label='Instagram'
            icon={<FaInstagram />}
            size='lg'
            borderColor="white"
            border="2px"
          /> Klik om ons te volgen</Link>
    </Text>
    <Text>
    <Link href="https://www.linkedin.com" isExternal>
    <IconButton
            borderRadius='full'
            colorScheme='linkedin'
            aria-label='LinkedIn'
            icon={<FaLinkedin />}
            size='lg'
            borderColor="white"
            border="2px"
          /> Klik om ons te volgen</Link>
    </Text>
    
    {/* Add more social media links as needed */}
  </VStack>

  </Box>
         
          </VStack>
         
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default FAQPage;
