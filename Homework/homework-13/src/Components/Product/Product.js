import { Container, Input, Button, Stack } from "@chakra-ui/react"
import { useState } from "react";
import ProductList from "./ProductList";


const Product = () => {

  const[inputdata, setInputData] = useState([])

  return (
    <>
    <Container  mt="30px" mb="80px">
        <Stack spacing={5} direction='row' align='center'>
        <Input onChange={(e)=>{
          setInputData(e.target.value)
        }} color="teal" borderColor="teal" borderWidth="1.5px" focusBorderColor="teal" h="48px" htmlSize={50} width='auto' placeholder="Search Product eg: electronics" _placeholder={{ opacity: 0.8, color: "inherit"}} />
        <Button onClick={getdata} size="lg" colorScheme="teal">Search</Button>
        </Stack>
    </Container>

    <ProductList inputdata={inputdata} />

    </>

  )
}

export default Product;