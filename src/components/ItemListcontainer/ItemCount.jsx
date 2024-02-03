import { Button, ButtonGroup, IconButton, Center } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { AddIcon, MinusIcon} from '@chakra-ui/icons'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({id, nombre, precio, imagen}) => {
    const [cart, setCart] = useContext(CartContext)
    const [counter, setCounter] = useState(1)

    const rest = () => {
        if (counter > 0) {
            setCounter(counter -1)
        }else{
            alert("El Carrito esta vacio")
        }
    }

    const suma = () => {
        setCounter(counter +1)
    }

    const addToCart = () => {
        setCart((cartAtm) => {
            const alrdyIn = cartAtm.find((item) => item.id === id)

            if (alrdyIn) {
                return cartAtm.map((item) => {
                    if (then.id ===id) {
                        return{...item, stock: item.stock + counter}
                    }else{
                        return item
                    }
                })
            }else{
                return [...cartAtm, {id, stock: counter, nombre, precio, imagen}]
            }
        })
    }
    
    return (
        <>
            <ButtonGroup size="md" isAttached variant="outline">
                <IconButton icon={<MinusIcon />} onClick={rest} />
                <Center>
                    <Button onClick={() => addToCart()}colorScheme="green">
                        Add to cart: {counter}
                    </Button>
                </Center>
                <IconButton icon={<AddIcon />} onClick={suma} />
            </ButtonGroup>
        </>
    )
}

export default ItemCount