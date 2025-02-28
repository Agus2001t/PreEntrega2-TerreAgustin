import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart color="white" fontSize={"2rem"}/>
            <Badge bg="secondary">0</Badge>
        </div>
    )
}

export default CartWidget;