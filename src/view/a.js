import React, { useState } from 'react';
import '../scss/style.scss';
import {IoCloseCircleSharp} from 'react-icons/io5';
import {GoPlus} from 'react-icons/go';

//import axios from 'axios';

function Slicer(){

    //const url=""
    const [data,setData] = useState([
        {idnum:"",start:'',
        end: '',
        minstart:'',
        minend:""}
    ] )

    const addRow = () => {
        let object={
        idnum:'',
        start:'',
        end: '',
        minstart:'',
        minend:""
       }
       setData([...data, object])

    }

    const removeRow = (index) =>{
        const row = [...data];
        row.splice(index,1);
        setData(row);

    }

    const handlee =(e,index) => {
        const {id, value} = e.target;
        const row = [...data];
        row[index][id] = value;
        setData(row);

    }
      const slicerinput = () => {

        return data?.map((data,index) => {
            let box= 865-25
          const emove = box/60;
          const sdiff = data.start.slice(-2)
          const ediff = data.end.slice(-2)
          const diff = ediff - sdiff
          const x2_deff = diff * emove
          const x_deff = 25 + sdiff *emove;


         const box2= x2_deff -x_deff 
         const move = box2/100
         const nms=data.minstart.slice(0,-1) * move
         const spercent=nms + x_deff
         const nme = data.minend.slice(0,-1)   * move;
         const epercent =nme +x_deff 
        
          return (
            <svg viewBox="0 0 800 250" className="chart p ml-2">
            <g key={`slicer ${index}`}>
                <rect 
                x= {x_deff}
                y="0"
                height="180"
                width={x2_deff}
                fill={'blue'}
                
                fill-opacity="0.1"
                
                />
                <rect 
                x= {spercent}
                y="0"
                height="180"
                width={epercent}
                fill={'pink'}
                fill-opacity="0.5"
                />
                
            </g></svg>
          )
        })
    }
   
    //x=25+pading 25 +d(60/795-25)
    return(
        <> <svg viewBox="0 -20 800 250" className="chart p ml-2">
        <g class="grid x-grid" id="xGrid">
    
      <line x1="25" x2="25" y1="0" y2="180"></line>
      <line x1="95" x2="95" y1="0" y2="180"></line>
      <line x1="165" x2="165" y1="0" y2="180"></line>
      <line x1="235" x2="235" y1="0" y2="180"></line>
      <line x1="305" x2="305" y1="0" y2="180"></line>
      <line x1="375" x2="375" y1="0" y2="180"></line>
      <line x1="445" x2="445" y1="0" y2="180"></line>
      <line x1="515" x2="515" y1="0" y2="180"></line>
      <line x1="585" x2="585" y1="0" y2="180"></line>
      <line x1="655" x2="655" y1="0" y2="180"></line>
      <line x1="725" x2="725" y1="0" y2="180"></line>
      <line x1="795" x2="795" y1="0" y2="180"></line>
     
      
      
    </g>
    <g class="grid y-grid" id="yGrid">
      <line x1="25" x2="795" y1="30" y2="30"></line>
      <line x1="25" x2="795" y1="0" y2="0"></line>
      <line x1="25" x2="795" y1="60" y2="60"></line>
      <line x1="25" x2="795" y1="90" y2="90"></line>
      <line x1="25" x2="795" y1="120" y2="120"></line>
      <line x1="25" x2="795" y1="150" y2="150"></line>
      <line x1="25" x2="795" y1="180" y2="180"></line>
      <line x1="25" x2="795" y1="180" y2="180"></line>
    
    </g>
      <g class="labels x-labels">
      <text x="25" y="195">10:00</text>
      <text x="95" y="195">10:05</text>
      <text x="165" y="195">10:10</text>
      <text x="235" y="195">10:15</text>
      <text x="305" y="195">10:20</text>
      <text x="375" y="195">10:25</text>
      <text x="445" y="195">10:30</text>
      <text x="515" y="195">10:35</text>
      <text x="585" y="195">10:40</text>
      <text x="655" y="195">10:45</text>
      <text x="725" y="195">10:50</text>
      <text x="795" y="195">11:00</text>
      <text x="375" y="210" class="label-title">Time</text>
    </g>
    <g class="labels y-labels">
      <text x="20" y="15">1</text>
      <text x="20" y="180">0</text>
      
    </g>
    
    {slicerinput()}
        
    <polyline
       fill="none"
       stroke="#0074d9"
       stroke-width="1"
       points="
         26,100
         35,60
         40,80
         60,20
         80,80
         100,80
         120,60
         140,100
         160,90
         180,80
         200, 110
         220, 10
         240, 70
         260, 100
         280, 100
         300, 40
         320, 0
         340, 100
         360, 99
         380, 120
         400, 77
         420, 70
         440, 80
         460, 95 
         480, 99
         500, 83
         520,81
         550,77
         560,84
         580,88
         588,90
         599,99

         "
        />

      <polyline 
      fill="none"
      stroke="black"
      stroke-width="1"
      points="
      26,111
      36,90
      46,96
      56,99
      66,105
      76,102
      86,110
      96,104
      106,97
      116,100
      126,94
      136,88
      146,91
      156,86
      166,83
      176,89
      186,95
      196,99
      206,102
      216,108
      226,103
      236,111
      246,114
      256,121
      266,108
      286,111
      306,130
      336,123
      346,118
      356,110
      366,119
      376,114
      399,104
      420,139
      445,128

      "
      
      />
      <polyline
       fill="none"
       stroke="green"
       stroke-width="1"
       points=" 
         26,120
         33,86
         48,99
         50,55
         60,65
         65,60
         67,60
         70,65
         72,89
         100,53
         120,51
         122,56
         136,56
        140,50
        146,48
        149,51
        153,56
        169,53
        172,57
        174,63
        178,63
        180,66
        182,65
        186,67
        190,63
        196,61
        200,64
        203,77
        210,61
        215,74
        220,72
        224,84
        229,90
        233,83
        239,94
        246,94
        265,84
        276,69
        280,64
        284,62
        288,59
        290,67
        294,81
        299,85
        301,75
        305,72
        309,77
        330,99
        350,88
        378,90
        390,69
        418,67
        435,75
        453,74
        469,85
        480,117
        520,179
        537,155
        549,168
        560,164
        574,170
        582,177
        589,168
        590,163
        599,160
       "
     />  
         
      </svg>
        
        <label htmlFor="service"></label>
        {data.map((data, index) => (
            
            <div  key={index} className="listrow">
            <p className="id">ID</p>
            <input onChange={(e)=>handlee(e,index)} id="idnum" value={data.idnum} className="inputid" type="text" placeholder='01' />
            
            <p className="start">START</p>
            <input onChange={(e)=>handlee(e,index)} id="start" value={data.start} className="startbox" type="text" placeholder='10:00' />

            <p className="end">END</p>
            <input  onChange={(e)=>handlee(e,index)} id="end" value={data.end} className="endbox" type="text" placeholder='10:06' />

            <p className="minstart">MIN START</p>
            <input onChange={(e)=>handlee(e,index)} id="minstart" value={data.minstart} className="minstartbox" type="text" placeholder='10%' />

            <p className="minend">MIN END</p>
            <input  onChange={(e)=>handlee(e,index)} id="minend" value={data.minend} className="minendbox" type="text" placeholder='90%' />
            
            <IoCloseCircleSharp onClick={() => removeRow(index)} className="closetime" size={22}></IoCloseCircleSharp>
        </div>


        ))}
        
        <button  onClick= {addRow} className='addRow mt-2'><GoPlus className="goplus" size={30}></GoPlus></button>
        

        </>

    );

}
   export default Slicer;     
    