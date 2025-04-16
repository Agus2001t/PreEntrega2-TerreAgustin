import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(savedCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (product, quantity) => {
        const exist = cart.find((item => item.id === product.id))
        if(exist) {
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item))
        } else {
            setCart([...cart, {...product, quantity}])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotal, getTotalItems}}>
            {children}
        </CartContext.Provider>
    )
};
