import React from 'react';

const foodList = [
  {
    id:1,
    name:"pizza",
    image:"https://doughboyspizza.com/wp-content/uploads/2017/05/Foodz22.jpg"
  },
  {
    id:2,
    name:"beef",
    image:"https://halalexoticmeats.co.uk/wp-content/uploads/2015/01/A06248B7-5BEC-41C2-86A8-47618D02A231.jpeg"
  },
  {
    id:3,
    name:"kimchi",
    image:"http://www.maangchi.com/wp-content/uploads/2013/07/kimchi_1.jpg"
  },
  {
    id:4,
    name:"samgeopsal",
    image:"http://sites.psu.edu/jiyoonpassionblog/wp-content/uploads/sites/21669/2015/02/20140603181421_7159.jpg"
  },
  {
    id:5,
    name:"chiecken",
    image:"https://www.easyanddelish.com/wp-content/uploads/2016/08/One-Pot-Chicken-in-Lime-Coconut-Sauce-4-FromBrazilToYou.Org_.jpg"
  }
];

function Food({ name, picture }) {
  return (
    <>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </>
  );
}

function App() {
  return (
    <>
      {foodList.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </>
  );
}

export default App;
