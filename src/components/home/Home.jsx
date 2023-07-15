// Импорт необходимых зависимостей
import React, { useState, useEffect }  from 'react';
import Popup from '../popup/Popup';
import Search from '../../assets/Search';
import axios from '../../utils/axios';
import ProductsLoader from '../../assets/ProductsLoader';
import Switch from '@mui/material/Switch';
import MySelect from '../../assets/MySelect';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
// Основной компонент Home
const Home = ({isDark, setIsDark, cart, setCart}) => {
    // Инициализация состояний count и search с помощью хука useState
    const [count, setCount] = useState(1);
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);
    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('')

    const getAllProducts = () => {
        axios('/products')
        .then(({data}) => setProducts(data))
    }

    useEffect(()=>{
        getAllProducts();
    }, [])
 
    return (
        <section className='home'>
            <div className="container home__bg" style={{background: isDark ? "black" : "white"}}>
                <div className="home__top">
                    <h2 className="home__title">Check also</h2>
                    <Switch onChange={()=> setIsDark(!isDark)} {...label} />
                    <button type='button' className='popup__btn' onClick={()=>setActive(true)}>Добавить товар</button>
                    <MySelect
                        defaultValue="Сортировать по цене"
                        options={[
                            {value: 'big', name: '\u25B2 сначала дешевые'},
                            {value: 'small', name: '\u25BC сначала дорогие'}
                        ]}
                        setSort={setSort}
                    />
                    <div className="home__right">
                        <Search search={search} setSearch={setSearch} setCount={setCount}/>
                        {/* <p className="home__see">See all> </p> */}
                    </div>
                </div>
                <ProductsLoader settings={{ search, sort, count, isDark, getAllProducts, products, setCount, cart, setCart}}/>
            </div>
            <Popup active={active} setActive={setActive} getAllProducts={getAllProducts}/>
        </section>
    );
};


export default Home;
