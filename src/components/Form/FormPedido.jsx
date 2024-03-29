import { useContext, useState } from 'react'
import { Button, Text, Input, VStack, FormControl, FormLabel  } from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const FormPedido = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState("")
    const [cart, setCart] = useContext(CartContext)

    const db = getFirestore()
    const ordersCollection = collection(db, "orden")

    const askCart = async (e) => {
        e.preventDefault()

        if (!name || !email || !phone || cart.length === 0){
            Swal.fire("El carrito no debe estar vacio")
            return;
        }

        const order = {
            client: {name, email, phone},
            items: cart,
            date: Date()
        }

        try {
            const docRef = await addDoc(ordersCollection, order)
            setOrderId(docRef.id)
        } catch (error) {
            Swal.fire("Error en Pedido")
        }
    }

    return (
        <VStack spacing={4} align="center">
            <form onSubmit={askCart} style={{ width: '300px' }}>
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        type="text"
                        placeholder="Nombre"
                        onChange={(e) => setName(e.target.value)}
                        mb={2}
                        w="100%"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        mb={2}
                        w="100%"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Teléfono</FormLabel>
                    <Input
                        type="tel"
                        placeholder="Teléfono"
                        onChange={(e) => setPhone(e.target.value)}
                        mb={2}
                        w="100%"
                    />
                </FormControl>
                <Button type="submit" colorScheme="green" w="100%">
                    Enviar
                </Button>
            </form>
            {orderId && (
                <Text mt={4} fontWeight="bold">
                    Orden ID: {orderId}
                </Text>
            )}
        </VStack>
    )
}

export default FormPedido