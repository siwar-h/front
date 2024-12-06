import React, { useState, useEffect } from 'react';  // Import des hooks useState et useEffect
import image1 from '../componets/images/banner/image1.avif';
import image2 from '../componets/images/banner/image2.avif';
import image3 from '../componets/images/banner/image3.jpg';
import image4 from '../componets/images/banner/image4.avif';
import image7 from '../componets/images/banner/image7.webp';
import image8 from '../componets/images/banner/image8.webp';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";  // Import des icônes en une seule ligne

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image7,
        image8
    ];

    // Fonction pour changer l'image suivante
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % desktopImages.length);
    };

    // Fonction pour revenir à l'image précédente
    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
    };

    // Auto-défilement des images toutes les 5 secondes
    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto px-4 rounded">
            <div className="h-56 md:h-72 w-full bg-slate-200 relative z-10"> {/* Ajout de z-10 */}
  {/* Boutons de navigation */}
  <div className="absolute z-10 h-full w-full md:flex items-center hidden">
    <div className="flex justify-between w-full text-2xl">
      <button onClick={prevImage} className="bg-white shadow-md rounded-full p-1">
        <FaAngleLeft />
      </button>
      <button onClick={nextImage} className="bg-white shadow-md rounded-full p-1">
        <FaAngleRight />
      </button>
    </div>
  </div>
  {/* Affichage des images */}
  <div className="flex h-full w-full overflow-hidden">
    <img
      src={desktopImages[currentImage]}
      alt={`Image ${currentImage + 1}`}
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
    );
};

export default BannerProduct;

