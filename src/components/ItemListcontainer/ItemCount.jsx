import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const message = () => {
        contador !=0 ? alert("producto agregado al carrito") : alert('Tenes producto/s en el carrito')
    }
    const sumar = () => contador < 15 && setContador(contador + 1)
    const restar = () => contador > 0 && setContador(contador - 1)
    return (
        <>
            { contador > 0 ? <Button colorScheme='red' size='sm' onClick={restar}>Eliminar</Button> : <Button disabled>Eliminar</Button>}
            <Button colorScheme='blue' size='sm' onClick={message}>Agregar a Carrito {contador}</Button>
            { contador < 10 ? <Button colorScheme='green' size='sm' onClick={sumar}>Agregar</Button> : <Button disabled>Agregar</Button>}
        </>
    )
}

export default ItemCount