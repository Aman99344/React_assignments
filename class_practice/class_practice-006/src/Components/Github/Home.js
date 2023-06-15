import React from "react";
import Search from "../Github/Search";
import Profile from "../Github/Profile";
import { Box, Container, Flex } from "@chakra-ui/react";
import Details from "./Details";

function Home(props) {
  return (
    <Container  boxShadow="dark-lg" mt="40px" maxW="1000px" p="30px">
      <Box mb="30px">
        <Search />
      </Box>
      <Flex justifyContent="space-between">
        <Box w="34%">
          <Profile />
        </Box>
        <Box boxShadow="dark-lg" w="60%" color="white">
          <Details />
        </Box>
      </Flex>
    </Container>
    
  );
}

export default Home;