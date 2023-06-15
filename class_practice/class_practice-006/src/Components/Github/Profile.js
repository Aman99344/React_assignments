import { Box, Button, Heading, Image, } from "@chakra-ui/react";
import { useContext } from "react";
import myGithubContext from "./Context";


function Profile(props) {

  const { data } = useContext(myGithubContext)

  return (
    <Box p="10px"  textAlign="center" boxShadow="dark-lg">
      <Image
        src={data.avatar_url || "https://www.macworld.com/wp-content/uploads/2023/01/learn_git_mac.jpg?quality=50&strip=all"}
        alt="profile" boxSize="200px" w="220px" m="auto" />
      <Heading size="lg">{data.name || "NO NAME"}</Heading>
      
      <p>
        {data.bio || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam."}
      </p>

      <Button color="green">Profile</Button>
    </Box>
  );
}

export default Profile;