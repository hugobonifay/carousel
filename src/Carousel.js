import './Carousel.css';
import { Fragment, lazy, Suspense } from 'react';
import Spinner from "./Spinner";
import { IconButton } from '@material-ui/core';
import { ArrowForwardIosRounded } from '@material-ui/icons';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
const Items = lazy(() => import("./Items"));

function Carousel() {
  return (
    <Fragment>
      <div className="section1">
        <h1>Notre project</h1>
        <div className="iconleft">
          <IconButton 
            style={{
              color:"black", 
              background:"white"
            }}
            onClick={() => document.getElementById("srcoll1").scrollLeft += -250}
          >
            <ArrowBackIosRoundedIcon style={{fontSize:15}} />
          </IconButton>
        </div>
        <Suspense fallback={<Spinner/>}>
          <div className="ScrollContainer" id="srcoll1">
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <div className="fixBugMarginRight" />
          </div>
        </Suspense>
        <div className="iconright">
          <IconButton 
            style={{
              color:"black", 
              background:"white"
            }}
            onClick={() => document.getElementById("srcoll1").scrollLeft += 250}
          >
            <ArrowForwardIosRounded style={{fontSize:15}} />
          </IconButton>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
