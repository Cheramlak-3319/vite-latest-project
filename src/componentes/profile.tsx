import React, { useState } from 'react'
import {FaCamera} from 'react-icons/fa'
import ImageFile from '../assets/channels4_banner.jpg'
import ImageFile1 from '../assets/new.jpg'
import Tabs from './Tabs'

const Profile = () => {
    const [baseUrl, setBaseUrl] = useState(ImageFile);
    const [profileUrl, setProfileUrl] = useState(ImageFile1);
  
    const handleImageChange = (event: any) =>{
        const file = event.target.files[0];

        if(file){
            setBaseUrl(URL.createObjectURL(file));
        }
    }

    const handleProfileChange = (event:any) => {
      const file = event.target.files[0];

      if(file){
        setProfileUrl(URL.createObjectURL(file));
      }
    }

return (
    <div className='w-[94%] ml-[5rem] relative'>
      <div className='relative'>
        <img src={baseUrl} alt="banner" className="w-full h-60 object-cover"/>
        <button className="absolute top-2 right-2 bg-gray-800 p-2 rounded-full hover:bg-gray-300 hover:text-gray-500 text-white">
            <label htmlFor="bannerUrl">
                <FaCamera className="cursor-pointer" size={24}/>
            </label>
            <input type="file" id='banner-upload' accept='image/*' className='hidden' onChange={handleImageChange}/>
        </button>
      </div>

      <div className='ml-4 mt-[2rem] items-center flex'>
        <img src={profileUrl} alt="profile picture" className='w-40 h-40 rounded-full object-cover border-white relative'/>
        <button className='absolute mt-[10rem] ml-[4rem] z-10 bg-gray-800 hover:bg-gray-600 rounded-full text-white p-2 '>
          <label htmlFor="profile-upload" className='cursor-pointer'>
            <FaCamera size={24}/>
          </label>
          <input type="file" id="profile-uploaded" className='hidden' accept='image/*' onChange={handleProfileChange}/>
        </button>
        <div className='ml-4 mt-4'>
          <h1 className='text-2xl font-bold ml-[4rem]'>Cheramalk</h1>
          <p className='ml-[4rem]'>2M views</p>
          <p className='mt-2 ml-[4rem]'>This is my YouTube Channal and You Will see My Change</p>
          <button className='ml-[4rem] bg-red-700 text-white py-2 rounded-full hover:bg-black mt-4 px-3'>Sebscribe</button>
        </div>
      </div>
      <Tabs />
    </div>
  )
}

export default Profile