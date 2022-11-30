import React from 'react';
import Card from './placesCard/placesCard';

const SectionFive = (props)=> {
    return (
        <section className='container section_5'>
            <div className='like_places hidden'>
                <h2>Places you might like</h2>
                <div className='filter'>
                    <button>All</button>
                    <button>Popular</button>
                    <button>Close to me</button>
                    <button>Have not visited</button>
                </div>
            </div>
            <Card data={props.newData}/>
            <span id='show_more' className='hidden'>Show more</span>
        </section>
    );
}

export default SectionFive;