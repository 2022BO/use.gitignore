import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import AddWork from './AddWork';
import { WorkDetail } from '../components/WorkDetail';
import { ArrowUpIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import styles from './StylePage';
import { useToast } from '@chakra-ui/react';
import Footer from '../components/Footer';


import {
  Heading,
  Box,
  Button,
  Center,
  VStack,
  Text,
  Input,
  Image,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from '@chakra-ui/react';
import Header from '../components/Header';


const PortfolioPage = ({}) => {
  const [portfolio, setportfolio] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [filteredportfolio, setFilteredportfolio] = useState([]);
  const [data, setData] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const toast = useToast();
  const [uniqueLetters, setUniqueLetters] = useState([]);

  useEffect(() => {
    if (data && data.portfolio) {
      const cleanedportfolio = data.portfolio.map((work) => ({
        ...work,
        categories: work.categories.map((category) => category.replace(/"/g, '').trim()),
      }));

      setportfolio(cleanedportfolio);
      // Genereer de lijst met unieke letters op basis van de titels van de werken
    const letters = new Set(
      cleanedportfolio.reduce((acc, work) => {
        const titleLetters = work.title.toLowerCase().replace(/[^a-z]/g, '').split('');
        return acc.concat(titleLetters);
      }, [])
    );
    setUniqueLetters(Array.from(letters));
    }
    if (data && data.categories) {
      setCategories(data.categories);
    }
  }, [data]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((jsonData) => {
        console.log('Received data:', jsonData);
        setData(jsonData);
        setFilteredportfolio(jsonData.portfolio || []);
      })
      .catch((error) => console.error('Error fetching JSON data:', error));
  }, []);

  const availableportfolio = (work) => {
    const matchesCategory = !selectedCategory || work.categories.includes(selectedCategory);
    const matchesSearch =
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.description.toLowerCase().includes(searchQuery.toLowerCase());
  
    return matchesCategory && matchesSearch;
  };
  
  const handleSearch = () => {
    setFilteredportfolio(portfolio);
  
    const newFilteredportfolio = portfolio.filter((work) => {
      const matchesCategory =
        selectedCategory === '' ||
        work.categories.some((category) => category.toLowerCase() === selectedCategory.toLowerCase());
  
      const matchesSearch =
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.categories.some((category) => category.toLowerCase().includes(searchQuery.toLowerCase()));
  
      return matchesCategory && matchesSearch;
    });
  
    setFilteredportfolio(newFilteredportfolio);
    setInvalidInput(newFilteredportfolio.length === 0);
  };

  
  const handleportfolioSelection = (work) => {
    try {
      setSelectedWork(work);
      console.log('Selected Category:', selectedCategory);
    } catch (error) {
      console.error('Error selecting work:', error);
    }
  };
  const filterByCategory = (work) => {
    return (
      selectedCategoryId === '' ||
      portfolio.categories.some((category) => category === selectedCategoryId)
    );
  };

  const handleAddWorkClick = () => {
    navigate('/add-work-form');
    setFormOpen(true);
    setSelectedWork(null);
  };

  const handleUpdateportfolio = (newWork) => {
    const updatedportfolio = [...portfolio, newWork];
    setportfolio(updatedportfolio);
    setNotification('Cursus succesvol toegevoegd/verwijderd');
    navigate('/');
  };
  const handleDeleteWork = async (workId) => {
    const isConfirmed = window.confirm('Weet je 100% zeker dat je deze cursus wilt verwijderen?');
    if (!isConfirmed) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/portfolio/${workId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Update portfolio state
        setportfolio((prevportfolio) => prevportfolio.filter((work) => work.id !== workId));

        // Update filteredportfolio state
        setFilteredportfolio((prevFilteredportfolio) => prevFilteredportfolio.filter((work) => work.id !== workId));
  
        setSelectedWork(null);
        handleShowNotification('Cursus succesvol verwijderd', 'success');
        navigate('/');
      } else {
        console.error('Failed to delete work. Server returned:', response);
        handleShowNotification('Fout bij het verwijderen van de cursus', 'error');
      }
    } catch (error) {
      console.error('Error deleting work:', error);
      handleShowNotification('Fout bij het verwijderen van de cursus', 'error');
    }
  };
  
  const handleShowNotification = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  const filteredportfolioByCategory = filteredportfolio.filter(filterByCategory);

  return (
    
    <Center h="100%" flexDir="column" style={{ ...styles.pageContainer }}>
      <Box style={styles.box}>
      <Header/>
   
        {invalidInput && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={3} style={{ padding: '10px' }}>
              Oeps!
            </AlertTitle>
            <AlertDescription>
              <strong>Wat kun je doen?</strong>
              <ul>
                <li>Controleer de spelling van je zoekopdracht</li>
                <li>Probeer een andere zoekopdracht</li>
                <li>Ga naar informatie en contact</li>
              </ul>
            </AlertDescription>
          </Alert>
          
        )}
        
        <VStack spacing={3} align={'stretch'} p={4}>
          <Select
            placeholder="Filter op categorie"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Alle categorieën</option>
            {data &&
              data.categories &&
              data.categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
          </Select>
          <Input
            type="text"
            placeholder="Vul een titel in..."
            value={searchQuery}
            onChange={(e) => {
              console.log('Input Change Event:', e.target.value);
              setSearchQuery(e.target.value);
            }}
          />
          <Button color="#176B87" borderColor='#176B87' border= '1px' mt={2} onClick={handleSearch}>
            Zoeken <SearchIcon ml="auto" />
          </Button>

          <Flex
            wrap="wrap"
            justify="space-between"
            align="stretch"
            spacing={4}
            direction={{ base: 'column', md: 'row' }}
          >
{filteredportfolioByCategory.map((work) => (
 <React.Fragment key={work.id}>
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative" padding={3} mt={2} width={{ base: '100%', md: '30%' }} mx={{ base: 0, md: 3 }}>
    <img src={work.image} alt={work.title} style={styles.image} />

    <Box>
      <Text as="h3" fontSize="lg" fontWeight="bold" color="#176B87" mb={2}>
        {work.title}
      </Text>
      <Box mb={2}>
        <Text>
          <strong>Omschrijving</strong> <br /> {work.description || "Informatie niet beschikbaar"}
        </Text>
        <Text>
  <strong>Afmeting</strong>
  {work.size && (
    <>
      <br />
      Breedte: {work.size.width} x Hoogte: {work.size.height}
    </>
  )}
</Text>
        <Text>
        <strong>Prijs</strong><br /> {work.prijs || "Informatie niet beschikbaar"}
        </Text>
      </Box>
      <Text>
        <strong>Categorieën</strong><br /> {work.categories ? work.categories.join(', ') : 'N/A'}
      </Text>
      <Text>
  <strong>Artist</strong> <br />{work.artist?.name || "Informatie niet beschikbaar"}
</Text>
<Box mb={2} style={{ marginBottom: '50px' }}>
  <Text>
    {work.artist?.image && (
      <Image
        boxSize="50px"
        src={work.artist?.image}
        alt={work.artist?.name}
        style={styles.imageInstrutor}
      />
    )}
  </Text>
  <Box mt={1} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 8, width: '85%' }}>
  <Link to={`/work-page/${work.id}`} style={{ flex: '1' }}>
    <Button colorScheme="blue" variant="outline" mr={2} height="30px">
      Selecteer
    </Button>
  </Link>

  <Button
    colorScheme="red"
    variant="outline"
    onClick={() => handleDeleteWork(work.id)}
    height="30px"
  >
    Verwijder
  </Button>
</Box>
</Box>
</Box>
    </Box>
    </React.Fragment>
))}
          </Flex>
        </VStack>
        {selectedWork && (
          <Box mt={4}>
            <Heading fontSize="xl">Geselecteerde Cursus</Heading>
            <WorkDetail work={selectedWork} />
          </Box>
        )}
        <Box
          style={{
            ...styles.box,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          
          <Button colorScheme="blue" variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ marginBottom: '20px' }}>
            <Text mr={2}>Terug naar boven</Text>
            <ArrowUpIcon ml="auto" />
          </Button>
        </Box>
        <Navigation setFormOpen={setFormOpen} handleAddWorkClick={handleAddWorkClick} />
        <Box style={{ ...styles.box, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}></Box>
        <Footer />
      </Box>
      {isFormOpen && (
        <AddWork isOpen={isFormOpen} onClose={() => setFormOpen(false)} handleUpdateportfolio={handleUpdateportfolio} handleAddWorkClick={handleAddWorkClick} />
      )}
    </Center>
  
  );
};

export default PortfolioPage;
