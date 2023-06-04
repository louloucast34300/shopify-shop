
import { revalidatePath } from "next/cache";
import { storefront } from "../storefront"
import { redirect } from 'next/navigation';

import {addToCartQuery,addToExistingCartQuery} from '../query/addToCart.query'



export const productData = async (query:any, variable = {}) => {
        const store = await storefront(query, variable = {})
        const parse  = await store.json()
        console.log(parse.data.products.edges)
        const dataProduct = parse.data.products.edges

    return {dataProduct}
}

export const singleProductData = async (query:any, variable:object) => {
        const store = await storefront(query, variable)
        const parse = await store.json()

        const singleProduct = parse.data.productByHandle
    
        const id  = singleProduct.variants.edges[0].node.id
        const title = singleProduct.title
        const description = singleProduct.description
        const update = singleProduct.updatedAt
        const tags = singleProduct.tags
        const price = singleProduct.priceRange.minVariantPrice.amount
        const thumbnail = singleProduct.images.edges[0].node.url


    return { id, title, description, update, tags, price, thumbnail } ;
}

export const checkoutData = async (query: any, variable:object) => {
    const store = await storefront(query, variable)
    const data = await store.json()

    return {data}
}


export const addToCart = async (variable:any) => {
    console.log(variable)
const currentCart = localStorage.getItem('currentCart')
    if(currentCart){
        const store = await storefront(addToExistingCartQuery, {
            variantId: variable.variantId,
            cartId: currentCart,
            quantity: 1
        })
        const data = await store.json()
        console.log(data)
        return {'ok':'push to existing cart'}
    }else{
     const store = await storefront(addToCartQuery, variable)
     const data = await store.json()
     console.log(data.data.cartCreate.cart.id)
    localStorage.setItem('currentCart', data.data.cartCreate.cart.id);
    
    return {'ok':"coucou"}
    }


}

export const getCart = async (query:any, variable:object) => {
    const store = await storefront(query, variable);
    const data = await store.json()
    return data
}