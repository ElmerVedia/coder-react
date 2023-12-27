import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
  const [contador, setContador] = useState(0)
  return (
    <>
        <GiShoppingCart />{contador}
    </>
  )
}

export default CartWidget