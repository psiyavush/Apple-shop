import React, { useState }  from 'react';
import {ImCross} from 'react-icons/im';
import axios from '../../utils/axios';
import { toast } from 'react-toastify';

const Cart = ({active, setActive, setCart, cart}) => {
    const [order, setOrder] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const addOrder = () => {
        axios.post('/orders', {
            name: name,
            phone: phone,
            order: cart
        }).then(()=>{
            setActive(false)
            setName('')
            setPhone('')
            setCart([])
            toast("Order added successfully")
        }).catch(err => toast("Error adding order"))
    }

    return (
        <div onClick={(e)=>{
            if(e.target.classList.contains('cart')){
                setActive(false);
            }
        }} className={`cart ${active&& 'cart-active'}`} >
            <div className="cart__list">
                <h2 className='cart__list-title'>
                   Корзина
                </h2>
                <span onClick={()=> setActive(false)} className='popup__cross'><ImCross/></span>
                <div className="cart__row">
                {
                    cart.map((item)=>(
                        <div className="cart__list-item" key={item.id}>
                            <img src={item.image} alt={item.title} className='cart__list-item--img'/>
                            <div className="cart__list-info">
                            <p className='cart__list-item--title'>{item.title}</p>
                            <p className='cart__list-item--price'>{item.price}$</p>
                            </div>
                            <button
                                onClick={()=>{
                                    setCart(cart.filter((el)=>el.id!==item.id))
                                    if(cart.length === 1){
                                        setActive(false)
                                    }
                                }}
                                className='cart__list-item--btn'
                            > X </button>
                        </div>
                    ))
                }
                </div>
                
                <div className="cart__listTotal">
                    <div className="cart__listTotal-info">
                    <h4 className='cart__listTotal-title'>Итого:</h4>
                     <p className='cart__listTotal-price'>{cart.reduce((acc,res)=>(+acc + +res.price),0)}$</p>
                    </div>
                    <div style={{display: order ? "flex" : "none"}} className="cart__listTotal-input">
                        <input value={name} onChange={(e)=>setName(e.target.value)} className='cart__listTotal-input--item' placeholder='name' type="text" />
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} className='cart__listTotal-input--item' placeholder='phone' type="tel" />
                    </div>
                    <button
                        onClick={()=>{
                            if(!order){
                                setOrder(true)
                            }else{
                                addOrder()
                            }
                        }}
                        className='cart__listTotal-btn'
                        >
                        {order ? "Заказать" : "Оформить заказ"}
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;