import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
} from '@chakra-ui/react';

// AccountInformatieModal-component om de accountinformatie weer te geven in een modal
const AccountInformatieModal = ({ isOpen, onClose, gebruikersnaam, telefoonnummer, email, aangemaaktOp, linkedinProfiel, isActief }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" bg="#86B6F6" color="#176B87">
          Accountinformatie
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="xl" mb={4}>
            Gebruikersnaam: {gebruikersnaam}
          </Text>
          <Text fontSize="xl" mb={4}>
            Telefoonnummer: {telefoonnummer}
          </Text>
          <Text fontSize="xl" mb={4}>
            E-mailadres: {email}
          </Text>
          <Text fontSize="xl" mb={4}>
            Accountstatus: {isActief ? 'Actief' : 'Inactief'}
          </Text>
          <Text fontSize="xl" mb={4}>
            Aangemaakt op: {aangemaaktOp}
          </Text>
          <Text fontSize="xl" mb={4}>
            LinkedIn: <a href={linkedinProfiel}>{linkedinProfiel}</a>
          </Text>
          <Button colorScheme="blue" onClick={onClose}>
            Sluiten
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

// Hoofdapplicatiecomponent
function App() {
  const [toonAccountInformatie, setToonAccountInformatie] = useState(false);
  const [gebruikersnaam, setGebruikersnaam] = useState('JohnDoe'); // Vervang dit met de daadwerkelijke gebruikersnaam

  const handleMenuItemClick = () => {
    // Toon accountinformatie wanneer het menu-item wordt geklikt
    setToonAccountInformatie(true);
  };

  return (
    <div>
      <Button onClick={handleMenuItemClick}>
        Mijn account
      </Button>

      {/* Toon AccountInformatieModal-component wanneer het menu-item is geklikt */}
      {toonAccountInformatie && (
        <AccountInformatieModal
          isOpen={toonAccountInformatie}
          onClose={() => setToonAccountInformatie(false)}
          gebruikersnaam={gebruikersnaam}
          telefoonnummer="123456789"
          email="voorbeeld@example.com"
          aangemaaktOp="01-01-2022"
          linkedinProfiel="https://www.linkedin.com/in/johndoe"
          isActief={true}
        />
      )}
    </div>
  );
}

export default AccountInformatieModal;

