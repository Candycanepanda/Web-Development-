import React from "react";
import "./Menu.css";

function Menu() {
  const dishes = [
    { id: 1, name: "Margherita Pizza", price: "$10" },
    { id: 2, name: "Pasta Alfredo", price: "$12" },
    { id: 3, name: "Caesar Salad", price: "$8" },
    { id: 4, name: "Grilled Chicken", price: "$15" },
  ];

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="menu-card">
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
