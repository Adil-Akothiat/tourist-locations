import React from 'react';

const SectionTwo = ()=> {
    return (
        <section className='container section_2'>
            <div className='photos hidden'>
                <img src={require('../../../assets/img-1.jpg')} alt='tourist place'/>
                <img src={require('../../../assets/img-2.jpg')} alt='tourist place'/>
            </div>
            <div className='about_us hidden'>
                <h2>About Us</h2>
                <p className='p_1'>Local Tourism Guide Mobile Application</p>
                <p className='p_2'>The Local Tourism Guide mobile application is designed to serve as a comprehensive guide for tourists and visitors, showcasing the attractions, landmarks, restaurants, events, and cultural experiences available in the local area. The app aims to enhance the tourism experience, promote local businesses, and encourage exploration of the community's unique offerings.</p>
                <button><a href='#/find-perfect-places-for-me'>Find perfect places for me</a></button>
            </div>
        </section>  
    )
}

export default SectionTwo;