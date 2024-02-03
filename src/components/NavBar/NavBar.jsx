
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Box>
            <Flex>
                <Link to={'/'}>
                    <Heading>
                        TuAperitivo
                    </Heading>
                </Link>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/category/fernet'>
                                FERNET
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/ron'>
                                RON
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/whisky'>
                                WHISKY
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                    <Box p='6' bg='green.400'>
                        <Link to={"/cart"}>
                            <CartWidget/>
                        </Link>
                    </Box>
            </Flex>
        </Box>
    )
}

export default NavBar