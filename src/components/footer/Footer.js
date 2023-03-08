import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="social-media">
                <a href="https://twitter.com/your-twitter-handle">
                    <i>Twitter</i>
                </a>

                <a href="https://www.linkedin.com/in/mohammad-al-smadi-35a0171a1/">
                    <i>linkedin</i>
                </a>
                <a href="https://github.com/mohammadalsmadi2000">
                    <i>github</i>
                </a>
            </div>
            <div className="author">
                <p className='title'>Written by Mohammad Smadi</p>
            </div>
        </footer>
    );
}

export default Footer;
