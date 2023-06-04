'use client'
// import {setData} from "../contact/route"
import React, {useState} from 'react'
import axios from 'axios'

export default function Forms () {
    const [data, setData] = useState({price:"0", currency:"USD", file:null })
    console.log(data)

    const handleSubmit = async (e) =>{

        e.preventDefault();
        const { price, currency } = data;
        const body = JSON.stringify({price, currency})
        await axios.post('api/contact', body )
    }

  return (
    <form method="POST" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input onChange={(e) => setData({...data, price:e.target.value})} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"/>
                <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">Currency</label>
                <select onChange={(e) => setData({...data, currency:e.target.value})}id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                </select>
                </div>
            </div>
        </div>
        <div>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input onChange={(e) => setData({...data, file:e.target.files})} type="file" name="file" id="file" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"/>
            </div>
        </div>
        <div className="relative mt-2 rounded-md shadow-sm flex justify-center">
            <button type="submit" className="bg-[#000000] text-white rounded py-2 px-4">submit</button>
        </div>
    </form>
  )
}
