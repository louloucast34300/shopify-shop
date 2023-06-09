import Image from 'next/image'
import { productsQuery } from '../../api/query/products.query'
import type { Product } from '../../api/interface/products.interface' 
import { productData } from '@/api/controller/products.controller'
import { formatPrice } from '../utils/formatPrice'
import Link from 'next/link'



  export default async function ProductList() {
    const {dataProduct} = await productData(productsQuery)
    return (
      <div className="bg-white w-full">
        <div className="mx-auto p-20 w-full">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {dataProduct.map((product:Product,i:number) => {
              console.log(product.node.images.edges[0].node.url)
                  const imageProduct = product.node.images.edges[0].node.url
                  const titleProduct = product.node.title
                  const tagProduct = product.node.tags[0]
                  const priceProduct = product.node.priceRange.minVariantPrice.amount
                return (
             
       <Link key={i} href={`/products/${product.node.handle}`} className="group">
                <div className="aspect-h-3 aspect-w-4 w-full overflow-hidden rounded-lg bg-gray-200 ">
                  <img
                    src={imageProduct}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{titleProduct}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{formatPrice(priceProduct)}</p>
              </Link>
                )
            }
       )}
          </div>
        </div>
      </div>
    )
  }
  
  