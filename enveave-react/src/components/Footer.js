import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__box'>
                <div className='footer__box__left'>
                    <div className='footer__box__left__top'>
                        <h1>300+ K</h1>
                        <h4>Followers</h4>
                    </div>
                    <div className='footer__box__left__bottom'>
                        <h3>For any queries, reach out to us at Email : info@enveave.com</h3>
                    </div>
                </div>
                <div className='footer__box__right'>
                    <ul>
                        <li><h3>About Us</h3></li>
                        <li>nemo</li>
                        <li>sed</li>
                    </ul>
                    <ul>
                        <li><h3>The Process</h3></li>
                        <li>nemo</li>
                        <li>sed</li>
                    </ul>
                    <ul>
                        <li><h3>Causes</h3></li>
                        <li>est</li>
                        <li>minima</li>
                    </ul>
                    <ul>
                        <li><h3>Partner</h3></li>
                        <li>reiciendis</li>
                        <li>quod</li>
                    </ul>
                    <ul>
                        <li><h3>Support</h3></li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='footer__bottom'>
                <div className='footer__bottom__left'>
                    <h4>Copyright © 2020 Enveave Org All Rights Reserved.</h4>
                </div>
                <div className='footer__bottom__right'>
                    <h4>Privacy Policy</h4>
                    <h4>|</h4>
                    <h4>AML Policy</h4>
                    <h4>|</h4>
                    <h4>Use of cookies</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
