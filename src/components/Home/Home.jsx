import img1 from "../../assets/img/specials-1.jpg";
import img2 from "../../assets/img/specials-2.jpg";
import img3 from "../../assets/img/specials-3.jpg";

const Home = () => {
  const dishes = [
    {
      id: 1,
      name: "Islas Marianas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 18,
      img: img1,
    },
    {
      id: 2,
      name: "Waikiki",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 25,
      img: img2,
    },
    {
      id: 3,
      name: "Puerto vanus",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 28,
      img: img3,
    },
  ];

  const platos = dishes.map((plato) => {
    return (
      <div className="card" id="menu">
        <img src={plato.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{plato.name}</h5>
          <p class="card-text">{plato.description}</p>
          <p class="card-text">{plato.price} Euros </p>
          <a href="www.google.es" class="btn btn-primary">
            Ingredientes y Alergenos
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="home">
      <div className="container">
        <h2 className="plate-title">Nuestros Sabores Mas deseados</h2>
      </div>
      <div className="card-deck">{platos}</div>
    </div>
  );
};

export default Home;
