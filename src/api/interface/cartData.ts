export interface cartDataInterFace {
    cart: {
      id: string;
      createdAt: string;
      updatedAt: string;
      lines: {
        edges: {
          node: {
            id: string;
            merchandise: {
              product: {
                title: string;
                featuredImage: {
                  originalSrc: string;
                };
              };
              priceV2: {
                amount: number;
                currencyCode: string;
              };
            };
            quantity: number;
          };
        }[];
      };
      cost: {
        totalAmount: {
          amount: number;
          currencyCode: string;
        };
        subtotalAmount: {
          amount: number;
          currencyCode: string;
        };
        totalTaxAmount: {
          amount: number;
          currencyCode: string;
        };
        totalDutyAmount: {
          amount: number;
          currencyCode: string;
        };
      };
    };
  }