import React from 'react';
import {ImCross} from 'react-icons/im'
import axios from '../../utils/axios';
import { toast } from 'react-toastify';

const Popup = ({active, setActive, getAllProducts}) => {

    const addProductHandler = (e)=>{
        e.preventDefault();
        axios.post('/products', {
            image: e.target[0].value,
            title: e.target[1].value,
            price: e.target[2].value,
            owen: true
        }).then(()=>{
            getAllProducts()
            setActive(false)
            toast("Товар успешно добавлен")
            e.target.reset()
        }).catch(()=>{toast('Error! Something went wrong with the product')});
    }

    return (
        <div onClick={(e)=> {
            if (e.target.className.toString().includes('active')) {
                setActive(false);
            }
        }}className={`overlay ${active ? 'overlay_active' : ''}`}>
            <form action="" className='popup' onSubmit={(e)=>{addProductHandler(e)}}>
            <span onClick={()=> setActive(false)} className='popup__cross'><ImCross/></span>
                <label className='popup__label' htmlFor="img">Фотография:</label>
                <input className='popup__input' type="text" name="" id="img" />

                <label className='popup__label' htmlFor="title">Название:</label>
                <input className='popup__input' type="text" name="" id="title" />

                <label className='popup__label' htmlFor="price">Цена:</label>
                <input className='popup__input' type="text" name="" id="price" />
                <button className='popup__btn' type='submit'>Добавить продукт</button>
            </form>
        </div>
    );
};

export default Popup;