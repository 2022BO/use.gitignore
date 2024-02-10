import React from 'react';
import { Link} from 'react-router-dom';
import UserProfile from './Userprofile';
import styles from '../pages/StylePage';
import { Button } from '@chakra-ui/react';


export const Navigation = ({ portfolioId }) => {
  
  return (
  
    <nav style={{ ...styles.pageContainer, ...styles.navBar }}>
       <div style={{ marginLeft: 'auto' }}>
    <UserProfile />
    </div>
    <Button as={Link} to="/" variant="link"style={{ ...styles.navButton, ...styles.button1 }}>
        Portfoliocatalogus
      </Button>
      <Button as={Link} to={`/work/${portfolioId || 'fallbackId'}`} variant="link" style={{ ...styles.navButton, ...styles.button2 }}>
        Portfolio Aanmelden
      </Button>
      <Button as={Link} to="/information-and-contact" variant="link" style={{ ...styles.navButton, ...styles.button3 }}>
        Informatie & contact
      </Button>
   
  </nav>

  );
};


