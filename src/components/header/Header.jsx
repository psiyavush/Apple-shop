import React, {useState} from 'react';
import {BsApple, BsCartDash, BsCartPlusFill} from 'react-icons/bs'
import Cart from '../cart/Cart';
import { toast } from 'react-toastify';

const Header = ({isDark, cart, setCart}) => {
    const [active, setActive] = useState(false);
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className="header__watch" style={{background: isDark ? "black" : "white"}}>
                    <h1 className='header__title'><BsApple/>-SHOP</h1>
                    </div>
                    
                    <ul className='header__list'>
                        <li className='header__item'>Design</li>
                        <li className='header__item'>Health</li>
                        <li className='header__item'>Workout</li>
                        <li className='header__item'>Activity</li>
                        <li className='header__item'>Connect</li>
                        <li className='header__item header-cart' onClick={()=>{
                            if(cart.length > 0){
                                setActive(true)
                            } else {toast("Карзина пуста")}
                        }}>
                            {
                                cart.length > 0 ? <><BsCartPlusFill/> <span style={{fontSize: "18px"}}>{cart.length>0&&cart.length}</span></> : <BsCartDash/>
                            }    
                                
                        </li>
                    </ul>
                    
                </nav>
            </div>
            <Cart active={active} setActive={setActive} cart={cart} setCart={setCart}/>
        </header>
    );
};

export default Header;