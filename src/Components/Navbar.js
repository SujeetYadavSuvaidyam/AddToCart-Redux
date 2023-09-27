import React from 'react'
import logo from '../img/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { useState } from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { Cart } from '../Cart'
import { useSelector } from 'react-redux'
export const Navbar = () => {

    const [cart, setcart] = useState(false)
    const [heart, setheart] = useState(false)
    const item = useSelector(state => state.cart)
    const handlecart = () => {
        setcart(!cart)
        // console.log(cart)
    }
    const handleheart = () => {
        setheart(!heart)
    }
    return (
        <>
            <div className='w-full h-16 bg-orange-500 flex justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='h-8 md:w-28 md:mx-20' />
                </div>
                <div className='flex relative items-center justify-end'>
                    <input type="search" placeholder='Search for anythings' className='outline-none p-[10px] rounded-md md:w-[600px]' />
                    <div className='absolute'><AiOutlineSearch className='cursor-pointer  text-white md:w-full  bg-yellow-400 w-12 p-2 rounded-sm  h-11' /></div>
                </div>
                <div className='flex items-center w-44 mx-16'>
                    <div className='mx-4 text-lg text-white group'>
                        <h1 className='group-hover:block cursor-pointer'>Sujeet</h1>
                        <div className='group-hover:block hidden absolute mt-4 text-white bg-black -mx-8 w-28 text-center py-2 rounded-lg'>
                            <h1>My Profile</h1>
                        </div>
                    </div>
                    <div className='mx-4 text-2xl text-white cursor-pointer'>
                        {heart === true ? <FaHeart onClick={handleheart} className='text-red-500' /> :
                            <BsFillSuitHeartFill onClick={handleheart} />}
                    </div>
                    <div className='mx-4 text-2xl text-white cursor-pointer  relative'>
                        <BsCart onClick={handlecart} />
                        {
                            item.length <= 0 ? '' : <p className='absolute w-4 h-4 rounded-full flex justify-center items-center bg-blue-600 -right-2 -top-2 text-sm'>{item.length}</p>

                        }
                       
                        {cart === true ? <Cart /> : null}
                    </div>
                </div>
            </div>
        </>
    )
}