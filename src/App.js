import React from 'react';

function Food({ name, picture }) {
  return (
    <>
      <h1>I like {name}</h1>;
      <img src={picture} />;
    </>
  );
}

const foodList = [
  {
    name:"pizza",
    image:"https://doughboyspizza.com/wp-content/uploads/2017/05/Foodz22.jpg"
  },
  {
    name:"beef",
    image:"https://halalexoticmeats.co.uk/wp-content/uploads/2015/01/A06248B7-5BEC-41C2-86A8-47618D02A231.jpeg"
  },
  {
    name:"kimchi",
    image:"http://www.maangchi.com/wp-content/uploads/2013/07/kimchi_1.jpg"
  },
  {
    name:"samgeopsal",
    image:"http://sites.psu.edu/jiyoonpassionblog/wp-content/uploads/sites/21669/2015/02/20140603181421_7159.jpg"
  },
  {
    name:"chiecken",
    image:"https://www.easyanddelish.com/wp-content/uploads/2016/08/One-Pot-Chicken-in-Lime-Coconut-Sauce-4-FromBrazilToYou.Org_.jpg"
  }
];

function App() {
  return (
    <>
      {foodList.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </>
  );
}

export default App;
