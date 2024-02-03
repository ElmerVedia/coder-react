import {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import {GiShoppingCart} from "react-icons/gi"

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext)

  const cantidad = () => {
    return cart.reduce((acu, item) => acu + item.stock, 0)
  }

  useEffect(() => {
    const keepCart  = localStorage.getItem('cart')
    if (keepCart) {
      setCart(JSON.parse(keepCart))
    }
  }, [setCart]);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <Link to= "/Cart">
      <div>
        <div>
          <GiShoppingCart />
        </div>
        <span>{cantidad()}</span>
      </div>
    </Link>
  )
}

export default CartWidget