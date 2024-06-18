import React, { useEffect, useState } from 'react'
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

const Crousel = ({data}) => {
    const Base_Url_Image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';
    const [image, setImage] = useState([]);
    const [imageIndex, setImageIndex] = useState({first: 0,second:6})

    useEffect(()=>{
        setImage(data?.imageGridCards?.info?.slice(0,6))
    },[data])

    const box = document.querySelector('.no-scrollbar')

    const handleImage = (move) =>{
        if(move === 'backward'){
            let width = box.clientWidth / 2;
            box.scrollLeft = box.scrollLeft - width;
            console.log(width,'1111')
        }else{
            let width = box.clientWidth / 2;
            box.scrollLeft = box.scrollLeft + width;
            console.log(width,'2222')
        }
        // if(move === 'forward' && (data?.imageGridCards?.info?.length >= imageIndex?.second)){
        //     setImageIndex({...imageIndex,first:imageIndex?.first + 3, second: imageIndex?.second + 3})
        //     setImage(data?.imageGridCards?.info?.slice(imageIndex?.first + 3,imageIndex?.second + 3))
        // }else if(move === 'backward' && imageIndex?.first !== 0){
        //     setImageIndex({...imageIndex,first:imageIndex?.first - 3, second: imageIndex?.second - 3})
        //     setImage(data?.imageGridCards?.info?.slice(imageIndex?.first - 3,imageIndex?.second - 3)) 
        // }
    }

  return (
    <>
    <div className='flex justify-center'>
      <div className='flex justify-between w-[1008px] pl-4 pt-4 pb-1'>
        <p className='text-[24px] font-extrabold'>{data?.header.title}</p>
        <div className='flex'>
        <MdOutlineArrowCircleLeft size={32} onClick={()=>handleImage('backward')}
            // className={`${imageIndex?.first === 0 ? 'opacity-20' : 'cursor-pointer'}`}
        />
        <MdOutlineArrowCircleRight size={32} onClick={()=>handleImage('forward')}
            // className={`${(data?.imageGridCards?.info?.length <= imageIndex?.second) ? 'opacity-20' : 'cursor-pointer'}`}
        />
        </div>
      </div>
    </div>
    <div className='flex justify-between w-[1010px] ml-44 overflow-x-hidden overflow-x-scroll no-scrollbar scroll-smooth'>
        {data?.imageGridCards?.info?.map((val)=>(
            <img src={Base_Url_Image + val?.imageId} className='w-36 h-44 m-4'/>
        ))}
    </div>
    </>
  )
}

export default Crousel
