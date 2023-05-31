'use client'

import { checkoutData } from '@/api/controller/products.controller'
import { checkoutQuery } from '@/api/query/checkout.query'

import React, {useState} from 'react'

export default function CheckoutButton({variantId}:any){
    const [isLoading, setIsLoading] = useState(false)


    const handleCheckout = async () => {
        setIsLoading(true)

        const {data}:any = await checkoutData(checkoutQuery, {variantId})
        const {webUrl} = data.data.checkoutCreate.checkout
        window.location.href = webUrl
    }


  return (

    <button 
        type="button" 
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleCheckout}
        >
        {isLoading ? 
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin:'auto', background: 'transparent', display: 'block'}} width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="30" stroke="#dedede" strokeWidth="10" fill="none"></circle>
        <circle cx="50" cy="50" r="30" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform>
          <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"></animate>
        </circle>
        </svg>
        :
        'Add to bag'
        }
    </button>
  )
}

