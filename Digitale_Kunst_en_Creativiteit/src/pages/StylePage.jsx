const styles = {


  pageContainer: {
    maxWidth: '100%',
    background: '#EEF5FF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
  },

  editContainer: {
    padding: '10px',
    borderRadius: '5px',
    margin: '10px',
    border: '1px solid #176B87',
  },

  container: {
    maxWidth: '100%',
    margin: 'auto',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#176B87',
    borderRadius: '8px',
    background: '#EEF5FF',
  },

  heading: {
    fontSize: 20,
    marginBottom: '10px',
    background: '#EEF5FF',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '8px',
    padding: '15px',
    color: '#176B87',
  },

  box: {
    background: '#EEF5FF',
    padding: '3px',
    margin: '3px',
    borderRadius: '8px',
  },

  image: {
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: '2px solid #176B87',
    objectFit: 'cover',
    margin: '0 auto',
    width: '100%',
    height: '350px',
  },


  imageStyle: {
    width: '350px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '3px solid #176B87',
    marginBottom: '16px',
  },
  cancelButton: {
    marginRight: '30px',
  },

  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  maxWidth: '100%',
    backgroundColor: '#B4D4FF',
    margin: '0 auto',
  },
  loginBox: {
    background: '#EEF5FF',
    padding: '5px',
    margin: '15px',
    borderRadius: '8px',
    border: '3px solid #176B87',
    width: '100%', // Set to 100% for responsiveness
    maxWidth: '350px', // Set a maximum width if needed
    boxSizing: 'border-box', // Include padding and border in the total width
  },

  signupBox: {
    background: '#EEF5FF',
    padding: '5px',
    margin: '15px',
    borderRadius: '8px',
    width: '350px',
    border: '3px solid #176B87',
  },
  navBar: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    background: 'linear-gradient(to right, #B4D4FF, #176B87)',
    padding: '10px',
    minHeight: '10vh',
  },
  navLink: {
    color: '#EEF5FF',
    textDecoration: 'none',
  },

    navButton: {
      textDecoration: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      fontSize: '20px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
      transition: 'background 0.3s ease',
      border: '1px solid #EEF5FF',
     
    },
  
    button1: {
      background: 'linear-gradient(45deg, #86B6F6, #176B87)',
      color: '#EEF5FF',
      borderRadius: '5px 50px 5px 50px',
      fontSize: '20px',
      '&:hover': {
        background: 'linear-gradient(45deg, #B4D4FF, #86B6F6)',
      },
    },
  
    button2: {
      background: 'linear-gradient(45deg, #176B87, #86B6F6)',
      color: '#EEF5FF',
      borderRadius: '50px 5px 50px 5px',
      fontSize: '20px',
      '&:hover': {
        background: 'linear-gradient(45deg, #86B6F6, #B4D4FF)',
      },
    },
  
    button3: {
      background: 'linear-gradient(45deg, #86B6F6, #176B87)',
      color: '#EEF5FF',
      fontSize: '15px',
      borderRadius: '5px 50px 5px 50px',
     
      '&:hover': {
        background: 'linear-gradient(45deg, #176B87, #B4D4FF)',
       
  },
},
};

export default styles;
