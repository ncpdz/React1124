import React from 'react';
import Slider from './slider';
import ListCateHome from './listCateHome';
import NewArrivals from './newArrivals';
import HomeC1 from './homeC1';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomeUser() {
  return (
    <div className="">
      <Slider />
      <ListCateHome/>
      <NewArrivals/>
      <div className='flex w-full justify-center gap-5 mt-10'>
        <img className='object-cover w-[550px]' src="https://media-fmplus.cdn.vccloud.vn/uploads/sliders/76e622ce-cc33-466f-a79f-5b1945564ded.jpg" alt="" />
        <img className='object-cover w-[550px]' src="https://media-fmplus.cdn.vccloud.vn/uploads/sliders/5b32f1a9-0b58-4abd-9601-3f4a45bc3c60.jpg" alt="" />
      </div>
      <HomeC1 />
      <img src="https://media-fmplus.cdn.vccloud.vn/uploads/sliders/9ada03d4-6b3f-4a28-a7e0-646d0ace64e9.png" alt="" />
    </div>
  );
}

export default HomeUser;
