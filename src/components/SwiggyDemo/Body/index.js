import React, { useEffect, useState } from 'react'
import Crousel from './mind'

const SwiggyBody = () => {
    const[data, setData] = useState();

    useEffect(()=>{
        apiCall();
    },[])
// console.log(data)
    const apiCall = async() =>{
        const swiggyData = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6258652&lng=77.20895180000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=9.3503715&lng=76.6239423&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const swiggyJson = await swiggyData.json();
        setData(swiggyJson?.data)
    }

  return (
    <div>  
        <Crousel data={data?.cards[0]?.card?.card}/>
    </div>
  )
}

export default SwiggyBody
