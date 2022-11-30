import React, {useEffect, useState} from 'react';
import SectionFive from './sections/sectionFive';
import SectionFour from './sections/sectionFour';
import SectionThree from './sections/sectionThree';
import SectionTwo from './sections/sectionTwo';
import methods from '../../../Methods/methods';
import bestPlaces from '../../../data/bestPlaces.json';
import LastSection from './sections/lastSection';
import SectionOne from './sections/sectionOne';
import popularDest from '../../../data/popularDest.json';
import placesMightLike from '../../../data/placesMightLike.json';

const Main = ()=> {
  const [data, setData] = useState(bestPlaces.filter((element,i)=> i<=bestPlaces.length-11?element:null));
  const [showAll, setShowAll] = useState(true);
  const countries = ['Canada', 'Germany', 'Netherlands', 'Museum', 'Zoo', 'Monument', 'Fountain'];
  useEffect(()=> {
    // set Grid number of columns
    document.querySelector('.gallery').style.gridTemplateColumns = `repeat(${popularDest.length}, 1fr)`;
    // methods
    methods.focus([...document.querySelector('.section_5 .filter').children]);
    methods.focus([...document.querySelector('.filter').children]);
    const boxes = [];
    for(let container of [...document.querySelectorAll('.container')]) {
      for(let element of container.children) {
        boxes.push(element);
      }
    }
    methods.srollEffect(boxes);
    return;
  }, []);
  const [newData, setNewData] = useState(data.filter((place, i)=> i < data.length-5 ? place : null));
    const [show, setShow] = useState(true);
    useEffect(()=> {
        const btn = document.getElementById('show_more');
        btn.addEventListener('click', function() {
            if(show) {
                this.textContent='Show less';
                setShow(false);
                setNewData(placesMightLike);
            }else {
                this.textContent='Show more';
                setShow(true);
                setNewData(placesMightLike.filter((place, i)=> i < placesMightLike.length-5 ? place : null))
            }
        })
    }, [show]);
  useEffect(()=> {
    document.getElementById('show_all').addEventListener('click', function() {
      if(showAll) {
        setData(bestPlaces);
        setShowAll(false);
        this.textContent = 'Show less';
      }else {
        setData(bestPlaces.filter((element,i)=> i<=bestPlaces.length-11?element:null));
        setShowAll(true);
        this.textContent = 'Show all';
      }
    })
  }, [data, showAll]);
  return (
    <main>
      <SectionOne countries={countries}/>
      <SectionTwo />
      <SectionThree popularDest={popularDest}/>
      <SectionFour data={data}/>
      <SectionFive newData={newData}/>
      <LastSection />
    </main>
  );
}

export default Main;