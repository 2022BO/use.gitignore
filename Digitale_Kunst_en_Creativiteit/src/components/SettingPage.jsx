import React, { useState } from 'react';
import Footer from './Footer';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

const SettingsModal = ({ isOpen, onClose }) => {
    
  const [newPassword, setNewPassword] = useState('');
  const [deleteAccountConfirmation, setDeleteAccountConfirmation] = useState('');

  const handleChangePassword = () => {
    // Implement logic to change password here
    console.log('Changing password:', newPassword);
    // Reset the form
    setNewPassword('');
  };

  const handleDeleteAccount = () => {
    // Implement logic to delete account here
    console.log('Deleting account...');
    // Reset the form
    setDeleteAccountConfirmation('');
    // Close the modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" bg="#86B6F6" color="#176B87">
          Account Settings
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" mb={4} onClick={handleChangePassword}>
            Change Password
          </Button>

          <Text fontWeight="bold" mb={2}>
            Delete Account
          </Text>
          <FormControl mb={4}>
            <FormLabel>
              Type <strong>DELETE</strong> to confirm
            </FormLabel>
            <Input
              type="text"
              placeholder="Type DELETE"
              value={deleteAccountConfirmation}
              onChange={(e) => setDeleteAccountConfirmation(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="red" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;

