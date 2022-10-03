import React from 'react';
import '../scss/style.scss';
import {TiDeleteOutline} from "react-icons/ti";
import Slicer from './a';
import {ImPlus} from "react-icons/im";

import {HiOutlineScissors} from 'react-icons/hi';

export default class Index extends React.Component {
    render() {
    return ( 
        
    <>
    <span><h5> Selected Channel : </h5></span>
    <div className=' mt-2'>
        <div class="channelrow p ">

        <button className="button1 ml-2 mt-2"><TiDeleteOutline size={18}></TiDeleteOutline> Abaaaa</button>
        <button className="button2 mt-2"><TiDeleteOutline size={18} ></TiDeleteOutline> Bbbbb</button>
        <button className="button3 mt-2"><TiDeleteOutline size={18} ></TiDeleteOutline> Ccccc</button>
        <button className="button4 mt-2"><TiDeleteOutline size={18} ></TiDeleteOutline> Ddddda</button>

        <button className="addchannel" color="grey"><ImPlus className="addicon" size={20}></ImPlus></button>
            
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

}
 