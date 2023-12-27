
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Flex>
                <Box p='6'>
                    <Link to={'/'}>
                        <h1>TuAperitivo</h1>
                    </Link>
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/category/fernet'>
                                <p>FERNET</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/ron'>
                                <p>RON</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/whisky'>
                                <p>WHISKY</p>
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
        </div>
    )
}

export default NavBar