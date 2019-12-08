import React from 'react';
import PropTypes from "prop-types";

const foodList = [
  {
    id:1,
    name:"pizza",
    image:"https://doughboyspizza.com/wp-content/uploads/2017/05/Foodz22.jpg",
    rating:4.2,
  },
  {
    id:2,
    name:"beef",
    image:"https://halalexoticmeats.co.uk/wp-content/uploads/2015/01/A06248B7-5BEC-41C2-86A8-47618D02A231.jpeg",
    rating:4.5,

  },
  {
    id:3,
    name:"kimchi",
    image:"http://www.maangchi.com/wp-content/uploads/2013/07/kimchi_1.jpg",
    rating:4.4,
  },
  {
    id:4,
    name:"samgeopsal",
    image:"http://sites.psu.edu/jiyoonpassionblog/wp-content/uploads/sites/21669/2015/02/20140603181421_7159.jpg",
    rating:4.9
  },
  {
    id:5,
    name:"chiecken",
    image:"https://www.easyanddelish.com/wp-content/uploads/2016/08/One-Pot-Chicken-in-Lime-Coconut-Sauce-4-FromBrazilToYou.Org_.jpg",
    rating:4.5
  }
];

function Food({ name, picture, rating }) {
  return (
    <>
      <h1>I like {name}</h1>
      <h3>{rating}/5.0</h3>
      <img src={picture} alt={name} />
    </>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <>
      {foodList.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </>
  );
}

export default App;
