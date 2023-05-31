export const productsQuery = `
query Products {
  products(first:6){
    edges{
      node{
        title
        handle
        tags
        priceRange{
          minVariantPrice{
            amount
          }
        }
        images(first:1){
          edges{
            node{
              url
              altText
            }
          }
        }
      }
    }
  }
}
`