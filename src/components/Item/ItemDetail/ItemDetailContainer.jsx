import React from "react";
import ItemDetail from "./ItemDetail"; 

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Samsung Galaxy S20 FE",
        description: "Smartphone com 6GB RAM, 128GB de armazenamento, cor Cloud Navy.",
        price: 76999,
        mainImage: "https://http2.mlstatic.com/D_NQ_NP_2X_976503-MLA44281674509_122020-F.webp",
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando detalhes do produto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
