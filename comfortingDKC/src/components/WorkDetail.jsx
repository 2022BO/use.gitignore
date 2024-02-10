import React, { useEffect, useState } from 'react';
import { Box, Image, VStack, Text, HStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import styles from '../pages/StylePage';
import { FaShoppingCart } from 'react-icons/fa';


export const WorkDetail = () => {
  const { workId } = useParams();
  const [work, setWork] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isRedirecting, setRedirecting] = useState(false);


  useEffect(() => {
    if (!workId) {
      return;
    }

    let ignore = false;
    setError(null);

    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/portfolio/${workId}`);

        if (response.ok) {
          const work = await response.json();
          if (!ignore) {
            setWork(work);
            setIsLoading(false);
          }
        } else {
          setError(`Something went wrong: ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [workId]);

  

  if (error) {
    return <p>{error}</p>;
  }

  if (!work) {
    return null;
  }

  const { title, description, image, categories, artist, location, prijs, website, quote } = work;
  const categoriesContent = categories ? categories.join(', ') : 'N/A';

  if (!artist) {
    return <p>Artist information not available</p>;
  }
  const handlePaymentButtonClick = async () => {
    setPaymentModalOpen(true);
  
    // Simuleer een vertraging van 2 seconden (je kunt dit aanpassen aan je behoeften)
    await new Promise(resolve => setTimeout(resolve, 2000));
  
    // Na de vertraging simuleren we dat de betaling is gelukt
    console.log('Simulated payment successful!');
    
    // Sluit het betalingsvenster na een succesvolle betaling
    setPaymentModalOpen(false);
  
    // Voeg de code hier toe om een POST-verzoek naar je betalings-API te doen
    try {
      const response = await fetch(`/api/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Plaats hier de gegevens die je naar de betalings-API wilt sturen
        }),
      });
  
      if (response.ok) {
        console.log('Payment successful!');
      } else {
        console.error('Payment failed. Server returned:', response);
      }
    } catch (error) {
      console.error('Error making payment request:', error);
    }
  };
  
  const handleClosePaymentModal = () => {
    console.log('Payment modal closed');
    setPaymentModalOpen(false);

  };
  return (
    <Box maxW="xl" mx="auto" my="4" p="4" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor="#8AC7DE" boxShadow="lg">
    <VStack spacing="4" align="start">
      <Text fontSize="xl" fontWeight="bold">
        Geselecteerd werk
      </Text>
      <Text as="h3" fontSize="lg" fontWeight="bold" color="#176B87" mb={2}>
        {title}
      </Text>
      <Text>
        <strong>Omschrijving</strong> {description}
      </Text>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text>
          <strong>Categorieën</strong> {categoriesContent}
        </Text>
      </Box>
      <Image src={image} alt={title} style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '2px solid #176B87', objectFit: 'cover', margin: '0 auto', width: '100%', height: 'auto' }} />
  
      <Box>
        <Text>
          <strong>Locatie</strong> {location}
        </Text>
        <Text>
          <strong>Prijs</strong> {prijs}
        </Text>
        <Text>
          <strong>Website</strong> {website}
        </Text>
        <Text>
          <strong>Quote </strong> {quote}
        </Text>
      </Box>
      <HStack spacing="2">
        <Text>
          <strong>Artiest </strong> {artist?.name || 'Informatie niet beschikbaar'}
        </Text>
      </HStack>
    </VStack>
    <Box mt={4}>
    <Button
  leftIcon={<FaShoppingCart />} // Voeg het icoon toe aan de linkerkant van de tekst
  onClick={handlePaymentButtonClick}
  style={{ ...styles.paymentButton, padding: '12px 24px' }}
>
  Koop mij nu!
</Button>
    {isRedirecting && <Redirect to="/simulated-payment-page" />}
    <Modal isOpen={isPaymentModalOpen} onClose={handleClosePaymentModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Betaling</ModalHeader>
        <ModalCloseButton onClick={handleClosePaymentModal} />
        <ModalBody>
          {/* Display payment information or success/failure message */}
          <p>"Simulatie betaling geslaagd!"</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
  </Box>
  );
};







