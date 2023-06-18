import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider,  ButtonGroup, Button, CardFooter } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductList = ({inputdata,setInputData }) => {

  const[data, setData] = useState([])
  
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${inputdata}`)
    .then((res)=>{
      setData(res.data)
    })
  },[inputdata])
  

  return (
    <Card bg="#111111" color="white"  boxShadow="0 0 6px grey"  maxW='280px' h="fit-content" m="20px 50px">
    <CardBody>
      <Image h="140px" w="200px" margin="auto"
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack spacing={3}>
        <Heading mt={4} size='sm'>Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, 
        </Text>
        <Text color='teal.400' fontSize='l'>
          $450
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='3'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ProductList;


