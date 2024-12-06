import React from "react";
import { FaStar } from "react-icons/fa"; // Import des icônes pour les étoiles
import image1 from "../componets/images/banner/s1.webp";
import image2 from "../componets/images/banner/s9.jpg";
import image3 from "../componets/images/banner/s3.webp";

const ProductsData = [
  {
    id: 1,
    ima: image1,
    title: "Summer Collection",
    description: "A vibrant collection of summer wear perfect for sunny days.",
  },
  {
    id: 2,
    ima: image2,
    title: "Sun-Kissed Styles",
    description:
      "Explorez notre sélection de vêtements d'été à la fois décontractés et tendance, idéals pour les moments de détente et d'aventure.",
  },
  {
    id: 3,
    ima: image3,
    title: "Modern Gadgets",
    description:
      "Des tenues légères et colorées, parfaites pour briller sous le soleil tout en restant élégantes et à l'aise.",
  },
];

const TopProducts = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      {/* Section Header */}
      <div className="text-left mb-10">
        <p
          data-aos="fade-up"
          className="text-sm text-yellow-500 uppercase tracking-wider"
        >
          Top Rated Products For You
        </p>
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold text-gray-800 dark:text-white mb-2"
        >
          Best Products
        </h1>
        <p
          data-aos="fade-up"
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          Discover the most popular products carefully selected for you.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {ProductsData.map((product ,index) => (
          <div
            key={product.id}
            className="group rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl transition-all duration-300 max-w-[300px] overflow-hidden"
            data-aos="fade-up" // Ajout de data-aos ici
      data-aos-delay={index * 100} // Optionnel : ajout d'un délai pour un effet d'escalade
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.ima}
                alt={product.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center"> {/* Centrer le contenu */}
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              
              {/* Stars Rating */}
              <div className="flex items-center justify-center gap-1 mb-2"> {/* Centrer les étoiles */}
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                {/* Bouton visible en hover */}
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

