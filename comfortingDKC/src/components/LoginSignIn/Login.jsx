import React from "react";
import { Link } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Checkbox, Heading } from '@chakra-ui/react';
import styles from '../../pages/StylePage';

const LogIn = () => {
    return (
        <div style={styles.loginBox}>
            <form>
                <Heading as="h5" textAlign="center" marginBottom={2}>Log in</Heading>
                <FormControl mb={2}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter Email" className="form-control" />
                </FormControl>
                <FormControl mb={2}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter Password" className="form-control" />
                </FormControl>
                <Checkbox id="check" className="custom-control costom-checkbox" mb={2}>
                    <FormLabel htmlFor="check" className="custom-input-label ms-2">
                        Remember me
                    </FormLabel>
                </Checkbox>
                <div className="d-grid">
                    <Button type="submit">Log in</Button>
                </div>
            </form>
            <p className="text-end mt-2">
                Forgot <a href=" ">Password?</a>
                <Link to="/signup" className="ms-2">
                    <Button colorScheme="primary">Sign up</Button>
                </Link>
            </p>
        </div>
    );
};

export default LogIn;

