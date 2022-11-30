import React from 'react';

const Footer = ()=> {
    return (
        <footer>
            <ul> 
                <h1>Logo.me</h1>
                <li><a href='#/discover'>Discover</a></li>
                <li><a href='#/terms-of-use'>Terms of use</a></li>
                <li><a href='#/privacy-policy'>Privacy policy</a></li>
            </ul>
            <span>Copyright© {new Date().getFullYear()} Logo | <a href='https://github.com/Adil-Akothiat' target={'_blank'} rel='noreferrer'>Adil Akothiat</a></span>
        </footer>
    );
}

export default Footer;