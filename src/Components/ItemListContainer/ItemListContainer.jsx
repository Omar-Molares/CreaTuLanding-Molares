/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { getCategory, getProducts } from "../../../asyncMock";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getCategory(catId).then((response) => setProducts(response));
    }
  }, [catId]);

  return (
    <>
      <div className="body">
        <h2>Mis pruductos</h2>
        <div className="product">
          {products?.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
