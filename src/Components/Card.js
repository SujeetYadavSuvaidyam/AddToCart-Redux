import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BiRupee } from 'react-icons/bi'
import { MdShoppingBasket } from 'react-icons/md'
import { FcFlashAuto } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { Cart } from './Redux/action/action'


export const Card = () => {
    const [myData, setmyData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) =>
                setmyData(res.data)
                // {
                //     console.log(res.data)
                //   }
            )


    }, [])

    return (
        <>
            <div className='w-full h-full'>
                <div className='flex mt-5'>
                    <div className='text-4xl mx-2'><FcFlashAuto /></div>
                    <div className='text-2xl font-medium'>Flash Deals</div>
                </div>
                <div className=' w-full flex justify-center flex-wrap'>
                    {
                        myData.map((e) => {
                            return <>
                                <div key={e.id} className='w-1/4 min-w-[280px]'>
                                    <div className='shadow-lg border-2 mt-5 mx-2 rounded-md pb-3'>
                                        <p className='w-[70px] text-sm font-semibold text-center text-white bg-orange-500 px-1 py-1 mt-2 shadow-lg mx-3 rounded-full'>30% Off</p>
                                        <div className='flex justify-center'>
                                            <img src={e.image} alt="" className='w-44 p-2 h-44 mt-4' />
                                        </div>
                                        <div className='text-md font-serif font-semibold text-orange-500 mx-3 mt-2'>
                                            <h1>{e.category}</h1>
                                        </div>
                                        <div className='flex justify-between   font-bold text-orange-500 mx-3'>
                                            <div className='flex text-lg  font-bold text-orange-500'>
                                                <span className='mt-[5px]'><BiRupee /></span>
                                                <h1>{e.price}</h1>
                                            </div>
                                            <div className='text-[23px] cursor-pointer'>
                                                <span><MdShoppingBasket onClick={() => dispatch(Cart(e))} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}
