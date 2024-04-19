import React from 'react'
import { Link } from "react-router-dom"
import NavTop from '../components/nav-top/NavTop'
import NavBottom from '../components/NavBottom'


const Cart = () => {


    return (
        <div className="bg-slate-200">

            <NavTop />

            <div className='flex w-3/4 mb-9 mt-9 m-auto p-5 shadow-lg'>
                <div className='m-2 h-96 border w-full'>
                    <div className='flex justify-around mb-5'>
                        <h1 className='text-xl font-bold'> Shopping cart </h1>
                        <p> X items </p>
                    </div>

                    <div className='items'>
                        <div className='flex justify-around border-t-4 border-slate-300 p-2'>
                            <img src='' alt='image' />
                            <div className=''>
                                <p> Title </p>
                                <p> Description </p>
                            </div>
                            <div className=''>
                                <label for="quantity">Quantity</label> <br />
                                <select id="quantity" name="quantity" className='w-16'>
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p>$ 0.00 </p>
                        </div>


                        <div className='flex justify-around border-t-2 border-slate-300 p-2'>
                            <img src='' alt='image' />
                            <div className=''>
                                <p> Title </p>
                                <p> Description </p>
                            </div>
                            <div className=''>
                                <label for="quantity">Quantity</label> <br />
                                <select id="quantity" name="quantity" className='w-16'>
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p>$ 0.00 </p>
                        </div>


                        <div className='flex justify-around border-t-2 border-slate-300 p-2'>
                            <img src='' alt='image' />
                            <div className=''>
                                <p> Title </p>
                                <p> Description </p>
                            </div>
                            <div className=''>
                                <label for="quantity">Quantity</label> <br />
                                <select id="quantity" name="quantity" className='w-16'>
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p>$ 0.00 </p>
                        </div>


                        <div className='flex justify-around border-t-2 border-slate-300 p-2'>
                            <img src='' alt='image' />
                            <div className=''>
                                <p> Title </p>
                                <p> Description </p>
                            </div>
                            <div className=''>
                                <label for="quantity">Quantity</label> <br />
                                <select id="quantity" name="quantity" className='w-16'>
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p>$ 0.00 </p>
                        </div>
                        <Link to={"/"} > <button className='mt-5'>← Back to shop </button></Link>

                    </div>
                </div>

                <div className='summary bg-gray-300 w-96 rounded self-center m-5 p-2 shadow-lg'>
                    <div className='p-2'>
                        <div className='title mb-5'>
                            <h1 className='text-xl font-medium'> Summary </h1>
                        </div>

                        <div className='flex justify-between p-2 border-t-2 border-slate-400'>
                            <p> Items X</p>
                            <p> $0.00</p>
                        </div>

                        <div className='text-center mt-5'>
                            <label for="shipping">Shipping</label> <br />
                            <select id="shipping" name="shipping" className='w-full p-2 rounded'>
                                <option value="">Standard</option>
                                <option value="">Express</option>
                            </select>
                        </div>

                        <div className='flex justify-between mt-3'>
                            <p> Total Price </p>
                            <p> $0.00 </p>
                        </div>
                        <button className='bg-black text-white p-2 w-full ring-2 rounded mt-4'> CHECKOUT </button>
                    </div>
                </div>
            </div>
            <NavBottom />
        </div>
    )
}

export default Cart