import React,{useEffect,useState} from 'react';

import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

useEffect(()=>{
    fetchItems();
},[]);

const[data,setData]=useState([]);



const fetchItems =async ()=>{
    const dat=await fetch('https://fortnite-api.com/v2/cosmetics/br');

    const datas= await dat.json();
    console.log(datas.data);

    setData(datas.data);


};
return (
    <div >
        {data.map(dat=>(
            <h1 key={dat.id}>
               <Link to={`/Shop/${dat.id}`}> {dat.name}</Link>

            </h1>
        ))}
    </div>
  );
}

export default Shop;
