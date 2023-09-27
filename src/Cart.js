import React, { useState } from 'react'
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { Remove } from './Components/Redux/action/action'
import cart from './img/cart.webp'

export const Cart = () => {
    const item = useSelector(state => state.cart)
    const [close, setmyclose] = useState([])
    const toggles = () => {
        // setmyclose(!close)
        console.log(close)
    }
    console.log(item)
    const dispatch = useDispatch()

    return (
        <>
            <div className='absolute w-96 h-96 border-l-2 shadow-lg bg-gray-50 mt-5 -right-[60px]'>
                <div>
                    {item.length <= 0 ? <div>
                        <img src={cart}></img>
                        <p className='text-black text-center'>Cart Is Empty</p>
                    </div> : <>
                        <div className='flex justify-between mx-3'>
                            <h1 className='text-black'>Shopping Cart</h1>
                            <span className='text-black mt-1'><AiOutlineClose onClick={toggles(() => setmyclose(true))} />
                            </span>
                        </div>
                        <div className='text-orange-500 flex justify-between mx-3 text-[17px] font-semibold mt-2'>
                            <span>Image</span>
                            <span>Name</span>
                            <span>Price</span>
                        </div></>}
                </div>

                {
                    item.map(e => (
                        <>

                            <div key={e.id}>
                                <div className='w-full flex mt-5'>
                                    <div className='w-1/3  mx-3'>
                                        <img src={e.image} alt="" className='w-[60px]' />
                                    </div>
                                    <div className='w-[100%] mt-2'>
                                        <p className='text-black text-sm text-center'>{e.category}</p>
                                    </div>
                                    <div className='w-1/3 text-black text-sm text-center font-semibold mt-2'>
                                        <span>{e.price}</span>
                                    </div>
                                </div>
                                <div className='flex justify-end mx-5'>
                                    <p className=' text-black text-xl  font-semibold' onClick={() => dispatch(Remove(e.id))}><AiFillDelete /></p>
                                </div>

                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}
