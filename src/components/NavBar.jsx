
import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='6'>
                    CosmoFood
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Hamburguesas</MenuItem>
                        <MenuItem>Pizzas</MenuItem>
                        <MenuItem>Papas</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                
                <Box p='6' bg='green.400'>
                    <CartWidget/>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar