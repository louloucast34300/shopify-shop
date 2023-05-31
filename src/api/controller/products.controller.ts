import { storefront } from "../storefront"

export const productData = async (query:any, variable = {}) => {
        const store = await storefront(query, variable = {})
        const parse  = await store.json()

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
