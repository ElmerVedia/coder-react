import React from 'react'
import { Image, Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Item = ({ id, nombre, categoria, imagen}) => {
    return (
        <div key={id}>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Image src={imagen} alt={nombre} borderRadius="md" />
                        <Heading size='md' color='green'>
                            Producto: {nombre}
                        </Heading>
                        <Text color='blue'>Categoría: {categoria}</Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Link to={'/item/${id}'} >
                        <Button>
                            más detalles
                        </Button>
                    </Link>
                </CardFooter>
                <Divider mt='4' />
            </Card>
        </div>
    )
}

export default Item