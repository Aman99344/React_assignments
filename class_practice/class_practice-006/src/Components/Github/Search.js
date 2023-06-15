import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";
import { useState, useContext } from "react";
import myGithubContext from "./Context";
import axios from "axios";

function Search(props) {
  const [username, setUsername] = useState("");

  const {addData} = useContext(myGithubContext)

  const getUserData = () => {
    axios.get(`https://api.github.com/users/${username}`)
    .then((res)=>{
      addData(res.data)
      // console.log(res.data)
    })
    .catch(()=>{
      alert("Failed to get Data")
    })
  };
  return (
    <Box>
      <Box mb="15px">
        <Heading size="lg" color="green">
          GITHUB PROJECT
        </Heading>
      </Box>

      <Flex>
        <Input
          placeholder="Enter Github User Id"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button
          variant="outline"
          color="green"
          p="10px 70px"
          onClick={getUserData}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
}

export default Search;
