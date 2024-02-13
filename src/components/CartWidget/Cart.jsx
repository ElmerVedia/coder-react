import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Container, Card, Stack, Heading, CardFooter, Divider, Box, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cart, setCart, fullPrice, increaseOne, eraseOne, clearCart] = useContext(CartContext)
  
  return (
    <Container maxW="xl" centerContent>
      <br />
      <br />
      <Heading size="xl" color="green" mb={1}>
        CARRITO DE COMPRA
      </Heading>
      <br />
      <br />
      {cart.map((item) => (
        <Box key={item.id} w="100%">
          <Divider mb={4} />
          <Card>
            <Box p={4} backgroundColor="#f1ecfd">
              <Image src={item.imagen} alt={item.nombre} width="100%" height="auto" />
              <Stack spacing={4}>
                <Heading color="#778751" size="md">
                  Producto: {item.nombre}
                </Heading>
                <Heading color="#778751" size="md">
                  Precio: ${item.precio}
                </Heading>
                <Heading color="#778751" size="md">
                  Cantidad: {item.stock}
                </Heading>
              </Stack>
              <CardFooter>
                <Button colorScheme="green" onClick={() => eraseOne(item.id)}>
                  Agregar
                </Button>
                <Text fontSize="lg" fontWeight="bold" color="teal.500" ml={4}>
                  ¿Deseas modificar el Carrito?
                </Text>
                <Button colorScheme="red" onClick={() => increaseOne(item.id)} ml={4}>
                  Eliminar
                </Button>
              </CardFooter>
            </Box>
          </Card>
          <Divider mt={4} />
        </Box>
      ))}
      <Heading color="#778751" size="xl" mt={4}>
        Precio Final: ${fullPrice()}
      </Heading>
      <Button mt={4} colorScheme="teal" onClick={clearCart}>
        Vaciar Carrito
      </Button>
      <Link to="/orden">
        <Button mt={4} colorScheme="green">
          Confirmar Compra
        </Button>
      </Link>
    </Container>
  );
}

export default Cart