import { Container, Input, Button, Stack } from "@chakra-ui/react"


const Product = () => {
  return (
    <Container  mt="30px" mb="80px">
        <Stack spacing={5} direction='row' align='center'>
        <Input color="teal" borderColor="teal" borderWidth="1.5px" focusBorderColor="teal" h="48px" htmlSize={50} width='auto' placeholder="Search Product eg: electronics" _placeholder={{ opacity: 0.8, color: "inherit"}} />
        <Button size="lg" colorScheme="teal">Search</Button>
        </Stack>
    </Container>
  )
}

export default Product;