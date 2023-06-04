export const addToCartQuery = `
mutation AjouterAuPanier($variantId: ID!) {
  cartCreate(
    input: {
      lines: [
        {
          quantity: 1
          merchandiseId: $variantId
        }
      ],
      buyerIdentity: {
        email: "example@example.com",
        deliveryAddressPreferences: {
          deliveryAddress: {
            address1: "150 Elgin Street",
            address2: "8th Floor",
            city: "Ottawa",
            province: "Ontario",
            country: "CA",
            zip: "K2P 1L4"
          },
        }
      },
      attributes: {
        key: "cart_attribute",
        value: "This is a cart attribute"
      }
    }
  ) {
    cart {
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
              }
            }
          }
        }
      }
      buyerIdentity {
        deliveryAddressPreferences {
          __typename
        }
      }
      attributes {
        key
        value
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
}
`



export const addToExistingCartQuery = `
mutation AjouterAuPanierExistant($cartId: ID!, $variantId: ID!, $quantity: Int!) {
  cartLinesAdd(cartId: $cartId, lines: [{ merchandiseId: $variantId, quantity: $quantity }]) {
    cart {
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
}
`