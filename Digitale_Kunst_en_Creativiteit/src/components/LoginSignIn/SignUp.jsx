import React from "react";
import { Link } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import styles from '../../pages/StylePage'; 

const Signup = () => {
  return (
    <div style={styles.signupBox}>
        <form>
        <Heading as="h5" textAlign="center" marginBottom={2}>Aanmelden</Heading>
          <FormControl mb={2}>
            <FormLabel htmlFor="fname">Voornaam</FormLabel>
            <Input type="text" placeholder="Vul in voornaam" className="form-control" />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="lname">Achternaam</FormLabel>
            <Input type="text" placeholder="Vul in achternaam" className="form-control" />
          </FormControl>
          <FormControl mb={2}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" placeholder="Enter Password" className="form-control" />
          </FormControl>

          <div className="d-grid">
            <Button className="btn btn-primary">Submit</Button>
          </div>
          <p className="text-end mt-2">
            Already Registered<Link to="/login" className="ms-2">
              <Button colorScheme="primary">Log in</Button>
            </Link>
          </p>
        </form>
      </div>
 
  );
}

export default Signup;

