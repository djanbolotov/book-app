import {
    Flex,
    Box,
    Text,
    Link as StyledLink,
    
  } from "rebass/styled-components";
  import { Link as RouterLink } from 'react-router-dom'
  import { Container } from "./Container"
 
  
  export const NavBar = () => {
    return (
      <Flex bg="black" justifyContent="center">
        <Container>
          <Flex px={2} width="100%" alignItems="center">
            
            <StyledLink as={RouterLink} variant="nav" to="/Home">
              React CRUD   
            </StyledLink>
            <Text color="Blue" fontSize="bolt">Book app</Text>
            <Box mx="auto" />
            <StyledLink as={RouterLink} variant="nav" to="/create-book">
              + Add new book
              </StyledLink>
          </Flex>
        </Container>
      </Flex>
    );
  };