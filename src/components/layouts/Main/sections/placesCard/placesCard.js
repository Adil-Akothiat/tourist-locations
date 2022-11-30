import React from 'react';
import {ReactComponent as FireIcon} from '../../../../assets/icons/fire.svg';
import {ReactComponent as LocationIcon} from '../../../../assets/icons/location.svg';

const Card = (props)=> {
    return (
        <div className='places hidden'>
            {props.data.map(({title ,image, views, location}, i)=> {
                    return (
                        <div key={'key-'+i}>
                            <div className='top'>
                                <button><span>{views}</span> <FireIcon /></button> 
                                <button onClick={({target})=> {
                                    target.firstElementChild.classList.toggle('saved');
                                    if(target.firstElementChild.classList.contains('saved')) alert('saved!')
                                    else alert('unsaved!')
                                }}><span className='save'></span></button>
                            </div>
                            <div className='bottom'>
                                <div className='location'>
                                    <LocationIcon /><a href={'#/'+location}>{location}</a>
                                </div>
                                <a href={'#/'+title}>{title}</a>
                            </div>
                            <img src={image} alt={title}/>
                        </div>
                    );
                })}
        </div>
    );
}

export default Card;