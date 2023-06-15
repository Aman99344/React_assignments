import {useContext} from 'react'
import myGithubContext from './Context'
import { Heading, CardHeader, Card, Stack, StackDivider,Text,Box, CardBody } from '@chakra-ui/react'

const Details = () => {
    const {data} =useContext(myGithubContext)
  return (
    <Card h="fit-content">
  <CardHeader>
    <Heading size='md'>Github User Deatils</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          {data.name || "Github"}
        </Heading>
        <Text pt='2' fontSize='sm'>
        {`Followers  ${data.followers || "Null"}`} {`Following  ${data.following|| "Null"}`} 
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Repository
        </Heading>
        <Text pt='2' fontSize='sm'>
          {`Public Repository   ${data.public_repos}` || "No Repos"}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          URL
        </Heading>
        <Text pt='2' fontSize='sm'>
            {data.html_url || "Blank"}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  )
}

export default Details