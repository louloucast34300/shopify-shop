export interface Product {
  node:{
    id:number,
    title:string,
    tags:string[],
    handle:string,
    priceRange: {
        minVariantPrice:{
            amount:string
        }
    }
    images:{
        edges:[
            {node:{
                url:string,
                altText?:string
            }}
        ]
    }
  }
}