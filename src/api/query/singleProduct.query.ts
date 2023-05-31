
export const SingleProductQuery = `
query SingleProduct($handle:String!) {
    productByHandle(handle: $handle){
      title
      description
      updatedAt
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
      variants(first: 1){
        edges{
          node{
            id
          }
        }
      }
    }
  }
`