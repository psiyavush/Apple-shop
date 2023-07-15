import React from 'react';
import Product from '../components/home/Product';
import MyButton from '../components/button/MyButton';

const ProductsLoader = ({ settings }) => {

    const { search, sort, count, isDark, getAllProducts, products, setCount, cart, setCart } = settings;

    // Фильтрация продуктов по поисковому запросу
    let productFilterAfterSearch = products.filter((item) => item.title.toUpperCase().includes(search.toUpperCase())).length;


    return (
        <>
        <div className="home__content">
            {  
                // Отображение отфильтрованных продуктов
                products.sort((a,b) =>{
                    if(sort === "small"){
                        return a.price - b.price;
                    }
                    else if(sort==="big"){
                        return b.price - a.price;
                    }
                    return 0
                }).filter((item) => item.title.toUpperCase().includes(search.toUpperCase())).reverse()
                    .filter((item, idx) => idx < 4 * count)
                    .map((item) => (
                        <Product key={item.id} getAllProducts={getAllProducts} item={item} isDark={isDark} cart={cart} setCart={setCart}/>
                    ))
            }
        </div>
        {
            // Отображение сообщения, если поиск не дал результатов
            !productFilterAfterSearch && <h2 className='home__undefined'>По данному запросу ничего не найдено</h2>
        }
        <div className="home__moreBtn">
        {
            // Кнопка скрытия или отображения дополнительных продуктов
            count * 4 >= products.length ?
                <MyButton onClick={() => setCount(1)} className="home__moreBtn-btn">Скрыть</MyButton> :
                <MyButton onClick={() => setCount(count + 1)} style={{ display: count * 4 >= productFilterAfterSearch ? 'none' : 'inline-block' }} className="home__moreBtn-btn">Показать ещё</MyButton>
        }
        {
            // Отображение информации о количестве отображаемых продуктов
            productFilterAfterSearch ?
                <span>
                    Показано {count * 4 >= productFilterAfterSearch ? productFilterAfterSearch : 4 * count} из {productFilterAfterSearch}
                </span>
                :
                " "
        }
        </div>
        
        </>
        
        
    );
};

export default ProductsLoader;