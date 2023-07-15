import React from 'react';
import {RiInstagramFill} from 'react-icons/ri'
import {FaFacebookF, FaVk} from 'react-icons/fa'

const Footer = ({isDark}) => {
    return (
        <footer className='footer'>
            <div className="container footer__bg" style={{background: isDark ? "black" : "white"}}>
                <nav className='footer__nav'>
                    <div className="footer__left">
                        <h4 className='footer__title'>Follow Us.</h4>
                        <p className='footer__info' style={{color: isDark ? "white" : "#515759"}}>We are always looking for new <br />
                        projects and collaborations. <br />
                        Feel free to contact us.</p>
                        <ul className='footer__list'>
                            <li className='footer__icon'><a href="https://vk.com/pak_s"><FaVk/></a></li>
                            <li className='footer__icon'><a href="https://www.instagram.com/seva_krot/"><FaFacebookF/></a></li>
                            <li className='footer__icon'><a href="https://www.facebook.com/park.siyavush/"><RiInstagramFill/></a></li>
                        </ul>
                        <p className='footer__email'>© Pak S</p>
                    </div>
                    <div className='footer__right'>
                        <h4 className='footer__title'>Contact Us.</h4>
                        <p className='footer__info' style={{color: isDark ? "white" : "#515759"}}> One Apple Park Way <br />
                        Cupertino, CA 95014</p>
                        <p className='footer__info footer__tel' style={{color: isDark ? "white" : "#515759"}}>(408) 996-1010</p>
                        <p className='footer__email'>support@apple.com</p>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;