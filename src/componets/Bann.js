import React from 'react';
import BannerImg from '../componets/images/banner/solde.jpeg'; // Assurez-vous que le chemin d'image est correct

import { GrSecure } from 'react-icons/gr'; // Icône GrSecure
// import { IoMdFastfood } from 'react-icons/io'; // Correction de l'icône Fast Food
import { GiFoodTruck } from 'react-icons/gi'; // Icône FoodTruck
import { IoMdGift } from 'react-icons/io'; // Icône Get Offers

const Bann = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image de la bannière */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* Texte et icônes */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 -tracking-wider leading-5">
              Transformez votre garde-robe cet hiver avec notre Winter Sale exceptionnelle ! Profitez de 50% de réduction sur une large sélection de vêtements, chaussures et accessoires. Des manteaux chauds aux écharpes douillettes, trouvez tout ce dont vous avez besoin pour affronter la saison avec style, sans vous ruiner. Ne manquez pas cette opportunité de faire des économies tout en vous offrant des pièces tendance et confortables. Dépêchez-vous, les stocks sont limités et cette offre exclusive ne dure pas éternellement !
            </p>
            
            {/* Liste d'icônes */}
            <div className="flex flex-col gap-4">
              {/* Quality Products */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              {/* Fast Delivery */}
              {/* <div data-aos="fade-up" className="flex items-center gap-4">
                <IoMdFastfood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div> */}

              {/* Easy Payment Method */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Method</p>
              </div>

              {/* Get Offers */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoMdGift className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bann;
