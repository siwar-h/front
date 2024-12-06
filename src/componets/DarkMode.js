import React, { useState, useEffect } from 'react';
import DarkButton from '../componets/images/banner/darkMode.png';
import LightButton from '../componets/images/banner/lightMode.png';

const DarkMode = () => {
  // État pour gérer le mode actuel (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Basculer entre le mode sombre et clair
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Ajouter ou retirer la classe "dark" au body
    if (!isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Sauvegarder la préférence utilisateur
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Sauvegarder la préférence utilisateur
    }
  };

  // Charger la préférence utilisateur au montage du composant
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <img
        src={isDarkMode ? DarkButton : LightButton}
        alt="Toggle Theme"
        className="w-12 h-8 rounded-full cursor-pointer drop-shadow-lg transition-transform duration-300 hover:scale-110"
        onClick={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;
