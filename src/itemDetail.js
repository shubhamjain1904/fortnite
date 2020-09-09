import React,{useEffect,useState} from 'react';

import './App.css';


function Item({match}) {

useEffect(()=>{

    fetchItem();
    console.log(match);


},[]);

const[data,setData]=useState({
    images:{}
});

const fetchItem=async()=>{
    const dat=await fetch(`https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`);
    const datas= await dat.json();
    console.log(datas.data);

    setData(datas.data);
};


return (
    <div >
        <h1>{data.name}</h1>
        <h2>{data.description}</h2>
        <img src={data.images.icon} alt={data.images.icon}/>
    </div>
  );
}

export default Item;
