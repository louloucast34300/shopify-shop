"use client"
import { useEffect, useState } from 'react';
import { getCart } from '@/api/controller/products.controller';
import { getCartQuery } from '@/api/query/getCart.query';
import { formatPrice } from '../utils/formatPrice';
import type {cartDataInterFace} from '../../api/interface/cartData'
const Panier = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartData, setCartData] = useState<cartDataInterFace | null>(null);
  const [toggleCart, setToggleCart] = useState(true);

  console.log(cartData);
  useEffect(() => {
    const fetchData = async () => {
      const cartId = localStorage.getItem('currentCart')
      const response = await getCart(getCartQuery, {
        cartId: cartId,
      });

      setCartData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [toggleCart]);

  if (isLoading) {
    return <p>Chargement du panier...</p>;
  }

  if (!cartData) {
    return <p>Une erreur sest produite lors de la récupération du panier.</p>;
  }

  return (
    <div>
      <button onClick={() => setToggleCart(!toggleCart)} className="text-black text-[18px] font-regular absolute right-8 top-4 border-2 border-black-500 px-4 rounded-lg">
        Panier
      </button>
      {toggleCart && (
        <div className="bg-black/50 fixed top-0 right-0 left-0 bottom-0 h-full z-2">
          <div className="fixed top-0 bottom-0 w-[400px] right-0 h-full bg-white z-3">
            <div className="cart-header h-[100px] border-b-2 relative mx-3">
              <button
                onClick={() => setToggleCart(!toggleCart)}
                className="text-black text-[24px] font-regular absolute right-4 top-2 border-2 border-black/50-500 px-4 rounded-lg"
              >
                x
              </button>
            </div>
            <div className="cart-body  border-b-2 relative mx-3">
              {!isLoading &&
                cartData.cart.lines.edges.map((product) => {
                  const title = product.node.merchandise.product.title;
                  const imgSrc = product.node.merchandise.product.featuredImage.originalSrc;
                  const price = product.node.merchandise.priceV2.amount;
                  const quantity = product.node.quantity;
                  const priceAndQuantity = price * quantity;
                  return (
                    <div className="flex py-4 px-7 items-center justify-between" key={product.node.id}>
                      <div className="img-bloc w-[100px] h-[100px] overlfow-hidden rounded-lg">
                        <img src={imgSrc} alt="" className="object-cover h-full w-full rounded-lg" />
                      </div>
                      <div className="px-2">
                        <h1 className="text-black">{title}</h1>
                        <div>prix/u : {formatPrice(price)}</div>
                        <div>Quantité : {quantity} </div>
                      </div>
                      <div className="px-2">
                        <h1 className="text-black">{formatPrice(priceAndQuantity)}</h1>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="cart-summary px-7 py-4 text-[20px]">
              <div>Subtotal : {formatPrice(cartData.cart.cost.subtotalAmount.amount)}</div>
              <div>
                Shipping estimate :{' '}
                {cartData.cart.cost.totalDutyAmount ? cartData.cart.cost.totalDutyAmount.amount.toString() : formatPrice(0)}
              </div>
              <div>
                Tax estimate :{' '}
                {cartData.cart.cost.totalTaxAmount ? cartData.cart.cost.totalTaxAmount.amount.toString() : formatPrice(0)}
              </div>
              <div>Total : {formatPrice(cartData.cart.cost.totalAmount.amount)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;