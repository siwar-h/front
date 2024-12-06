import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Sophie D.",
    text: "Cette application a révolutionné ma façon de gérer mon emploi du temps. Simple, rapide et efficace, je ne peux plus m'en passer !",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Amine K.",
    text: "L'interface utilisateur est intuitive et les fonctionnalités sont parfaitement adaptées à mes besoins. Bravo à l'équipe !",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Nour H.",
    text: "Grâce à cette application, j'ai pu améliorer ma productivité de manière significative. Je la recommande à 100%.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Youssef B.",
    text: "Un service client exceptionnel et une application performante. Une combinaison rare !",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Meryem L.",
    text: "Une application incontournable pour organiser mes projets. Ergonomique et fiable, c'est un outil que je recommande vivement.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-yellow-500"
          >
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400"
          >
            Sont des retours d'expérience ou des avis partagés par des clients,
            utilisateurs ou partenaires, visant à attester de la qualité d'un
            produit, d'un service ou d'une expérience.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="testimonial-card">
                <img
                  src={data.img}
                  alt={data.name}
                  className="testimonial-img rounded-full mx-auto"
                />
                <h3 className="text-xl font-bold mt-4">{data.name}</h3>
                <p className="text-sm text-gray-600 mt-2">"{data.text}"</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

