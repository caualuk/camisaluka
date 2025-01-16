import React from "react";
import "./Item.css"; 

function Item({ item }) {
  return (
    <div>
      <h3>Músicas</h3>
      <img
        src={item.pictureUrl}
        alt={item.title}
        />
      <h4>{item.title}</h4>
      <p>Preço: R$ {item.price}</p>
      <button onClick={() => alert(`Detalhes de ${item.title}`)}>
        Veja detalhes do produto
      </button>
      <p className="estoque">Em estoque: {item.stock}</p>
    </div>
  );
}

export default Item;
