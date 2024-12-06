import React from 'react';
// import {Product} from '../componets/Product'
// import ProductCart from './productCart';
import ItemCard from '../componets/itemCard'
import { Product } from '../componets/Product'
import Cart from './cart';
import { CartProvider } from 'react-use-cart';


const JeansPage = () => {
  return (
    <CartProvider>
      <div className="text-3xl my-5">
        <h1 className="text-center mb-8">Our Jeans Collection</h1>
        <section className="py-4 container">
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              {Product.map((item, index) => {
                return (
                  <ItemCard
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    item={item} // Passe l'objet entier pour permettre l'ajout au panier
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* Affichage du panier */}
        <Cart />
      </div>
    </CartProvider>
    
  );
};

export default JeansPage;
