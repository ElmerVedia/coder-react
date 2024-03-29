import { useEffect, useState } from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Image, Container } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const ItemDetail = ({items}) => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const licorRef = doc(db, "licor", `${id}`);

        getDoc(licorRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem(snapshot.data())
            }else{
                alert("El producto no ha sido encontrado")
            }
        })
    }, [id])

    const itemFilter = items.filter((item) => item.id == id)

    return (
        <Container maxW='xl' mt='8'>
            {itemFilter.map((item) => (
                <div key={item.id}>
                    <Card maxW='sm' mx='auto' p='6' borderWidth='1px' borderRadius='lg' boxShadow='lg' maxH='auto'>
                        <Image src={item.imagen} alt={item.nombre} borderRadius='lg' />
                        <CardBody>
                            <Stack spacing='6'>
                                <Heading size='2xl' color='green' textAlign='center'>
                                    {item.nombre}
                                </Heading>
                                <Text fontSize='2xl' color='blue' textAlign='center' fontFamily='customFont'>
                                    Categoría: {item.categoria}
                                </Text>
                                <Text fontSize='2xl' color='black' textAlign='center' fontFamily='customFont'>
                                    Descripción: {item.descripcion}
                                </Text>
                                <Text fontSize='2xl' color='red' textAlign='center' fontFamily='customFont'>
                                    Precio: ${item.precio}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter mt='4' textAlign='center'>
                            <ItemCount
                                id={item.id}
                                nombre={item.nombre}
                                precio={item.precio}
                                stock={item.stock}
                                item={item}
                                imagen={item.imagen}
                            />
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </Container>
    )
}

export default ItemDetail