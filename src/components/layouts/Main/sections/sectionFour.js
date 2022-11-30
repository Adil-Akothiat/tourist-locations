import React from 'react';
import GetProfile from './getProfile/getProfile';
import Card from './placesCard/placesCard';

const SectionFour = (props)=> {
    return (
        <section className='container section_4'>
            <div className='best_places hidden'>
                <h2>Best places around you</h2>
                <div className='filter'>
                    <button>All</button>
                    <button>Up to 1 mile</button>
                    <button>10 to 100 miles</button>
                    <button>1 to 10 miles</button>
                    <button>100+ miles</button> 
                </div>
            </div>
            <Card data={props.data}/>
            <span id='show_all' className='hidden'>Show all</span>
            <GetProfile />
        </section>
    );
}

export default SectionFour;