import React, { useState, useEffect } from 'react';
import "./index.scss";
import PageBox from "./../Box";
import ActivePage from "./../ActivePage";
import Loading from "./../Loading";

import { colorArr, profileColor} from "./../../js/colors";
import { shuffle } from '../../js/helpers';

// import { About, Work, Contact, Playground } from "../pages";

let ranNums = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
const pages = [{
  "id": ranNums[0],
  "page": "About",
  "link": "/about",
},{
  "id": ranNums[1],
  "page": "Resume",
  "link": "/resume",
},{
  "id": ranNums[2],
  "page": "Works",
  "link": "/works",
},{
  "id": ranNums[3],
  "page": "Playground",
  "link": "/playground",
},{
  "id": ranNums[4],
  "page": "Contact",
  "link": "/contact",
}];

const texts = [
  {
    "id": ranNums[5],
    "page": "Programming is just 1 or 0",
  }
];

const Home = () => {
  const [active, setActive] = useState(false);
  const [pagetitle, setPageTitle] = useState('');
  const [pagenum, setPageNum] = useState(null);
  const [bgcolor, setbgColor] = useState({});
  const [isloading, setLoading] = useState(true);
  const [activeBgColor, setActiveBgColor] = useState("black");

  const pageClick = ({ title, num, color }) => {

    setPageTitle(title);
    setActive(true);
    setPageNum(num);
    setbgColor(color);
    setActiveBgColor(color[0]);

  }

  const pageClasses = () => {
    let wrapperClass = 'wrapper ';
    if(isloading) {
      wrapperClass += 'isloading ';
    }
    if(active) {
      wrapperClass += 'wrapper-active ';
    } else {
      wrapperClass += 'wrapper-default '
    }
    return wrapperClass;
  }

  const togglePage = () => {
    setActive(!active);
  }

  useEffect(
    () => {
      let timer1 = setTimeout(() => setLoading(false), 2100);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  useEffect(() => {
    pageClasses();
  }, [isloading, active]);

  return (

    <div className={ pageClasses() }>
      { isloading ? 
        <Loading />
        :
        // TODO: needed to change this
        colorArr.map((color, index) => 
          {
            // TODO: Make function of showing random Boxes
            if(index === 7) {
              for(let i = 0; i < pages.length; i++) {
                if (pages[i].id === index) {
                  // console.log("I AM NUMBER 7");
                  return (
                    <>
                      <PageBox randex={ranNums[index]} num="logo" classname="logobox" title={`SONNY TAMBIAC`} color={ profileColor } key="logo" />
                      <PageBox randex={ranNums[index + 1]} handleBoxClick={ pageClick } num={index} title={pages[i].page} color={color} key={`page-` + index } />
                    </>
                  )
                } else {
                  // console.log("I AM NUMBER ");
                  return (
                    <>
                      <PageBox randex={ranNums[index]} num="logo" classname="logobox" title={`SONNY TAMBIAC`} color={ profileColor } key="logo" />
                      <PageBox randex={ranNums[index + 1]} num={index} title={color[0].title} color={color} key={`page-` + index } />
                    </>
                  )
                }
                
              }
              // return <PageBox handleBoxClick={ pageClick } num="logo" classname="logobox" title={`SONNY TAMBIAC`} color={`#000`} key="logo" />
            }
            for(let i = 0; i < pages.length; i++) {
              if (pages[i].id === index) {
                return <PageBox randex={ranNums[index]} handleBoxClick={ pageClick } num={index} title={pages[i].page} color={color} key={`page-` + index } />
              }
            } 
            return <PageBox randex={ranNums[index]} num={index} title={color[0].title} color={color} key={`page-` + index } />
          }
        )}

        <ActivePage key={'activepage'} isActive={active} togglePage={ togglePage } bgcolor={ activeBgColor } color={bgcolor} pageIndex={pagenum} title={pagetitle} />
      
    </div>
        
  );
};

export default Home;
