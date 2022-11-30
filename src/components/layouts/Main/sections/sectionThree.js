import React from 'react';

const SectionThree = (props)=> {
    return (
        <section className='container section_3'>
            <div className='pop_dest hidden'>
                <h2>Popular destinations of the world</h2>
                <div>
                    <button id='left' onClick={({target})=> {
                        const elementScrolled = target.parentElement.parentElement.nextElementSibling;
                        elementScrolled.scrollLeft -= 80;
                    }}>←</button>
                    <button id='right' onClick={({target})=> {
                        const elementScrolled = target.parentElement.parentElement.nextElementSibling;
                        elementScrolled.scrollLeft += 80;
                    }}>→</button>
                </div>
            </div>
            <div className='gallery hidden'>
                {
                    props.popularDest.map((image, i)=> {
                        return (
                            <div key={'key-'+i}>
                                <button><a href={'#/'+image.title}>{image.title} <span>→</span></a></button>
                                <img src={image.image} alt={image.title}/>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default SectionThree