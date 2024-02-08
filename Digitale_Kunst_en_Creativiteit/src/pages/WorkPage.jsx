import React, { useState, useEffect } from 'react';
import { Box, Text, Container, Button, Image } from '@chakra-ui/react';
import styles from './StylePage';
import AddWork from './AddWork';
import { WorkDetail } from '../components/WorkDetail';

export const WorkPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [selectedWork, setSelectedWork] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateportfolio = (newWork) => {
    console.log('handleUpdateportfolio', newWork);
  };
  

  useEffect(() => {
    setEditedData(selectedWork || {});
  }, [selectedWork]);

  useEffect(() => {
    // Laadlogica
    const fetchData = async () => {
      if (selectedWork ) {
        setIsLoading(true);

        try {
          const response = await fetch(`/api/portfolio/${selectedWork.id}`);
          if (response.ok) {
            const work = await response.json();
            setEditedData(work);
          } else {
            console.error('Failed to fetch work data. Server returned:', response);
          }
        } catch (error) {
          console.error('Error fetching work data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [selectedWork]);

  const handleAddWorkClick = () => {
    setEditMode(true);
    setFormOpen(true);
    setEditedData('');
    setSelectedWork(null);
  };

  const handleSaveChanges = async (editedData) => {
    console.log('Trying to save changes for work:', editedData);

    try {
      const response = await fetch(`/api/portfolio/${editedData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        handleUpdateportfolio(editedData);
        setEditMode(false);
      } else {
        console.error('Failed to save work changes. Server returned:', response);
      }
    } catch (error) {
      console.error('Error saving work changes:', error);
    }
  };

  return (
    <div>
      <Box style={styles.pageContainer}>
        <Container style={{ ...styles.container }}>
          {selectedWork && (
            <Box mt={4}>
              <WorkDetail work={selectedWork} />
            </Box>
          )}

          {isLoading && <p>Loading...</p>}

          {editMode ? (
            <Box>
              {/* Render de bewerkte gegevens */}
              <Box style={styles.box}>
                <Text fontSize="lg">Titel {editedData.title}</Text>
                <Text>Omschrijving {editedData.description}</Text>
                <Text>Categorieën {editedData.categories?.join(', ')}</Text>
                <Text>Artiest {editedData.artist?.name}</Text>
                {editedData.artist?.image && (
                  <Image src={editedData.artist?.image} alt={editedData.artist?.name} style={styles.image} />
                )}
              </Box>
              <Box style={{ ...styles.box, display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={handleAddWorkClick} style={styles.editButton}>
                  Inzending toevoegen
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this work?')) {
                      handleDeleteWork(editedData.id);
                    }
                  }}
                >
                  Verwijder
                </Button>
              </Box>
            </Box>
          ) : (
            // Render de inzending toevoegen / bewerken formulier
            <AddWork
              handleUpdateportfolio={handleUpdateportfolio}
              isOpen={isFormOpen}
              onClose={() => setFormOpen(false)}
              onSave={handleSaveChanges}
              data={selectedWork}
            />
          )}
          
        </Container>
      </Box>
    </div>
  );
};

export default WorkPage;

