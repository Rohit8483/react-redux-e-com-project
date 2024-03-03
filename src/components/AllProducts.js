import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/action";
import MyCard from "./Card";

const AllProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchAllproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchAllproducts();
  }, []);
  console.log("products: ", products);

  const renderProducts = products.map((product) => {
    const { id } = product;
    return <MyCard key={id} product={product} />;
  });
  return <div className="ui grid container">{renderProducts}</div>;
};

export default AllProductPage;