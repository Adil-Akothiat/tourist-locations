import React from 'react';

const SectionOne = (props)=> {
    return (
      <div className='main_section_1'>
        <div className='hero_img'></div>
        <section className='container'>
          <div className='presentation hidden'>
            <h1 className='bold'>Discover the most beautiful places</h1>
            <h1 className='bold'>&I live the most beautiful experiences...</h1>
            <h2 className='bold'>For real!</h2>
            <p>
              There are alot of interesting places in Morocco, with new few search possibilities. With THE GUIDE, discover more places to visit
            </p>
          </div>
          <div className='search_bar hidden'>
            <label htmlFor='search'>
              <input type='text' name='search' id='search' placeholder='Start typing location name...' autoComplete='off'/>
              <button type='submit'>Search</button>
            </label>
            <div>
              {props.countries.map((country, i)=> <button className='search_btn' key={'btn'+i}><a href={"#/"+country}>{country}</a></button>)}
            </div>
          </div>
          <div className='description hidden'>
            <div>
              <div>
                <h3 className='bold'>Chefchaouen</h3>
                <p>The blue city</p>
              </div>
              <button><a href='#/country-details'>→</a></button>
            </div>
            <p>          
              "Chaouen is a city in northwest Morocco. It is the chief town of the province of the same name and is noted for its buildings in shades of blue, for which it is nicknamed the Blue City"
            </p>
          </div>
        </section>
      </div>
    );
};

export default SectionOne;