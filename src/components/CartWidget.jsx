import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {getTotalItems} = useCart()
    const totalItems = getTotalItems()

    return (
        <div>
            <Link to='/cart'>
                <FaShoppingCart color="white" fontSize={"2rem"}/>
                <Badge bg="secondary">{totalItems}</Badge>
            </Link>
        </div>
    )
}

export default CartWidget;