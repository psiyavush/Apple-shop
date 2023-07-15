import React from 'react';
import axios from '../../utils/axios';
import { toast } from 'react-toastify';

const Product = ({item, getAllProducts, isDark, setCart, cart}) => {
    const {image, title, price, id} = item;

    const deleteProduct = ()=>{
        axios.delete(`/products/${id}`)
        .then(()=> {
            getAllProducts()
            toast("Товар успешно удален")
        }).catch(()=> toast(`Could not delete`))
    }

    return (
        <div className="home__card">
            <img src={image} alt={title} className="home__card-img"/>
            <h4 className="home__card-name">{title}</h4>
            <p className="home__card-price" style={{color: isDark ? "white" : "#515759"}}>{price > 0 ? `$${price}.00` : 'Free*'}</p>
            <div className="home__card-owen">
            <button 
                disabled={cart.findIndex((el)=>el.id === id) > -1} 
                onClick={()=>setCart([...cart, item])} 
                style={{background: price <= 0 && 'orange' }} 
                className="home__card-btn">{price > 0 ? 'Купить' : 'Применить'}
            </button>
            <button onClick={()=>deleteProduct()} style={{background:'red'}} className="home__card-btn">Удалить</button>
            </div>
        </div>
    );
};

export default Product;