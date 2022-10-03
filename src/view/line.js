import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

function Line(){
    const points1=[ 
        {x:26,y:120},
        {x:33,y:86},
        {x:48,y:99},
        {x:50,y:55},
        {x:60,y:65},
        {x:65,y:60},
        {x:67,y:60},
        {x:70,y:65},
        {x:72,y:89},
        {x:100,y:53},
        {x:120,y:51},
        {x:122,y:56},
        {x:136,y:56},
        {x:140,y:50},
        {x:146,y:48},
        {x:149,y:51},
        {x:153,y:56},
        {x:169,y:53},
        {x:172,y:57},
       {x:174,y:63},
       {x:178,y:63},
       {x:180,y:66},      
       {x:182,y:65},
       {x:186,y:67},
       {x:190,y:63},                      
       {x:196,y:61},
       {x:200,y:64},
       {x:203,y:77},
       {x:210,y:61},
       {x:215,y:74},                                          
       {x:220,y:72},
       {x:224,y:84},
       {x:229,y:90},
       {x:233,y:83},
       {x:239,y:94},
       {x:246,y:94},
       {x:265,y:84},
       {x:276,y:69},
   {x:280,y:64},
   {x:284,y:62},
   {x:288,y:59},
   {x:290,y:67},
   {x:294,y:81},
   {x:299,y:85},
   {x:301,y:75},
   {x:305,y:72},
   {x:309,y:77},
   {x:330,y:99},
   {x:350,y:88},
   {x:378,y:90},
   {x:390,y:69},
   {x:418,y:67},
   {x:435,y:75},
   {x:453,y:74},
   {x:469,y:85},
   {x:480,y:117},
   {x:520,y:179},
   {x:537,y:155},
   {x:549,y:168},
   {x:560,y:164},
   {x:574,y:170},
   {x:582,y:177},
   {x:589,y:168},
   {x:590,y:163},
   {x:599,y:160}
   ]
   const points2=[
    {x:26,y:100},
   {x:35,y:60},
   {x:40,y:80},
   {x:60,y:20},
   {x:80,y:80},
   {x:100,y:80},
   {x:120,y:60},
   {x:140,y:100},
   {x:160,y:90},
   {x:180,y:80},
   {x:200,y:110},
   {x:220,y:10},
   {x:240,y:70},
   {x:260,y:100},
   {x:280,y:100},
   {x:300,y:40},
   {x:320,y:0},
   {x:340,y:100},
   {x:360,y:99},
   {x:380,y:120},
   {x:400,y:77},
   {x:420,y:70},
   {x:440,y:80},
   {x:460,y:95 },
   {x:480,y:99},
   {x:500,y:83},
   {x:520,y:81},
   {x:550,y:77},
   {x:560,y:84},
   {x:580,y:88},
   {x:588,y:90},
   {x:599,y:99},
   ]

   const points3=[
    {x:26,y:111},
   {x:36,y:90},
   {x:46,y:96},
   {x:56,y:99},
   {x:66,y:105},
   {x:76,y:102},
   {x:86,y:110},
   {x:96,y:104},
   {x:106,y:97},
   {x:116,y:100},
   {x:126,y:94},
   {x:136,y:88},
   {x:146,y:91},
   {x:156,y:86},
   {x:166,y:83},
   {x:176,y:89},
   {x:186,y:95},
   {x:196,y:99},
   {x:206,y:102},
   {x:216,y:108},
   {x:226,y:103},
   {x:236,y:111},
   {x:246,y:114},
   {x:256,y:121},
   {x:266,y:108},
   {x:286,y:111},
   {x:306,y:130},
   {x:336,y:123},
   {x:346,y:118},
   {x:356,y:110},
   {x:366,y:119},
   {x:376,y:114},
   {x:399,y:104},
   {x:420,y:139},
   {x:445,y:128}

   ]
   const polyline1 = points1.map((c)=> c.x + "," + c.y).join(' ');
   const polyline2 = points2.map((d)=> d.x + "," + d.y).join(' ');
   const polyline3 = points3.map((e)=> e.x + "," + e.y).join(' ');
   const types=[
    {
        id:1,
        label:"Speed",
        fill:"none",
        stroke:"green",
        color:"#36B37e",
        strokeWidth:"1",
        points:polyline1
        
    },
    {
        id:2,
        label:"Channel A",
        fill:"none",
       color:"#0074d9",
       stroke:"#0074d9",
       strokeWidth:"1",
       points:polyline2

    },
    {
        id:3,
        label:"Channel B",
        fill:"none",
       color:"#black",
       stroke:"#black",
       strokeWidth:"1",
       points:polyline3
    }
];
const[selectedOption,setSelectedOption] = useState(types);

const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
    
  };
  const onRemove = (selectedOption) => {
    console.log("remove", selectedOption);
  };
  
  
    return(<>
        <Multiselect options={selectedOption}
        displayValue="label"
        onSelect={handleChange}
        onRemove={onRemove}
        styles={colorStyles}
        
        active ={selectedOption }
        onChange={() => setSelectedOption(types)}        
        />
         
        </>)
};
export default Line;
