import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {ChakraProvider, Box, Button, Card, CardHeader, CardBody, CardFooter, Heading, FormControl, FormLabel, FormHelperText, Textarea, Text, Input, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton, Divider } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Footer from '../components/Footer';
import Header from '../components/Header';


const AddWork = ({ handleUpdateportfolio }) => {
  const navigate = useNavigate();
  if (!handleUpdateportfolio) {
    return null; 
  }
  const toast = useToast();
  const styles = {
    modalContent: {
      background: 'linear-gradient(to bottom right, #EEF5FF, #86B6F6)',
      color: '#176B87',
      borderRadius: '8px',
    },
  };
  const [portfolio, setportfolio] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [workData, setWorkData] = useState({
    title: "",
    description: "",
    image: "",
    startTime: "",
    endTime: "",
    email: "",
    phone: "",
    message: "",
    artist: { name: "", image: "" },
    categories: [],
  });

  const handleShowNotification = (message, status) => {
    toast({
      title: message,
      status: status, // 'success' or 'error'
      duration: 5000,
      isClosable: true,
    });
  };
  

  const handleSaveChanges = async () => {
    try {
      let newWork;

      if (typeof handleUpdateportfolio === 'function') {// Haal gegevens op van de server
        const response = await fetch(`http://localhost:3000/portfolio`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(workData),
        });

        if (response.ok) {
          // Parse de response wanneer deze succesvol is
          newWork = await response.json();
          handleUpdateportfolio(newWork);

          setportfolio((prevportfolio) => [...prevportfolio, newWork]);

          setWorkData({
            title: "",
            image: "",
            description: "",
            startTime: "",
            endTime: "",
            artist: { name: "", image: "" },
            categories: [],
          });

          setTimeout(() => {
            setFormOpen(false);
          }, 500);

          // Toon een succes-toast
          toast({
            title: "portfolio opgeslagen",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

           // Navigeer terug naar WorkPage.jsx
           navigate('/');     
        } else {
          console.error('Failed to add work. Server returned:', response);

          // Toon een fout-toast
          handleShowNotification("Fout bij opslaan portfolio", "error");
          toast({
            title: "Fout bij opslaan portfolio",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.error('Error adding work:', error);
      const errorMessage = error.message || 'Oops! Er ging iets mis.';

      // Toon een fout-toast
      handleShowNotification(errorMessage, "error");
      toast({
        title: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const handleNavigation = () => {
    navigate('/add-work-form');
  };

  return (
    <Box mb={3} style={styles.pageContainer}>
     <Header/>
 <Card align='center' style={{...styles.box, marginBottom: '10px' }}>
 <ChakraProvider>
      <Card mb={3}>
        <CardHeader bg="#EEF5FF">
          <Heading size='md' mb={7} style={styles.heading}>
            Portfolio Aanmelden
            <Divider/>
          </Heading>
         
          <ChakraProvider>
      <Text mb={3} fontFamily="'Pacifico', cursive" fontStyle="italic" fontSize="2xl" fontWeight="thin">
        {' '}
        "Showcase Your Talent: Get Expert Feedback on Your Portfolio!"
      </Text>
    <Text mb={3} fontFamily="'Pacifico', cursive" fontStyle="italic" fontSize="s" fontWeight="thin">
        {' '}
            Als je wil deelnemen aan de online kunsttentoonstelling vul het portfolioformulier in
          </Text>
    </ChakraProvider>
        </CardHeader>
      </Card>
    </ChakraProvider>
  <Box mb={3} style={{ display: 'flex', justifyContent: 'center' }}>
    <Image
      src="https://imgur.com/rMfkVvw.jpg"
      alt="Whimsical Splatters on a Wispy Trunk"
      style={{
        width: '50%',
        objectFit: 'cover',
        borderRadius: '8px',
        border: '2px solid white, 4px solid #176B87',
        marginBottom: '16px',
      }}
    />
    </Box>
    <CardHeader mb={3} bg="#EEF5FF">
  <CardBody>
    <Divider/>
    <Text mb={2}> Vul het onderstaande formulier in om je portfolio aan te melden. We nemen contact met je op voor verdere details en goedkeuring.</Text>
    <Text mb={2}> Als je meer informatie wil over je de portfolio kan toevoegen kijk bij de Informatie contact pagina </Text>
    <Divider/>
  </CardBody>
  </CardHeader>
  <CardFooter>
  
  <Box
  as='button'
  p={3}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  margin= 'auto'
  bgGradient='linear(to-r, #B4D4FF, #176B87)'
  _hover={{
    bgGradient: 'linear(to-l, #B4D4FF, #176B87)',
  }}

onClick={() => {
  setFormOpen(true);
}}
>
Portfolioformulier invullen
</Box>
</CardFooter>
</Card>

{isFormOpen && (
  <Modal isOpen={true} onClose={() => setFormOpen(false)}>
    <ModalOverlay />
    <ModalContent sx={styles.modalContent}>
      <ModalHeader>Boost je Portfolio Inzending! </ModalHeader>
      <ModalCloseButton />
              <ModalBody>
                <FormControl isRequired>
                  <FormLabel>Titel</FormLabel>
                  <Input
                    placeholder="Vul in Title"
                    value={workData.title || ''}
                    onChange={(e) => setWorkData({ ...workData, title: e.target.value })}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Afmeting breedte</FormLabel>
                  <Input
                    placeholder="Vul in Breedte"
                    value={workData.imageWidth || ''}
                    onChange={(e) => setWorkData({ ...workData, imageWidth: e.target.value })}
                  />
                </FormControl>
                <FormControl>
                <FormLabel>Afmeting hoogte</FormLabel>
                  <Input
                    placeholder="Vul in Hoogte"
                    value={workData.imageHeight || ''}
                    onChange={(e) => setWorkData({ ...workData, imageHeight: e.target.value })}
                  />
                </FormControl>
                <FormControl>
              <FormLabel>Afbeeldings-URL van de inzending</FormLabel>
              <Input
  type="text"
  name="image"
  placeholder="Voeg toe Inzending-URL"
  value={workData.image || ''}
  onChange={(e) => setWorkData({...workData,image: e.target.value})}
/>
            </FormControl>
  <FormControl isRequired>
    <FormLabel>Omschrijving</FormLabel>
    <Textarea
      placeholder='Vul in Omschrijving'
      value={workData.description || ''}
      onChange={(e) => setWorkData({ ...workData, description: e.target.value })}
    />
  </FormControl>


  <FormControl isRequired>
  <FormLabel>Categorieën</FormLabel>
  <FormHelperText fontSize="s" color="white.500">
    Kies uit:
  </FormHelperText>
  <ul>
    {["Innovative Creators", "Newly graduated artist", "Emerging Visionaries", "Emotional Expressions"].map((category, index) => (
      <li key={index} style={{ cursor: 'pointer' }} onClick={() => handleCategoryClick(category)}>
        {category}
      </li>
    ))}
  </ul>
</FormControl>
<Input
  placeholder='Vul in categorieën, gescheiden door een komma'
  value={Array.isArray(workData.categories) ? workData.categories.join(',') : ''}
  onChange={(e) => setWorkData({ ...workData, categories: e.target.value.split(',') || [] })} 
/>

<FormControl isRequired>
          <FormLabel>Verkoopprijs</FormLabel>
          <Input
            placeholder='Vul in verkoopprijs in'
            value={workData.prijs || ''}
              onChange={(e) => setWorkData({ ...workData, prijs: e.target.value })}
              />
            
          
</FormControl>
<FormControl>
          <FormLabel>Artiest afbeelding</FormLabel>
          <Input
            placeholder='Voeg toe afbeelding artiest URL'
            value={workData.artist.image || ''}
            onChange={(e) =>
              setWorkData({
                ...workData,
                artist: { ...workData.artist, image: e.target.value },
              })
            }
          />
  </FormControl> 

  <FormControl isRequired>
  <FormLabel>E-mail</FormLabel>
  <Input
    placeholder="Vul in email"
    value={workData.email || ''}
    onChange={(e) => setWorkData({ ...workData, email: e.target.value })}
  />
</FormControl>

<FormControl>
  <FormLabel>Telefoonnummer</FormLabel>
  <Input
   placeholder="Vul in tel"
    value={workData.phone || ''}
    onChange={(e) => setWorkData({ ...workData, phone: e.target.value })}
  />
</FormControl>

    
<FormControl>
  <FormLabel>Bericht</FormLabel>
  <Textarea
  placeholder="Notities"
    value={workData.message|| ''}
    onChange={(e) => setWorkData({ ...workData, message: e.target.value })}
  />
</FormControl>

                </ModalBody>
              <ModalFooter mt={4} style={{ justifyContent: "space-between" }}>
                <Button
                  colorScheme="blue"
                  onClick={handleSaveChanges}
                >
                  Opslaan
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  ml={4}
                  onClick={() => setFormOpen(false)}
                >
                  Annuleer
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
        <Footer /> 
    </Box>
  );
};

export default AddWork;                

