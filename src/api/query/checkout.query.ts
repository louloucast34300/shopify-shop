export const checkoutQuery = `
mutation CheckoutCreate($variantId: ID!){
    checkoutCreate(input:{
      lineItems:{
        variantId: $variantId
        quantity: 1
      }
    }){
      checkout{
        webUrl
      }
    }
  }
`