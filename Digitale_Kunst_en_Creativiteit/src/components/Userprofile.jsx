import { useState, useEffect } from 'react';
import { Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, MenuDivider } from '@chakra-ui/react';
import { QuestionOutlineIcon, HamburgerIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import AccountInformatieModal from './AccountInformatie';
import LogIn from './LoginSignIn/Login';
import SignUp from './LoginSignIn/SignUp';
import { useNavigate, Link } from 'react-router-dom';
import FAQPage from './FAQPage';
import SettingsModal from './SettingPage';


const UserProfile = () => {
  const navigate = useNavigate();
  const [toonAccountInformatie, setToonAccountInformatie] = useState(false);
  const [geauthenticeerd, setGeauthenticeerd] = useState(false);
  const [gebruikersnaam, setGebruikersnaam] = useState('JohnDoe'); // Vervang dit met de daadwerkelijke gebruikersnaam
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleMenuItemClick = () => {
    if (geauthenticeerd) {
      // Toon accountinformatie wanneer het menu-item wordt geklikt
      setToonAccountInformatie(true);
    } else {
      // Navigeer naar inlogpagina wanneer de gebruiker niet is ingelogd
      setShowLoginForm(true);
      // Hier kun je een navigatie naar een aparte inlogpagina overwegen
    }
  };
  const openAccountInformatieModal = () => {
    setToonAccountInformatie(true);
  };

  useEffect(() => {
    // Functie om de pop-ups na een bepaalde tijd te verbergen
    const hidePopups = () => {
      setToonAccountInformatie(false);
      setShowLoginForm(false);
      setShowSignUpForm(false);
      setIsSettingsModalOpen(false);
    };

    const intervalId = setInterval(hidePopups, 8000);

    return () => clearInterval(intervalId);
  }, []); 

  const handleInloggen = () => {
   
    // Simuleer inloggen (je zou hier een API-aanroep moeten doen)
    setGeauthenticeerd(true);
    // Stel de gebruikersnaam in (dit zou vanuit je inloggegevens moeten komen)
    setUserClicked(true);
    setGebruikersnaam('Suzanne Boersma');
    setShowLoginForm(true);
    setShowSignUpForm(false);
 
  };

  const handleAanmelden = () => {
    console.log("Aanmelden geklikt");
    setUserClicked(true);
    setShowLoginForm(false); // Zorg ervoor dat het Inlog-formulier niet wordt weergegeven
    setShowSignUpForm(true);
  };

  const handleUitloggen = () => {
    setGebruikersnaam('');
    setShowLoginForm(false);
    setShowSignUpForm(false);
    setToonAccountInformatie(false);
    setGeauthenticeerd(false);
    navigate('/');
  };
  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };
 
  const paymentInfo = {
    cardNumber: '**** **** **** 1234',
    expirationDate: '12/23',
    cvv: '***',
  };

  return (
    <div>
    
      <Menu>
        <MenuButton as={Button} colorScheme='#EEF5FF'fontSize="xl">
          Profile <HamburgerIcon boxSize={9} />
        </MenuButton>
        <MenuList>
          <MenuGroup title='Profile'>
          <MenuDivider />
            <MenuItem onClick={handleMenuItemClick}>My Account</MenuItem>
          </MenuGroup>
          {geauthenticeerd ? (
            <>
            <MenuItem><span style={{ marginRight: '8px' }} onClick={openSettingsModal}>
    Accountinstellingen
  </span>
</MenuItem>
<MenuDivider />
<MenuItem>
<div>
        <span style={{ marginRight: '8px' }}>Payment Information</span>
        <MenuItem>Card Number: {paymentInfo.cardNumber}</MenuItem>
        <MenuItem>Expiration Date: {paymentInfo.expirationDate}</MenuItem>
        <MenuItem>CVV: {paymentInfo.cvv}</MenuItem>
        {/* Add more payment-related information if needed */}
      </div>
      </MenuItem>
<MenuDivider />
              <MenuItem onClick={handleUitloggen}>Uitloggen</MenuItem>
              
            </>
          ) : (
            <>
            <MenuItem onClick={handleInloggen}>Inloggen</MenuItem>
              <MenuItem onClick={handleAanmelden}>Aanmelden</MenuItem>
              </>
          )}
          <MenuDivider />
          <MenuGroup title='Help'>
            <MenuItem>
            <Link to="/faq" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <span style={{ marginRight: '8px' }}>FAQ</span>
                <QuestionOutlineIcon w={4} h={4} />
                </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
        </Menu>
      {/* Toon het inlogformulier als het is geselecteerd */}
      {showLoginForm && <LogIn onClose={() => setShowLoginForm(false)} />}
      {/* Toon het aanmeldformulier als het is geselecteerd */}
      {showSignUpForm && <SignUp onClose={() => setShowSignUpForm(false)} />}
      {toonAccountInformatie && (
        <AccountInformatieModal
          isOpen={toonAccountInformatie}
          onClose={() => setToonAccountInformatie(false)}
          gebruikersnaam={gebruikersnaam}
        />
      )}
   
      {/* Toon SettingsModal-component wanneer het menu-item is geklikt */}
      {isSettingsModalOpen && <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />}
    </div>
  );
};

export default UserProfile;


