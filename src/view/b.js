import React, {  } from 'react';
import '../scss/style.scss';
//import {TiDeleteOutline} from "react-icons/ti";
import Slicer from './a';
import {} from "react-icons/im";
import Line from './line'
import {HiOutlineScissors} from 'react-icons/hi';

function Index(){

    


    return ( 
        
    <>
    <span><h5> Selected Channel : </h5></span>
    <div className='mt-2'>
        
        <div class="channelrow p "> 
        <Line/>
                
        </div>
       
    </div>
    <div className="graphrow graph ">
    <div className="scissor">
                    <HiOutlineScissors size={25}/>
                    </div>
    <p className="select">Selected Channel</p>
                    
        <Slicer />
    </div>
    <div className=" ">
        
    </div>
    </>
     );

}
        
export default  Index;
 