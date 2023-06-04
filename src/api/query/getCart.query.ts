export const getCartQuery = `
query($cartId: ID!) {
  cart(id: $cartId) {
    id
    createdAt
    updatedAt
    lines(first: 10) {
      edges {
        node {
          id
          merchandise {
            ... on ProductVariant {
              id
              title
              priceV2 {
                amount
                currencyCode
              }
              product {
                id
                title
                featuredImage {
                  originalSrc
                }
              }
            }
          }
          quantity
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
  }
}

`