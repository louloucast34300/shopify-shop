'use client'

import { useState } from 'react';

import { addToCart } from '@/api/controller/products.controller';
import { addToCartQuery } from '@/api/query/addToCart.query';



// attention : pour le moment l'ajout d'un produit crée également un nouveau panier, il faut pouvoir créer un nouveau panier dès que l'utilisateur arrive sur le site et garder celui-ci tout le temps. ou la première fois qu'il ajoute un produit (dans le local storage peut etre)
const BoutonAjoutPanier = ({ productId }:any) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(productId)
  const ajouterAuPanier = async () => {
    setIsLoading(true);

    await addToCart({variantId:productId})

    setIsLoading(false);
  };

  return (
    <button onClick={ajouterAuPanier} disabled={isLoading}>
      {isLoading ? 'Ajout en cours...' : 'Ajouter au panier'}
    </button>
  );
};

export default BoutonAjoutPanier;