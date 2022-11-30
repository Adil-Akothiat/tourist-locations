import React from 'react';

const SectionTwo = ()=> {
    return (
        <section className='container section_2'>
            <div className='photos hidden'>
                <img src={require('../../../assets/img-1.jpg')} alt='tourist place'/>
                <img src={require('../../../assets/img-2.jpg')} alt='tourist place'/>
            </div>
            <div className='about_us hidden'>
                <h2>What About Us is about</h2>
                <p className='p_1'>Around Us is an upcoming search engine specialized in searching activities around you.</p>
                <p className='p_2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem</p>
                <button><a href='#/find-perfect-places-for-me'>Find perfect places for me</a></button>
            </div>
        </section>  
    )
}

export default SectionTwo;